---
layout: service
lang: de
translation_key: service-re3dragon
title: "re3dragon"
short_title: "Ein Tool zum Suchen und Auflösen von LOD-Ressourcen"

nfdi_category: web-apps
nfdi_service_types:
  - sas
  - dis
  - cres

lifecycle_phases:
  - nachnutzung

institution: "leiza"
contact_email: "florian.thiery@leiza.de"
homepage: "https://tools.leiza.de/re3dragon/"
access_url: "https://api.leiza.de/re3dragon/"
logo: "/assets/images/services/re3dragon-logo.png"

task_areas:
  - ta2

trails:
  - directory-evaluation-tools
  - a_workflow_for_enchancing_iconography_authority_data_in_the_wikimedia_universe

permalink: /services/re3dragon/
---

Das FAIRification Research Tool [re3dragon](https://doi.org/10.32028/Groma-Issue-7-2022-2429) (REsearch REsource REgistry for DataDragons) stellt einen Online-Katalog von Linked Open Data (LOD) Ressourcen (z.B. kontrollierte Vokabulare, Gazetteers) zur Verfügung. Diese Online-Ressourcen können mit re3dragon Research Tool durchsucht werden. Die Ergebnisse werden im standardisierten JSKOS-Format als RDF ausgegeben, um FAIRe Daten zur Verfügung zu stellen.

## Ziele

Das **Open Source-Tool [re3dragon](https://tools.leiza.de/re3dragon/)** verfolgt insbesondere zwei Ziele:

1. **Veröffentlichung eines offenen, erweiterbaren LOD-Ressourcenkatalogs für die Archäologie**, 
welcher authority files & community-driven vocabularies wie Thesauri, Gazetteers, Raum-Zeit-Gazetteers sowie Typologien und domänenspezifische Ressourcen enthält.
2. **API für die Abfrage von verteilten LOD-Ressourcen.** 
Von der [API](https://api.leiza.de/re3dragon/) werden die Ergebnisse in einem standardisierten JSON-Format basierend auf [JSKOS](https://gbv.github.io/jskos/jskos.html) zurückgegeben.

re3dragon ist in JAVA kodiert und als [Open Source auf GitHub](https://github.com/leiza-rse/re3dragon) veröffentlicht.

## Anwendungsbeispiel

Das re3dragon-Tool wurde z.B. im Rahmen des vom BMBF geförderten [Kooperationsprojekts](https://doi.org/10.3390/ijgi12040167) (i3mainz / RGZM) [ARS3D](https://ars3d.rgzm.de/objectSearch.htm) angewandt, in dem es Daten zu spätrömischer African Red Slip Ware (ARS) anreicherte. Ein ARS-Gefäß wird beispielsweise allgemein als "Schale" mit den dekorativen Motiven "Hercules" und "Victoria" (O.39446) beschrieben, die mit Hilfe von Getty AAT, IconClass und Wikidata-Entitäten annotiert werden können. Die Gefäßform selbst kann z.B. mit Hilfe von Getty AAT Term300203596 und Wikidata Entitiy Q15398 als Schale beschrieben werden.

## Entwicklung und Hintergrund

Das re3dragon Tool ist bereits in diversen Kontexten von NFDI4Objects getestet und eingesetzt worden. Das re3dragon Tool wurde 2020 am Leibniz-Zentrum für Archäologie (LEIZA) am Arbeitsbereich "Wissenschaftliche IT, digitale Plattformen und Tools", sowie im Dauerforschungsgebiet "Explorative Forschung und Methodenentwicklung" im Rahmen des Handlungsfeldes "Digitale Methodik in der Archäoinformatik" in den Projekten "Semantische Modellierung und Knowledge Graphs" und "NFDI4Objects" weiterentwickelt.

Es basiert auf dem Tool ["RetCat"](http://ls-docs.skosplus.net/retcat.html) (Referenz-Thesaurus Katalog) als Teil des ["Das Labeling System - Eine Web-App zur Erstellung und Veröffentlichung von Begriffen mit kontextgebundener Gültigkeit als LOD"](https://i3mainz.hs-mainz.de/projekte/labelingsystem/), ein [Kooperationsprojekt](https://doi.org/10.1145/2657480.2657482) (2014-2017) des Mainzer Zentrum für Digitalität in des Geistes- und Kulturwissenschaften (mainzed) mit dem i3mainz - Institut für Raumbezogene Informations- und Messtechnik, dem Leibniz-Institut für Europäische Geschichte (IEG) und dem Römisch-Germanischen Zentralmuseum (RGZM, heute LEIZA), entwickelt von Michael Piotrowski / Giovanni Colavizza (IEG), Florian Thiery (i3mainz/RGZM), Allard Mees / Guido Heinz (RGZM) und Prof. Kai-Christian Bruhn / Matthias Dufner / Axel Kunz / Thomas Engel (i3mainz / HS Mainz). ([1](https://zenodo.org/doi/10.5281/zenodo.3741957)) ([2](https://doi.org/10.5281/zenodo.292974))

## Features:

- "Online-Katalog von Linked Open Data (LOD) Ressourcen"
- "Suche in kontrollierten Vokabularen und Gazetteers"
- "API für verteilte LOD-Ressourcen-Abfragen"
- "Standardisiertes JSKOS-Format als RDF"
- "Open Source (GitHub)"