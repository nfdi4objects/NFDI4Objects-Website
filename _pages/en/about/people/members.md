---
layout: page
title: Consortium Members
lang: en
translation_key: consortium_members
permalink: /en/about/people/members/
---
{% include page-header.html
       icon="/assets/icons/portal/Konsortialmitglieder.svg"
       title="Consortium"
       subtitle="NFDI4Objects is a consortium of leading research institutions, museums, and archives in the field of material culture and object research."
 %}

<h2 class="institutions-headline">Main Applicant</h2>

{% assign institutions = site.data.de.institutions | where_exp: "item.type == 'mainapplicant'" %}

<div class="institutions-grid">
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

    {% comment %} Show persons from this institution {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "en" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Staff:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} more...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<h2 class="institutions-headline">Co-Applicants</h2> 
{% assign institutions = site.data.de.institutions | where_exp: "item.type == 'coapplicant'" %}

<div class="institutions-grid">
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

    {% comment %} Show persons from this institution {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "en" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Staff:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} more...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<h2 class="institutions-headline">Participants</h2> 
{% assign institutions = site.data.de.institutions | where_exp: "item.type == 'participant'" %}

<div class="institutions-grid">
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

    {% comment %} Show persons from this institution {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "en" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Staff:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} more...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<h2 class="institutions-headline">Supporter</h2>
{% assign institutions = site.data.de.institutions | where_exp: "item.type == 'supporter'" %}

<div class="institutions-grid">
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

    {% comment %} Show persons from this institution {% endcomment %}
    {% assign inst_persons = site.persons | where: "lang", "en" | where: "institution", inst.id %}
    {% if inst_persons.size > 0 %}
    <div class="institution-card__persons">
      <h4>Staff:</h4>
      <ul>
        {% for person in inst_persons limit: 5 %}
        <li><a href="{{ person.url | relative_url }}">{{ person.title }}</a></li>
        {% endfor %}
        {% if inst_persons.size > 5 %}
        <li><em>{{ inst_persons.size | minus: 5 }} more...</em></li>
        {% endif %}
      </ul>
    </div>
    {% endif %}
  </div>
{% endfor %}
</div>

<div class="metadata-download">
  <a class="metadata-link btn btn-primary" href="/about/people/members/index.ttl" download="consortium-members.ttl">
    Download metadata as .ttl
  </a>
</div>
