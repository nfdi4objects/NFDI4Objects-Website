---
layout: page
title: "Temporary Working Groups"
lang: en
translation_key: twgs_overview
permalink: /en/twgs/
---

{% assign lang = page.lang | default: 'en' %}
{% assign twgs = site.twgs | where: "lang", lang | sort: "identifier" %}

<section class="bg-sand-light-img">
  <div class="container">
    <header class="text-center">
      <h2>Temporary Working Groups</h2>
    </header>

    <p>
      Temporary Working Groups (TWGs) are time-limited, thematically focused working groups
      that address specific questions and challenges in research data management. They emerge
      from concrete community needs and work towards defined results.
    </p>

    {% if twgs.size > 0 %}
      <div class="grid-12 cols-3">
        {% for twg in twgs %}
          <div class="card bg-sand">
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

              {% if twg.cochairs %}
                <p class="smaller"><strong>Co-Chairs:</strong><br>
                {% for cochair in twg.cochairs %}
                  {{ cochair.name }}{% unless forloop.last %}, {% endunless %}
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
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>No TWGs found.</em></p>
    {% endif %}
  </div>
</section>
