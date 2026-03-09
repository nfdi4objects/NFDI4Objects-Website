---
layout: twg
lang: en
translation_key: twg2024-1_omds_oo
title: N4O Object Core Metadata Profile (OCMDP) & Material Cultural Heritage Crosswalk
  Ontology (MaCHeCO)
identifier: TWG 2024.1
status: active
start_date: 2024-10-23 21:55:00+00:00
end_date: ''
cochairs:
- name: Anja Gerber
  person_ref: anjagerber
- name: Florian Thiery
  person_ref: florian_thiery
areas:
- ta6
- ta1
- ta2
- ta3
- ta4
- ta5
permalink: /en/twgs/twg2024-1_omds_oo/
---

## Description

Chairs: Fabian Fricke, Anja Gerber, and Florian Thiery

The primary goal is to develop an Object Core Metadata Profile (OCMDP) supported by the NFDI4Objects community. This core data schema ensures compatibility with the NFDI Core Meta Data Profile (NFDI sections) and the NFDI Core (FIZ Karlsruhe), which are currently under development, so that metadata in NFDI4Objects is available in an interoperable manner within the NFDI consortia. To this end, coordinated N4O-specific elements/terms (properties) and entities (classes) must be created and linked to other schemas (including schema.org, DCAT, DataCite, DublinCore) via a cross-walk. The OCMDP is the basis for an RDF-based exchange format (Objects Metadata Junction Ontology - OMJO), which imports data into an N4O Metadata Knowledge Graph (N4O MKG) and makes it available in a FAIR manner. To make research data FAIR and ensure compatibility with international cultural heritage data based on CIDOC CRM and its extensions, a Material Cultural Heritage Crosswalk Ontology (MaCHeCO) is being developed to define basic entities (classes)  in individual ontologies through a hierarchical crosswalk to CIDOC CRM as a crosswalk ontology in the N4O Knowledge Graph (N4O KG). For interaction between MaCHeCO and OMJO, linking classes are defined for federated querying of the two knowledge graphs (KG and MKG).

The OCMDP and MaCHeCO are primarily defined by the technical work program—and thus the object cycle—of Task Areas 1–4, “Documentation,” “Collecting,” “Analysis & Experiments,” and “Protecting,” and thus touch on the topics of excavation, (digital) reconstruction and annotation, collection, art history, restoration/conservation, scientific analysis, monument preservation, provenance research, etc. The subject areas generate technical profiles as modules of the OCMDP, as well as subject-specific profile ontologies, each of which references CIDOC CRM classes (via cross-walk) in order to ensure compatibility with the N4O KG and to facilitate validation.

**This results in the following tasks for the TWG, among others:**

Definition of terms relating to an object core (N4O Proposal G6.5, p. 93; M6.3, p.95)

Definition of common basic entities (classes) in individual ontologies and hierarchical cross-walk, including CIDOC CRM 7.1.3 for MaCHeCO as a cross-walk ontology in the N4O knowledge graph

Development of an Object Core Metadata Profile (OCMDP) and linking to MaCHeCO and the Knowledge Graph

* Establishment of a common thesaurus for defining the elements (properties) and entities (classes, for ontology exchange) in the Object Core Metadata Profile (OCMDP)
* OCMDP super-element CrossWalk to NFDI Core Metadata Profile (schema.org / DataCite / DCAT / NFDI Core / CodeMeta) as well as DublinCore and Wikidata
* Definition of an exchange format (CSV; XML; JSON)
* Definition of an OCMDP ontology (RDF representation of the OCMDP) and the Object Metadata Junction Ontology (OMJO)

  * Elements (properties) in the Object Core Metadata Profile (OCMDP)
  * Common linking entities (classes) between OMJO and MaCHeO for federated querying of the two knowledge graphs

OSF: [https://osf.io/v6ncy/](<>)  

Mailingliste: [https://www.listserv.dfn.de/sympa/admin/n4o_twg_ocmdp_macheco](<>)

[](<>)Rocket-Chat: [](<>)[https://n4o-chat.nfdi.de/channel/TWG_N4O_OCMDP_MaCHeCO](<>)

[](https://n4o-chat.nfdi.de/channel/TWG_ObjectsOntology_and_MinimalMetadataSet)