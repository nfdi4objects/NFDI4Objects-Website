---
layout: help
title: Hilfe & Kontakt
description: Kontaktformular für Support-Anfragen
keywords: support, kontakt, hilfe, ticket
lang: de
translation_key: help
permalink: /comment/
---

# Commons Kommentierung ohne Anmeldung im Community Hub

<form id="commentform">
  <!-- Form fields as before -->
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="gname">Vorname:</label><br>
  <input type="text" id="gname" name="gname" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="subject">Bezeichnung des Commons-Beitrags:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="message">Ihre Nachricht:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">Ich habe die <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen und bin mit der Veröffentlichung meines Kommentars einverstanden</label><br><br>

  <input type="submit" value="Senden">
  <input type="reset" value="Zurücksetzen">
</form>

<!-- Modal for success/error messages -->
<dialog id="sentdialog">
  <p id="dialogmessage"></p>
  <button onclick="document.getElementById('sentdialog').close()">OK</button>
</dialog>
