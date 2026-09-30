---
layout: help
title: Hilfe & Kontakt
description: Kontaktformular für Support-Anfragen
keywords: support, kontakt, hilfe, ticket
lang: de
translation_key: comment
permalink: /comment/
---

# Commons Kommentierung ohne Anmeldung im Community Hub

<form id="commentform">
  <!-- Form fields as before -->
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" value="John" required><br><br>

  <label for="gname">Vorname:</label><br>
  <input type="text" id="gname" name="gname" value="Doe" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" value="John.Doe@anonymous.com" required><br><br>

  <label for="subject">Bezeichnung des Commons-Beitrags:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="message">Ihr Kommentar:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">Ich habe die <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen und bin mit der Veröffentlichung meines Kommentars auf dem Eintrag des Commons Beitrags auf dem <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">NFDI4Objects Community Hub</a> einverstanden</label><br><br>

  <input type="submit" value="Senden">
  <input type="reset" value="Zurücksetzen">
</form>

<!-- Modal for success/error messages -->
<dialog id="sentdialog">
  <p id="dialogmessage"></p>
  <button onclick="document.getElementById('sentdialog').close()">OK</button>
</dialog>
