---
layout: help
title: Commons Kommentierung
description: Kontaktformular für die Kommentierung von Commons-Beiträgen
keywords: commens, commentary
lang: de
translation_key: comment
permalink: /comment/
---

# Commons Kommentierung ohne Anmeldung im Community Hub

<form id="commentform">
  <input type="checkbox" id="anonymous" name="anonymous">
  <label for="anonymous">Ich möchte anonym kommentieren</label><br><br>

  <div id="personalfields">
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="gname">Vorname:</label><br>
  <input type="text" id="gname" name="gname" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>
  </div>

  <label for="subject">Bezeichnung des Commons-Beitrags:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="message">Ihre Nachricht:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">Ich habe die <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen und bin mit der Veröffentlichung meines Kommentars einverstanden</label><br><br>

  <input type="submit" value="Senden">
  <input type="reset" value="Zurücksetzen">
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