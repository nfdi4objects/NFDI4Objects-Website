---
layout: page
title: Konsortialmitglieder
description: ""
keywords: ""
lang: de
translation_key: consortium_members
permalink: /about/people/members/
---

{% include page-header.html
       icon="/assets/icons/portal/Konsortialmitglieder.svg"
       title="Konsortialmitglieder"
       subtitle="NFDI4Objects als Konsortium der Nationalen Forschungsdateninfrastruktur (NFDI). Durchsuchen Sie die Liste der Einrichtungen, die Mitglied sind oder die Arbeit unterstützen."
 %}

{% include page-header.html
     title="Hauptantragssteller"
%}

{% assign institutions = site.data.institutions | where: "type", "mainapplicant" %}

<section class="institutions-grid">
{% for inst in institutions %}
  <div class="institution-card">
    {% if inst.logo %}
    <div class="institution-card__logo">
      <img src="{{ inst.logo | relative_url }}" alt="{{ inst.name }} Logo" loading="lazy">
    </div>
    {% endif %}

    <div class="institution-card__content">
      <h3 class="institution-card__name">
        {% if inst.url %}
        <a href="{{ inst.url }}" target="_blank" rel="noopener">{{ inst.name }}</a>
        {% else %}
        {{ inst.name }}
        {% endif %}
      </h3>

      {% if inst.short %}
      <p class="institution-card__short">{{ inst.short }}</p>
      {% endif %}

      {% if inst.city %}
      <p class="institution-card__location">
        <i class="fas fa-location-pin"></i> {{ inst.city }}
      </p>
      {% endif %}
    </div>

    {% comment %} Personen dieser Institution anzeigen {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "de" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Mitarbeitende:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} weitere...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</section>

{% include page-header.html
     title="Mitantragssteller"
%}

{% assign institutions = site.data.institutions | where: "type", "coapplicant" %}

<section class="institutions-grid">
{% for inst in institutions %}
  <div class="institution-card">
    {% if inst.logo %}
    <div class="institution-card__logo">
      <img src="{{ inst.logo | relative_url }}" alt="{{ inst.name }} Logo" loading="lazy">
    </div>
    {% endif %}

    <div class="institution-card__content">
      <h3 class="institution-card__name">
        {% if inst.url %}
        <a href="{{ inst.url }}" target="_blank" rel="noopener">{{ inst.name }}</a>
        {% else %}
        {{ inst.name }}
        {% endif %}
      </h3>

      {% if inst.short %}
      <p class="institution-card__short">{{ inst.short }}</p>
      {% endif %}

      {% if inst.city %}
      <p class="institution-card__location">
        <i class="fas fa-location-pin"></i> {{ inst.city }}
      </p>
      {% endif %}
    </div>

    {% comment %} Personen dieser Institution anzeigen {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "de" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Mitarbeitende:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} weitere...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</section>

<div class="metadata-download">
  <a class="metadata-link btn btn-primary" href="/about/people/members/index.ttl" download="consortium-members.ttl">
    Metadaten als .ttl herunterladen
  </a>
</div>