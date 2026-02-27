---
layout: page
title: "Community Clusters"
lang: de
translation_key: ccs_overview
permalink: /ccs/
---

{% assign lang = page.lang | default: 'de' %}
{% assign ccs = site.ccs | where: "lang", lang | sort: "identifier" %}

<section class="bg-sand-light-img">
    <header class="text-center">
      <h2>Community Clusters</h2>
    </header>

    <p>
      Community Clusters (CCs) sind thematische Arbeitsgruppen, die sich mit bestimmten Themenbereichen innerhalb von NFDI4Objects befassen. Sie bringen Experten aus verschiedenen Disziplinen zusammen, um gemeinsam an Standardisierung, Tool-Entwicklung und Best Practices zu arbeiten.
    </p>

    {% if ccs.size > 0 %}
      <div class="grid-12 cols-3">
        {% for cc in ccs %}
          <div class="card bg-sand">
            <div class="card-header">
              {% if cc.identifier %}
                <span class="badge">{{ cc.identifier }}</span>
              {% endif %}
              {% if cc.status %}
                <span class="status-badge {{ cc.status }}">
                  {{ cc.status }}
                </span>
              {% endif %}
            </div>
            <div class="card-body">
              <h3 class="h4"><a href="{{ cc.url | relative_url }}">{{ cc.title }}</a></h3>

              {% if cc.cochairs %}
                <p class="smaller"><strong>Co-Chairs:</strong><br>
                {% for cochair in cc.cochairs %}
                  {{ cochair.name }}{% unless forloop.last %}, {% endunless %}
                {% endfor %}
                </p>
              {% endif %}

              {% if cc.areas and cc.areas.size > 0 %}
                <div class="cc-areas">
                  {% for area_id in cc.areas %}
                    {% assign area_data = site.data.areas | where: "id", area_id | first %}
                    {% if area_data %}
                      <span class="area-badge">{{ area_id | upcase }}</span>
                    {% endif %}
                  {% endfor %}
                </div>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>No community clusters found.</em></p>
    {% endif %}
</section>