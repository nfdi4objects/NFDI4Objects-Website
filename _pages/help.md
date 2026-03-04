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

  <label for="subject">Titel:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="qcat">Ihr Anliegen:</label><br>
  <select id="qcat" name="qcat" required>
    <option value="Technical Support">Technische Unterstützung</option>
    <option value="Cooperation">Kooperation</option>
    <option value="Revocation of Data Protection Agreement">Widerruf der Datenschutzvereinbarung</option>
    <option value="Public Relations">Öffentlichkeitsarbeit</option>
    <option value="Research Funding">Forschungsförderung</option>
    <option value="Field Data">Grabungsdaten</option>
    <option value="Remote Sensing">Fernerkundung</option>
    <option value="3D-Data">3D-Daten</option>
    <option value="Legacy Data">Altdaten</option>
    <option value="Collection Data">Sammlungsdaten</option>
    <option value="Natural Scientific Data">Naturwissenschaftliche Daten</option>
    <option value="Experimental Data">Daten aus Experimenten</option>
    <option value="Protecting/Conservation Data">Schutz- und Konservierungsdaten</option>
    <option value="Long Time Data Storage">Langzeitarchivierung</option>
    <option value="Metadata & Vocabularies">Metadaten & Vokabulare</option>
    <option value="IT Services">IT-Dienste</option>
    <option value="Education & Training">Aus- und Weiterbildung</option>
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
