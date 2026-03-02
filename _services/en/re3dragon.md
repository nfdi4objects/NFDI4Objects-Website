---
layout: service
lang: en
translation_key: re3dragon
title: re3dragon
short_title: ''
logo: /assets/images/services/re3dragon-logo2_500px.png
homepage: ''
access_url: ''
areas:
- ta2
trails:
- an_uri_lookup_and_resolve_service_for_lod_resources_related_to_collection_research
- a_workflow_for_enchancing_iconography_authority_data_in_the_wikimedia_universe
nfdi_category: web_applications
nfdi_service_types:
- sas
- dis
- cres
permalink: /services/re3dragon/
---

## Description

**A lookup and resolve tool for LOD resources**

responsible persons: Florian Thiery (LEIZA) / Allard W. Mees (LEIZA)

The FAIRification Research Tool re3dragon (REsearch REsource REgistry for DataDragons) provides an online catalogue of Linked Open Data (LOD) resources (e.g., controlled vocabularies, gazetteers). These online resources can be searched using the re3dragon research tool, and the results are output in the standardised JSKOS format as RDF to ensure FAIR data accessibility.

The Open Source tool re3dragon pursues two main objectives:

Publishing an Open, Extensible LOD Resource Catalogue for Archaeology: This catalogue includes authority files and community-driven vocabularies such as thesauri, gazetteers, spatio-temporal gazetteers, typologies, and domain-specific resources.

Providing an API for Querying Distributed LOD Resources: The API returns results in a standardised JSON format based on JSKOS, ensuring interoperability and ease of use.

The re3dragon tool is coded in JAVA and is openly available on GitHub.

One application of re3dragon was in the BMBF-funded collaborative project ARS3D (i3mainz / RGZM), where it enriched data on the late Roman African Red Slip Ware (ARS). For example, an ARS vessel may be described generically as a “bowl” with decorative motifs such as “Hercules” and “Victoria” (O.39446). These motifs can be annotated using Getty AAT, IconClass, and Wikidata entities. For instance, The vessel shape can be described using Getty AAT Term300203596 and the Wikidata entity Q15398 as a bowl.

The re3dragon tool has been tested and implemented in various NFDI4Objects contexts. It was further developed in 2020 at the Leibniz-Zentrum für Archäologie (LEIZA) within the department of “Scientific IT, Digital Platforms and Tools,” as well as the Dauerforschungsgebiet “Explorative Forschung und Methodenentwicklung” within the framework of the action field “Digital Methods in Computational Archaeology,” specifically in the projects “Semantic Modelling and Knowledge Graphs” and “NFDI4Objects”.

re3dragon builds upon the tool “RetCat” (Reference Thesaurus Catalogue), which was developed as part of the project “Das Labeling System – A Web App for Creating and Publishing Terms with Context-Dependent Validity as LOD”. This cooperative project (2014–2017) was a collaboration between the Mainzer Zentrum für Digitalität in des Geistes- und Kulturwissenschaften (mainzed), i3mainz - Institut für Raumbezogene Informations- und Messtechnik, the Leibniz Institute for European History (IEG), and the Römisch-Germanisches Zentralmuseum (RGZM, now LEIZA). Developers included Michael Piotrowski / Giovanni Colavizza (IEG), Florian Thiery (i3mainz/RGZM), Allard Mees / Guido Heinz (RGZM), and Prof. Kai-Christian Bruhn / Matthias Dufner / Axel Kunz / Thomas Engel (i3mainz/HS Mainz).

Link to the service: <https://tools.leiza.de/re3dragon/>