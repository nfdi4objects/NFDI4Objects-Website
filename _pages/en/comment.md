---
layout: help
title: Commons Commentary
description: Contact form to comment on Commons-entries
keywords: commens, commentary
lang: en
translation_key: comment
permalink: /en/comment/
---

# Commons Kommentierung ohne Anmeldung im Community Hub

<form id="commentform">
  <input type="checkbox" id="anonymous" name="anonymous">
  <label for="anonymous">I want to comment anonymously</label><br><br>

  <div id="personalfields">
  <label for="name">Last name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="gname">First name:</label><br>
  <input type="text" id="gname" name="gname" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>
  </div>

  <label for="subject">Name of the Commons contribution:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="message">Your comment:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">I have taken note of the <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">privacy policy</a> and consent to the publication of my comment.</label><br><br>

  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>

<script>
  (function() {
    var box = document.getElementById("anonymous");
    var fields = document.getElementById("personalfields");
    box.addEventListener("change", function() {
      if (box.checked) {
        fields.style.display = "none";
        document.getElementById("name").value = "John";
        document.getElementById("gname").value = "Doe";
        document.getElementById("email").value = "John.Doe@anonymous.com";
      } else {
        fields.style.display = "";
        document.getElementById("name").value = "";
        document.getElementById("gname").value = "";
        document.getElementById("email").value = "";
      }
    });
  })();
</script>

<!-- Modal for success/error messages -->
<dialog id="sentdialog">
  <p id="dialogmessage"></p>
  <button onclick="document.getElementById('sentdialog').close()">OK</button>
</dialog>