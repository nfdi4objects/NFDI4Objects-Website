---
layout: page
title: Personen
description: ""
keywords: ""
lang: de
translation_key: persons_overview
permalink: /about/people/persons/
---

{% include page-header.html
       icon="/assets/icons/portal/Personen.svg"
       title="Mitarbeitende von NFDI4Objects"
       subtitle="NFDI4Objects wird von einem engagierten Team aus Wissenschaftler:innen, Datenexpert:innen und Koordinator:innen aus verschiedenen Institutionen getragen."
 %}

Hier finden Sie alle Mitarbeitenden von NFDI4Objects. Sie können nach Institution und Task Areas filtern, um die passenden Ansprechpartner:innen für Ihr Anliegen zu finden.

{% include sections/person-list.html
    show_institution=true
    show_areas=true
    layout="grid"
%}

<div class="metadata-download">
  <a class="metadata-link btn btn-primary" href="/about/people/persons/index.ttl" download="all-persons.ttl">
    Metadaten als .ttl herunterladen
  </a>
</div>
