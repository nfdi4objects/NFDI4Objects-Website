#!/usr/bin/env python3
import os
import frontmatter
import subprocess
from pathlib import Path

# Define collections and their corresponding TTL layouts
COLLECTIONS = {
    "_ccs": "cc-ttl",
    "_twgs": "twg-ttl",
    "_trails": "trail-ttl",
    "_services": "service-ttl",
    "_persons": "person-ttl"
}

# Base directory of your Jekyll site
BASE_DIR = "/home/ffricke/NFDI4Objects-Website"
TTL_DIR = os.path.join(BASE_DIR, "_ttl")

def extract_translation_key(filepath):
    """Extract the translation_key from the front matter of a markdown file."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            post = frontmatter.load(f)
            return post.get("translation_key")
    except Exception as e:
        print(f"Error reading {filepath}: {str(e)}")
        return None

def generate_ttl_file(collection, translation_key):
    """Generate a TTL file for a given collection and translation_key."""
    if not translation_key:
        print(f"Skipping: No translation_key found.")
        return True  # Indicate that processing continued

    layout = COLLECTIONS[collection]
    collection_name = collection.lstrip("_")  # Remove leading underscore
    permalink = f"/{collection_name}/{translation_key}/index.ttl"

    ttl_content = f"""---
layout: {layout}
permalink: {permalink}
source: {translation_key}
---
"""

    # Create subdirectory if it doesn't exist
    collection_ttl_dir = os.path.join(TTL_DIR, collection_name)
    os.makedirs(collection_ttl_dir, exist_ok=True)

    # Write the TTL file
    ttl_path = os.path.join(collection_ttl_dir, f"{translation_key}.ttl")

    # Check if the content has changed
    content_changed = False
    if os.path.exists(ttl_path):
        with open(ttl_path, "r", encoding="utf-8") as f:
            existing_content = f.read()
        if existing_content != ttl_content:
            content_changed = True
    else:
        content_changed = True

    if content_changed:
        with open(ttl_path, "w", encoding="utf-8") as f:
            f.write(ttl_content)
        print(f"Generated/Updated: {ttl_path}")
        return True
    else:
        print(f"No changes needed: {ttl_path}")
        return False

def process_collection(collection):
    """Process all markdown files in the 'de/' subdirectory of a collection."""
    de_dir = os.path.join(BASE_DIR, collection, "de")
    if not os.path.exists(de_dir):
        print(f"Directory not found: {de_dir}")
        return False

    changes_made = False
    print(f"Processing collection: {collection}/de/")
    for filename in os.listdir(de_dir):
        if filename.endswith(".md"):
            filepath = os.path.join(de_dir, filename)
            translation_key = extract_translation_key(filepath)
            if translation_key:
                print(f"Found translation_key: {translation_key} in {filename}")
                if generate_ttl_file(collection, translation_key):
                    changes_made = True
            else:
                print(f"No translation_key in {filename}")
    return changes_made

def commit_and_push():
    """Commit and push the generated TTL files to Git using a fine-grained PAT."""
    try:
        os.chdir(BASE_DIR)

        # Check if there are any changes to commit
        result = subprocess.run(
            ["git", "status", "--porcelain", "_ttl/"],
            capture_output=True,
            text=True
        )
        if not result.stdout.strip():
            print("No changes in TTL files to commit.")
            return

        # Add TTL files to Git
        subprocess.run(["git", "add", "_ttl/"], check=True)

        # Commit changes
        commit_result = subprocess.run(
            ["git", "commit", "-m", "Update TTL files [automated]"],
            capture_output=True,
            text=True
        )
        if commit_result.returncode != 0:
            if "nothing to commit" in commit_result.stderr:
                print("No changes to commit.")
                return
            else:
                print(f"Error committing: {commit_result.stderr}")
                return

        # Push using the fine-grained PAT in the remote URL
        pat = os.getenv("GITHUB_PAT")
        if not pat:
            raise ValueError("GITHUB_PAT environment variable not set.")

        remote_url = f"https://oauth2:{pat}@github.com/nfdi4objects/NFDI4Objects-Website.git"
        push_result = subprocess.run(
            ["git", "push", remote_url],
            capture_output=True,
            text=True
        )
        if push_result.returncode != 0:
            print(f"Error pushing: {push_result.stderr}")
        else:
            print("Successfully pushed TTL files to Git.")
    except ValueError as e:
        print(f"Error: {str(e)}")
    except Exception as e:
        print(f"Unexpected error: {str(e)}")

def main():
    # Create _ttl directory if it doesn't exist
    os.makedirs(TTL_DIR, exist_ok=True)
    print(f"TTL files will be saved to: {TTL_DIR}")

    # Process each collection
    changes_made = False
    for collection in COLLECTIONS:
        if process_collection(collection):
            changes_made = True

    if changes_made:
        commit_and_push()
    else:
        print("No changes detected in any TTL files.")

if __name__ == "__main__":
    main()
