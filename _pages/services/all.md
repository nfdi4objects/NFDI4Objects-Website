---
layout: page
title: "Alle Angebote von A - Z"
description: ""
keywords: ""
lang: de
translation_key: services_all
permalink: /services/all/
section_icon: "/assets/icons/portal/Dienste.svg"
---

NFDI4Objects bietet eine Vielzahl von Services, Tools und Beratungsangeboten für
Forschende in den objektbezogenen Wissenschaften. Nutzen Sie die Filter, um das
passende Angebot für Ihre Bedürfnisse zu finden.

<h2 class="h3 arrow arrow-left">Nach Kategorie filtern</h2>
<div class="category-tags">
  {% for cat in site.data.service_categories.nfdi_categories %}
  <button class="category-tag btn btn-primary-outline" data-category="{{ cat.id }}">
    {{ cat.name_de }}
  </button>
  {% endfor %}
  <button class="category-tag btn btn-primary-outline active" data-category="all">
    Alle
  </button>
</div>

<section>
    {% assign lang = page.lang | default: 'de' %}
    {% assign all_services = site.services | where: "lang", lang %}
    {% assign all_trails = site.trails | where: "lang", lang | where_exp: "item", "item.translation_key != 'trails_overview'" %}

      <div class="services-grid grid-12 cols-3" id="services-container">

        {%- comment -%} Services aus _services Collection {%- endcomment -%}
        {% for service in all_services %}
          {% if service.translation_key != 'services_all' %}
          <div class="service-card card bg-sand" data-categories="{{ service.nfdi_category }}">

            {% if service.logo %}
            <div class="card-image">
              <img src="{{ service.logo }}" alt="{{ service.title }}" />
            </div>
            {% endif %}

            <div class="card-body">
              <h3 class="h4">
                <a href="{{ service.url | relative_url }}">{{ service.title }}</a>
              </h3>

              {% if service.short_title %}
              <p class="service-tagline">{{ service.short_title }}</p>
              {% endif %}

              {% if service.service_type %}
              {% assign service_type_obj = site.data.service_categories.service_types | where: "id", service.service_type | first %}
              <p class="service-type-label">
                {% if service_type_obj %}
                {{ service_type_obj.name_de }}
                {% else %}
                {{ service.service_type }}
                {% endif %}
              </p>
              {% endif %}

              {% if service.organization %}
              <p class="service-provider smaller">
                {% assign org_data = site.data.de.institutions | where: "id", service.organization | first %}
                {% if org_data %}
                {{ org_data.short | default: org_data.name }}
                {% else %}
                {{ service.organization }}
                {% endif %}
              </p>
              {% endif %}
            </div>
          </div>
          {% endif %}
        {% endfor %}

        {%- comment -%} Trails aus _trails Collection {%- endcomment -%}
        {% for trail in all_trails %}
          <div class="service-card card bg-sand" data-categories="data-curation">

            <div class="card-body">
              <h3 class="h4">
                <a href="{{ trail.url | relative_url }}">{{ trail.title }}</a>
              </h3>

              {% if trail.short_title %}
              <p class="service-tagline">{{ trail.short_title }}</p>
              {% endif %}

              <p class="service-type-label">
                TRAIL - Technische Infrastruktur
              </p>

              {% if trail.coordinators and trail.coordinators.size > 0 %}
              <p class="service-provider smaller">
                <strong>Koordinatoren:</strong><br>
                {% for coord in trail.coordinators limit:2 %}
                  {{ coord.name }}{% unless forloop.last %}, {% endunless %}
                {% endfor %}
                {% if trail.coordinators.size > 2 %}
                  u.a.
                {% endif %}
              </p>
              {% endif %}
            </div>
          </div>
        {% endfor %}

      </div>

      <p class="no-results" id="no-results" style="display: none;">
        <em>Keine Services gefunden. Bitte passen Sie Ihre Filter an.</em>
      </p>

</section>

<script>
// Simple client-side filtering
document.addEventListener('DOMContentLoaded', function() {
  const categoryButtons = document.querySelectorAll('.category-tag');
  const serviceCards = document.querySelectorAll('.service-card');
  const noResults = document.getElementById('no-results');

  categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
      const category = this.dataset.category;

      // Update active state
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter cards
      let visibleCount = 0;
      serviceCards.forEach(card => {
        if (category === 'all' || card.dataset.categories.includes(category)) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Show/hide no results message
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    });
  });
});
</script>