---
layout: page
title: "Trails"
lang: de
translation_key: trails_overview
permalink: /trails/
---

{% assign lang = page.lang | default: 'de' %}
{% assign trails = site.trails | where: "lang", lang | where_exp: "item", "item.translation_key != 'trails_overview'" | sort: "start_date" | reverse %}

<section class="bg-sand-light-img">
    <header class="text-center">
      <h2>Trails</h2>
    </header>

    <p>
      Trails sind forschungsgetriebene Projekte, die spezifische Herausforderungen
      und Fragestellungen im Bereich des Forschungsdatenmanagements adressieren.
      Sie entwickeln Standards, Werkzeuge und Best Practices für verschiedene
      Phasen des Forschungsdaten-Lebenszyklus.
    </p>

    {% if trails.size > 0 %}
      <div class="grid-12 cols-3">
        {% for trail in trails %}
          {% assign has_image = trail.teaser_image %}
          {% comment %} Process srcset to add relative_url to each path {% endcomment %}
          {% if trail.teaser_image_srcset %}
            {% assign srcset_parts = trail.teaser_image_srcset | split: ", " %}
            {% assign processed_srcset = "" %}
            {% for part in srcset_parts %}
              {% assign path_and_descriptor = part | split: " " %}
              {% if path_and_descriptor.size == 2 %}
                {% assign path = path_and_descriptor[0] | relative_url %}
                {% assign descriptor = path_and_descriptor[1] %}
                {% if processed_srcset != "" %}
                  {% assign processed_srcset = processed_srcset | append: ", " %}
                {% endif %}
                {% assign processed_srcset = processed_srcset | append: path | append: " " | append: descriptor %}
              {% endif %}
            {% endfor %}
          {% endif %}
          <div class="card {% if has_image %}teaser-img{% else %}bg-sand{% endif %}">
            {% if has_image %}
              <img src="{{ trail.teaser_image | relative_url }}"
                   {% if trail.teaser_image_srcset %}srcset="{{ processed_srcset }}"{% endif %}
                   {% if trail.teaser_image_srcset %}sizes="{{ trail.teaser_image_sizes | default: '(min-width: 768px) 600px, 100vw' }}"{% endif %}
                   alt="{{ trail.teaser_image_alt | default: trail.title }}">
              <div class="card-content">
            {% endif %}
            <div class="card-header">
              {% if trail.start_date %}
                <span class="badge">{{ trail.start_date | date: "%Y" }}</span>
              {% endif %}
            </div>
            <div class="card-body">
              <h3 class="h4"><a href="{{ trail.url | relative_url }}">{{ trail.title }}</a></h3>

              {% if trail.cochairs %}
                <p class="smaller"><strong>Co-Chairs:</strong><br>
                {% for cochair in trail.cochairs %}
                  {{ cochair.name }}{% unless forloop.last %}, {% endunless %}
                {% endfor %}
                </p>
              {% endif %}

              {% if trail.areas and trail.areas.size > 0 %}
                <div class="twg-areas">
                  {% for area_id in trail.areas %}
                    {% assign area_data = site.data.areas | where: "id", area_id | first %}
                    {% if area_data %}
                      <span class="area-badge">{{ area_id | upcase }}</span>
                    {% endif %}
                  {% endfor %}
                </div>
              {% endif %}
            </div>
            {% if has_image %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>Keine Trails gefunden.</em></p>
    {% endif %}
</section>
