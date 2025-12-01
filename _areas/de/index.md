---
layout: page
title: Struktur & Arbeitsbereiche
lang: de
translation_key: areas_overview
permalink: /areas/
---

{% assign lang = page.lang | default: 'de' %}
{% assign task_areas = site.areas 
  | where: "type", "ta" 
  | where: "lang", lang 
  | sort: "order" %}

<section class="bg-sand-light-img">
    <header class="text-center">
      {% if icon %}
        <figure class="section-icon icon-lg">
          <img src="{{ section.icon | relative_url }}" alt="{{ ta.title }}" class="text-icon">
        </figure>
      {% endif %}
      <h2>{% if lang == 'en' %}Task Areas{% else %}Task Areas{% endif %}</h2>
    </header>
    <p>
      {% if lang == 'en' %}
        NFDI4Objects is structured according to the DFG’s specifications into so-called Task Areas (TAs).
        Each Task Area addresses specific parts of the data lifecycle, defining measures and tasks that
        support the research community with tools, standards, and infrastructure services.
      {% else %}
        NFDI4Objects und das Arbeitsprogramm gliedern sich nach den Vorgaben der DFG in sogenannte Task Areas (TAs).
        Diese strukturieren die verschiedenen Aufgabenbereiche und Arbeitsabläufe innerhalb des Konsortiums.
        Eine Task Area bearbeitet übergeordnete Maßnahmen (Measures) zu einem Bereich des Datenlebenszyklus.
        Die Ergebnisse stehen der Community in den Commons und im Diensteportfolio zur Verfügung und helfen dabei,
        ein praxisorientiertes Forschungsdatenmanagement umzusetzen.
      {% endif %}
    </p>

    {% if task_areas.size > 0 %}
      <div class="grid-12 cols-3 text-center">
        {% for ta in task_areas %}
          <div class="card bg-sand">
            <figure>
              {% if ta.icon %}
                <img src="{{ ta.icon | relative_url }}" alt="{{ ta.title }}" class="text-icon">
              {% endif %}
              <figcaption>
                <a href="{{ ta.url | relative_url }}" class="smaller">{{ ta.title }}</a>
              </figcaption>
            </figure>
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>{% if lang == 'en' %}No Task Areas found.{% else %}Keine Task Areas gefunden.{% endif %}</em></p>
    {% endif %}
</section>
