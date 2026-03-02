---
layout: service
lang: en
translation_key: academic-meta-tool-amt
title: Academic Meta Tool (AMT)
short_title: FAIRification Tool for graph-based modelling of vagueness in research
  data
logo: /assets/images/services/academic-meta-tool-logo2_500px.png
homepage: https://leiza-rse.github.io/amt-playground/
access_url: https://leiza-rse.github.io/amt-playground/
areas:
- ta2
trails:
- evaluation_of_fuzziness_and_wobbliness_in_numismatics_and_ceramology
- solving_vagueness_modelling_issues_in_numismatics_and_ceramology
nfdi_category: web_applications
nfdi_service_types:
- sas
permalink: /services/academic-meta-tool-amt/
---

## Description

*Responsible persons: Florian Thiery (LEIZA) / Allard W. Mees (LEIZA)*

The Academic Meta Tool (AMT) enables the modelling of vagueness in RDF graph data and allows reasoning-based automated inferences, such as determining relative chronological sequences. The results can be available as Linked Open Data in RDF format, adhering to FAIR principles, and visualised within graphs.

In recent years, graph databases and so-called triple stores have increasingly been used to address humanities research questions. In these cases, relevant data are modelled as graphs or as collections of triples. Compared to relational databases, which rely on table structures, this approach offers the advantage of more easily expressing networks and connections to the Semantic Web and Linked Data Cloud.

In such networks, relationships are depicted as connections between entities. For instance, a trade relationship “trades with” can be modelled between Person A and Person B. This link between two entities via a relationship corresponds to the fundamental concept of the triple structure in Linked Data. Here, both entities (Person A and B) and the relationship (“trades with”) are represented as terms with unique web addresses (URIs), making them machine-readable.

A common issue that arises is the vagueness of edges or statements. This means that a connection between two nodes or resources exists only to a certain degree. This is distinct from uncertainty, where it is unknown whether the connection exists.

In the example above, the trade relationship might be relatively simple, representing more sporadic trade contacts. If a dataset contains many friendship relationships with varying degrees of intensity, one would either need to link all relationships similarly or create numerous links that convey the same meaning. The Academic Meta Tool (AMT) addresses this issue by enabling the addition of edge weights (degrees of connection) and performing inference that accounts for vagueness.

The AMT has been tested and used in various contexts within NFDI4Objects, including:

* [“Typologie-Handling zur Dokumentation mit Hilfe künstlicher Intelligenz”](https://zenodo.org/doi/10.5281/zenodo.7179955)
* [“Taming Ambiguity - Dealing with doubts in archaeological datasets using LOD”](http://dx.doi.org/10.15496/publikation-87762)
* “Töpfer-Netzwerk Südgallischer Terra Sigillata”
* [“Darstellungen auf archäologischen Kleinfunden”](http://dx.doi.org/10.17175/sb004_004)
* [Modellierung relativ-chnologischer Zeitperioden](https://zenodo.org/doi/10.5281/zenodo.8154700)

The tool is continuously developed as part of the work programme and is available as a "[Playground](https://leiza-rse.github.io/amt-playground/)."

The [source code](https://github.com/leiza-rse/amt-playground) is available on GitHub, and the [ontology](https://academic-meta-tool.xyz/ontology/) is published on Zenodo.

The AMT was developed in 2017 as a cooperative project by the Mainzer Zentrum für Digitalität in den Geistes- und Kulturwissenschaften ([mainzed](https://mainzed.org/)), as a research tool by Martin Unold ([i3mainz - Institut für Raumbezogene Informations- und Messtechnik at the School of Engineering at Mainz University of Applied Sciences](https://i3mainz.hs-mainz.de/)) and Florian Thiery (then i3mainz and the Römisch-Germanisches Zentralmuseum). The AMT is now further developed by Allard Mees and Florian Thiery at the [Leibniz-Zentrum für Archäologie (LEIZA) ](https://www.leiza.de/)within the department of “Scientific IT, Digital Platforms and Tools,” as well as the Dauerforschungsgebiet “Explorative Forschung und Methodenentwicklung” within the framework of the action field “Digital Methods in Computational Archaeology,” specifically in the projects “Semantic Modelling and Knowledge Graphs” and “NFDI4Objects”.