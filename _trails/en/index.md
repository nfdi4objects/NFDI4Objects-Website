---
layout: page
title: "Trails"
lang: en
translation_key: trails_overview
permalink: /en/trails/
---

{% assign lang = page.lang | default: 'en' %}
{% assign trails = site.trails | where: "lang", lang | sort: "start_date" | reverse %}

<section class="bg-sand-light-img">
    <header class="text-center">
      <h2>Trails</h2>
    </header>

    <p>
      Trails are research-driven projects that address specific challenges
      and questions in the field of research data management. They develop
      standards, tools, and best practices for different phases of the
      research data lifecycle.
    </p>

    {% if trails.size > 0 %}
      <div class="grid-12 cols-3">
        {% for trail in trails %}
          <div class="card bg-sand">
            <div class="card-header">
              {% if trail.start_date %}
                <span class="badge">{{ trail.start_date | date: "%Y" }}</span>
              {% endif %}
            </div>
            <div class="card-body">
              <h3 class="h4"><a href="{{ trail.url | relative_url }}">{{ trail.title }}</a></h3>

              {% if trail.coordinators %}
                <p class="smaller"><strong>Co-Chairs:</strong><br>
                {% for coord in trail.coordinators %}
                  {{ coord.name }}{% unless forloop.last %}, {% endunless %}
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
          </div>
        {% endfor %}
      </div>
    {% else %}
      <p><em>No trails found.</em></p>
    {% endif %}
</section>
