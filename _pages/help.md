---
layout: page
title: Hilfe &amp; Kontakt
description: ""
keywords: ""
lang: de
translation_key: help
permalink: /help/
---
# Hilfe &amp; Kontakt
<form id="helpdeskform">
	Name:<br>
	<input type="text" id="name" name="name" required=""><br><br>
	Vorname:<br>
	<input type="text" id="gname" name="gname" required=""><br><br>
	Email:<br>
	<input type="email" id="email" name="email" required=""><br><br>
	Titel:<br>
	<input type="text" id="subject" name="subject" required=""><br><br>
	Ihr Anliegen:<br>
	<select id="qcat" name="qcat">
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
	<option value="Metadata &amp; Vocabularies">Metadaten &amp; Vokabulare</option>
	<option value="IT Services">IT-Dienste</option>
	<option value="Education &amp; Training">Aus- und Weiterbildung</option>
	</select><br><br>
	Ihre Nachricht:<br>
	<textarea id="message" name="message" size="50" required=""></textarea><br><br>
	<input id="readdataprotection" type="checkbox" required=""><label for="readdataprotection">Ich habe die <a href="https://www.dainst.org/datenschutz" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a> zur Kenntnis genommen</label><br><br>
	<input type="submit" value="Send">
	<input type="reset" value="Reset">
</form>