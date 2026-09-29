---
layout: help
title: Hilfe & Kontakt
description: Kontaktformular für Support-Anfragen
keywords: support, kontakt, hilfe, ticket
lang: de
translation_key: help
permalink: /help/
---

# Hilfe & Kontakt

<form id="helpdeskform">
  <!-- Form fields as before -->
  <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="gname">Vorname:</label><br>
  <input type="text" id="gname" name="gname" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="subject">Betreff:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="qcat">Ihr Anliegen:</label><br>
  <select id="qcat" name="qcat" required>
    <option value="Users::Technical Support">Technische Unterstützung</option>
    <option value="Users::Cross-Cutting-Topics">Querschnittsthemen</option>
    <option value="Users::Cooporation">Kooperation</option>
    <option value="Users::Revocation of Data Protection Agreement">Widerruf der Datenschutzvereinbarung</option>
    <option value="Users::Public Relations">Öffentlichkeitsarbeit</option>
    <option value="Users::Research Funding">Forschungsförderung</option>
    <option value="Users::Field Data">Grabungsdaten</option>
    <option value="Users::Remote Sensing">Fernerkundung</option>
    <option value="Users::3D-Data">3D-Daten</option>
    <option value="Users::Legacy Data">Altdaten</option>
    <option value="Users::Collection Data">Sammlungsdaten</option>
    <option value="Users::Natural Scientific Data">Naturwissenschaftliche Daten</option>
    <option value="Users::Experimental Data">Daten aus Experimenten</option>
    <option value="Users::Protecting/Conservation">Schutz- und Konservierungsdaten</option>
    <option value="Users::Long Time Data Storage">Langzeitarchivierung</option>
    <option value="Users::Metadata & Vocabularies">Metadaten & Vokabulare</option>
    <option value="Users::IT-Services">IT-Dienste</option>
    <option value="Users::Skills & Qualification">Aus- und Weiterbildung</option>
    <option value="Users::Website">Website</option>
    <option value="Users::Commons">Commons</option>
  </select><br><br>

  <label for="message">Ihre Nachricht:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">Ich habe die <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen</label><br><br>

  <input type="submit" value="Senden">
  <input type="reset" value="Zurücksetzen">
</form>

<!-- Modal for success/error messages -->
<dialog id="sentdialog">
  <p id="dialogmessage"></p>
  <button onclick="document.getElementById('sentdialog').close()">OK</button>
</dialog>
