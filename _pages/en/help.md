---
layout: help
title: Help & Contact
description: Contact form for support requests
keywords: support, contact, help, ticket
lang: en
translation_key: help
permalink: /en/help/
---

# Help & Contact

<form id="helpdeskform">
  <label for="name">Last Name:</label><br>
  <input type="text" id="name" name="name" required><br><br>

  <label for="gname">First Name:</label><br>
  <input type="text" id="gname" name="gname" required><br><br>

  <label for="email">Email:</label><br>
  <input type="email" id="email" name="email" required><br><br>

  <label for="subject">Subject:</label><br>
  <input type="text" id="subject" name="subject" required><br><br>

  <label for="qcat">Your Concern:</label><br>
  <select id="qcat" name="qcat" required>
    <option value="Users::Technical Support">Technical Support</option>
    <option value="Users::Cross-Cutting-Topics">Cross-Cutting-Topics</option>
    <option value="Users::Cooporation">Cooporation</option>
    <option value="Users::Revocation of Data Protection Agreement">evocation of Data Protection Agreement</option>
    <option value="Users::Public Relations">Public Relations</option>
    <option value="Users::Research Funding">Research Funding</option>
    <option value="Users::Field Data">Field Data</option>
    <option value="Users::Remote Sensing">Remote Sensing</option>
    <option value="Users::3D-Data">3D-Data</option>
    <option value="Users::Legacy Data">Legacy Data</option>
    <option value="Users::Collection Data">Collection Data"</option>
    <option value="Users::Natural Scientific Data">Natural Scientific Data</option>
    <option value="Users::Experimental Data">Experimental Data</option>
    <option value="Users::Protecting/Conservation">Protecting/Conservation</option>
    <option value="Users::Long Time Data Storage">Long Time Data Storage</option>
    <option value="Users::Metadata & Vocabularies">Metadata & Vocabularies</option>
    <option value="Users::IT-Services">IT-Services</option>
    <option value="Users::Skills & Qualification">Skills & Qualification</option>
    <option value="Users::Website">Website</option>
    <option value="Users::Commons">Commons</option>
  </select><br><br>

  <label for="message">Your Message:</label><br>
  <textarea id="message" name="message" required></textarea><br><br>

  <input id="readdataprotection" type="checkbox" required>
  <label for="readdataprotection">I have read the <a href="https://www.dainst.org/en/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label><br><br>

  <input type="submit" value="Send">
  <input type="reset" value="Reset">
</form>

<!-- Modal for success/error messages -->
<dialog id="sentdialog">
  <p id="dialogmessage"></p>
  <button onclick="document.getElementById('sentdialog').close()">OK</button>
</dialog>
