---
layout: page
title: "Community Clusters"
lang: de
translation_key: ccs_overview
permalink: /ccs/
---

{% assign lang = page.lang | default: 'de' %}
{% assign ccs = site.ccs | where: "lang", lang | where_exp: "item", "item.translation_key != 'ccs_overview'" | sort: "identifier" %}

{% include page-header.html
       icon="/assets/icons/portal/Community-Cluster.svg"
       title="Community Clusters"
       subtitle="Community Clusters (CCs) sind thematische Foren, die bestimmte Interessensgebiete innerhalb von NFDI4Objects abdecken."
 %}


<section>
    {% if ccs.size > 0 %}
      <div class="grid-12 cols-3">
        {% for cc in ccs %}
          {% assign has_image = cc.teaser_image %}
          {% comment %} Process srcset to add relative_url to each path {% endcomment %}
          {% if cc.teaser_image_srcset %}
            {% assign srcset_parts = cc.teaser_image_srcset | split: ", " %}
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
              <img src="{{ cc.teaser_image | relative_url }}"
                   {% if cc.teaser_image_srcset %}srcset="{{ processed_srcset }}"{% endif %}
                   {% if cc.teaser_image_srcset %}sizes="{{ cc.teaser_image_sizes | default: '(min-width: 768px) 600px, 100vw' }}"{% endif %}
                   alt="{{ cc.teaser_image_alt | default: cc.title }}">
              <div class="card-content">
            {% endif %}
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
            {% if has_image %}
              </div>
            {% endif %}
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>Keine Community Clusters gefunden.</em></p>
    {% endif %}
</section>