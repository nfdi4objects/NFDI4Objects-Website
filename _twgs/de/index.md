---
layout: page
title: "Temporary Working Groups"
lang: de
translation_key: twgs_overview
permalink: /twgs/
---

{% assign lang = page.lang | default: 'de' %}
{% assign twgs = site.twgs | where: "lang", lang | where_exp: "item", "item.translation_key != 'twgs_overview'" | sort: "identifier" %}

{% include page-header.html
       icon="/assets/icons/portal/Temporary-Working-Groups.svg"
       title="Temporäre Arbeitsgruppen"
       subtitle=" <strong>T</strong>emporary <strong>W</strong>orking <strong>G</strong>roups"
 %}

<section>
    {% if twgs.size > 0 %}
      <div class="grid-12 cols-3">
        {% for twg in twgs %}
          {% assign has_image = twg.teaser_image %}
          <div class="card {% if has_image %}teaser-img{% else %}bg-sand{% endif %}">
            {% if has_image %}
              <img src="{{ twg.teaser_image | relative_url }}"
                   {% if twg.teaser_image_srcset %}srcset="{{ twg.teaser_image_srcset }}"{% endif %}
                   {% if twg.teaser_image_srcset %}sizes="{{ twg.teaser_image_sizes | default: '(min-width: 768px) 600px, 100vw' }}"{% endif %}
                   alt="{{ twg.teaser_image_alt | default: twg.title }}">
              <div class="card-content">
            {% endif %}
            <div class="card-header">
              {% if twg.identifier %}
                <span class="badge">{{ twg.identifier }}</span>
              {% endif %}
              {% if twg.status %}
                <span class="status-badge {{ twg.status }}">
                  {{ twg.status }}
                </span>
              {% endif %}
            </div>
            <div class="card-body">
              <h3 class="h4"><a href="{{ twg.url | relative_url }}">{{ twg.title }}</a></h3>

              {% if twg.coordinators %}
                <p class="smaller"><strong>Co-Chairs:</strong><br>
                {% for coord in twg.coordinators %}
                  {{ coord.name }}{% unless forloop.last %}, {% endunless %}
                {% endfor %}
                </p>
              {% endif %}

              {% if twg.areas and twg.areas.size > 0 %}
                <div class="twg-areas">
                  {% for area_id in twg.areas %}
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
      <p><em>{% if lang == 'en' %}No TWGs found.{% else %}Keine TWGs gefunden.{% endif %}</em></p>
    {% endif %}
</section>
