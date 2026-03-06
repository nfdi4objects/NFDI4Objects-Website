---
layout: page
title: "SPARQL Endpoint"
description: "Interactive SPARQL endpoint for the NFDI4Objects Knowledge Graph. Query linked data about persons, projects, services, and more."
keywords: "SPARQL, Knowledge Graph, Linked Data, RDF, TTL, Semantic Web"
lang: en
translation_key: services-sparql
permalink: /en/services/sparql/
---

{% include page-header.html
    icon="/assets/icons/portal/Dienste.svg"
    title="SPARQL Endpoint"
    subtitle="What is the NFDI4Objects Knowledge Graph?"
%}

{% include teaser-cards.html cards=page.cards bg_color="bg-sand" %}



The NFDI4Objects Knowledge Graph is a machine-readable representation of all data on this website.
It connects information about persons, projects (trails), services, task areas, and other entities
in a semantic network based on open standards (RDF, FOAF, Dublin Core).


## Use Cases

**Research:** Analyze collaboration networks and project structures
**Integration:** Integrate NFDI4Objects data into your applications
**Exploration:** Discover relationships between different entities
**Automation:** Use SPARQL queries for automated data extraction


### Technical Details

This interface uses **YASGUI** (Yet Another SPARQL GUI) for the query editor
and client-side query execution via pattern matching. All queries are executed directly
in your browser, without server infrastructure. The data is provided in Turtle format (TTL)
and is automatically aggregated from all individual files during each website build (~12 KB, 23 files).


**Note:** This is a demo implementation supporting common query patterns
(persons, projects, task areas). For more complex SPARQL queries, you can download the
TTL file and use it with a full-featured SPARQL processor of your choice.


<div id="sparql-query"></div>
{% assign examples = site.data.sparql-examples-en %}
{% include sparql-interface.html
  title="SPARQL Query Interface"
  examples=examples %}

### Further Information
      
- <a href="https://www.w3.org/TR/sparql11-query/" target="_blank" rel="noopener">SPARQL 1.1 Query Language Specification</a>
- <a href="https://www.w3.org/TR/turtle/" target="_blank" rel="noopener">RDF 1.1 Turtle Format</a>
- <a href="{{ site.baseurl }}/en/services/nfdi4objects-graph/">NFDI4Objects Knowledge Graph Service</a>


