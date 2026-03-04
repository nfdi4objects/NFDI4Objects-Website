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
    <option value="Technical Support">Technical Support</option>
    <option value="Cooperation">Cooperation</option>
    <option value="Revocation of Data Protection Agreement">Revocation of Data Protection Agreement</option>
    <option value="Public Relations">Public Relations</option>
    <option value="Research Funding">Research Funding</option>
    <option value="Field Data">Excavation Data</option>
    <option value="Remote Sensing">Remote Sensing</option>
    <option value="3D-Data">3D Data</option>
    <option value="Legacy Data">Legacy Data</option>
    <option value="Collection Data">Collection Data</option>
    <option value="Natural Scientific Data">Natural Scientific Data</option>
    <option value="Experimental Data">Experimental Data</option>
    <option value="Protecting/Conservation Data">Protecting/Conservation Data</option>
    <option value="Long Time Data Storage">Long-Term Data Storage</option>
    <option value="Metadata & Vocabularies">Metadata & Vocabularies</option>
    <option value="IT Services">IT Services</option>
    <option value="Education & Training">Education & Training</option>
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
