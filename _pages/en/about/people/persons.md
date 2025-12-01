---
layout: page
title: Persons
lang: en
translation_key: persons_overview
permalink: /en/about/people/persons/
---

{% include page-header.html
       icon="/assets/icons/portal/Personen.svg"
       title="NFDI4Objects Staff"
       subtitle="NFDI4Objects is supported by a dedicated team of researchers, data experts, and coordinators from various institutions."
 %}

Here you can find all staff members of NFDI4Objects. You can filter by institution and task areas to find the right contact person for your needs.

{% include sections/person-list.html
    show_institution=true
    show_areas=true
    layout="grid"
%}

<div class="metadata-download">
  <a class="metadata-link btn btn-primary" href="/about/people/persons/index.ttl" download="all-persons.ttl">
    Download metadata as .ttl
  </a>
</div>
