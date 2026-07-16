---
layout: service
lang: de
translation_key: hector-editor
title: HECTOR-Editor
short_title: 'HECTOR-Editor ist eine mit Python und CustomTkinter entwickelte Desktop-Anwendung zur Verwaltung semantischer SKOS-Vokabulare.'
logo: /assets/images/services/hector_logo.png
homepage: 
access_url: 'https://github.com/bcdhbonn/hector-editor-skos'
areas:
- ta1
trails: 
nfdi_category: tools_applications
nfdi_service_types:
- avs
organization: 'universität-bonn' 
lifecycle_phases: 
- 'verarbeitung' 
permalink: /services/hector-editor/
---
### Beschreibung
Der HECTOR-Editor für die Vokabularverwaltung und semantische Modellierung zielt darauf ab, ein flexibles, benutzerfreundliches Werkzeug für die Erstellung, Bearbeitung und Pflege von strukturierten, hierarchischen Thesauri auf Basis des SKOS-Standards (Simple Knowledge Organization System) zu entwickeln. Dazu zählen die automatisierte Verwaltung und Synchronisierung von hierarchischen Beziehungen (wie skos:broader und skos:narrower), die Unterstützung von Polyhierarchien sowie die Verwaltung mehrsprachiger Bezeichnungen (skos:prefLabel und skos:altLabel). Durch die Bereitstellung offener Standards zur Vokabularrepräsentation (RDF-Turtle) und die Gewährleistung semantischer Konsistenz leistet HECTOR-Editor einen wichtigen Beitrag zur Standardisierung und Interoperabilität archäologischer Forschungsdaten.

Nachdem der Forschende seine Vokabulardaten im .ttl-Format geladen hat, kann er über eine grafische Oberfläche neue Konzepte anlegen, diese hierarchisch strukturieren oder im integrierten Metadaten-Formular bearbeiten. Über die Anbindung externer Schnittstellen können direkt Wikidata, das Getty Art & Architecture Thesaurus (AAT) und die Gemeinsame Normdatei (GND) abgefragt und als normierte Mappings (skos:exactMatch) integriert werden. Die bearbeiteten Vokabulare und exportierten Teilhierarchien (Facetten) werden visualisiert und zusammen mit den Metadaten so exportiert, dass sie nahtlos in Linked-Open-Data-Infrastrukturen integriert oder zur Langzeitarchivierung an die Dienste von NFDI4Objects übergeben werden können. 
