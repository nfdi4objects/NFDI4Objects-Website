---
layout: page
title: "SPARQL Endpoint"
description: "Interaktiver SPARQL-Endpunkt für den NFDI4Objects Knowledge Graph. Abfrage von verknüpften Daten über Personen, Projekte, Services und mehr."
keywords: "SPARQL, Knowledge Graph, Linked Data, RDF, TTL, Semantic Web"
lang: de
translation_key: services-sparql
permalink: /services/sparql/
---

{% include page-header.html
    icon="/assets/icons/portal/Dienste.svg"
    title="SPARQL Endpoint"
    subtitle="Was ist der NFDI4Objects Knowledge Graph?"
%}

{% include teaser-cards.html cards=page.cards bg_color="bg-sand" %}

Der NFDI4Objects Knowledge Graph ist eine maschinenlesbare Repräsentation aller Daten auf dieser Website.
Er verknüpft Informationen über Personen, Projekte (Trails), Services, Task Areas und weitere Entitäten
in einem semantischen Netzwerk basierend auf offenen Standards (RDF, FOAF, Dublin Core).


### Verwendungsmöglichkeiten

- **Forschung:** Analysieren Sie Kooperationsnetzwerke und Projektstrukturen
- **Integration:** Binden Sie NFDI4Objects-Daten in Ihre Anwendungen ein
- **Exploration:** Entdecken Sie Zusammenhänge zwischen verschiedenen Entitäten
- **Automatisierung:** Nutzen Sie SPARQL-Queries für automatisierte Datenextraktion


### Technische Details

Dieses Interface nutzt **YASGUI** (Yet Another SPARQL GUI) für den Query-Editor
und eine clientseitige Query-Ausführung mittels Pattern-Matching. Alle Abfragen werden direkt
in Ihrem Browser ausgeführt, ohne Server-Infrastruktur. Die Daten liegen im Turtle-Format (TTL)
vor und werden bei jedem Website-Build automatisch aus allen Einzeldateien aggregiert


- **Hinweis:** Dies ist eine Demo-Implementierung, die häufige Query-Muster unterstützt
(Personen, Projekte, Task Areas). Für komplexere SPARQL-Queries können Sie die TTL-Datei
herunterladen und mit einem vollständigen SPARQL-Processor Ihrer Wahl verwenden.

<div id="sparql-query"></div>
{% assign examples = site.data.sparql-examples-de %}
{% include sparql-interface.html
    title="SPARQL-Abfrage-Interface"
    examples=examples %}

### Weitere Informationen

- <a href="https://www.w3.org/TR/sparql11-query/" target="_blank" rel="noopener">SPARQL 1.1 Query Language Specification</a>
- <a href="https://www.w3.org/TR/turtle/" target="_blank" rel="noopener">RDF 1.1 Turtle Format</a>
- <a href="{{ site.baseurl }}/services/knowledge-graph/">NFDI4Objects Knowledge Graph Service</a>


