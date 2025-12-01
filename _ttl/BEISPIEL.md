# Beispiel: Vollständiger Trail mit beiden Dateien

Dieses Dokument zeigt ein vollständiges Beispiel, wie ein Trail erstellt wird.

## Schritt 1: Markdown-Datei erstellen

**Datei:** `_trails/de/keramik-analyse.md`

```yaml
---
layout: trail
lang: de
translation_key: trail-keramik-analyse
title: "Digitale Keramikanalyse in der Archäologie"
short_title: "Keramikanalyse Digital"
status: active

# Metadata
start_date: 2024-03-15
proposal_url: "https://osf.io/xyz789"
type: "nfdicore:Project"

# Koordinatoren (CoChairs)
coordinators:
  - name: "Dr. Sarah Schmidt"
    role: "CoChair1"
    person_ref: "person-sarah-schmidt"
  - name: "Prof. Michael Weber"
    role: "CoChair2"
    person_ref: "person-michael-weber"

# Zugeordnete Task Areas
areas:
  - ta2
  - ta4

# Beteiligte Institutionen
institutions:
  - dai
  - uni-tuebingen
  - leiza

permalink: /trails/keramik-analyse/
---

## Projektbeschreibung

Dieses Trail-Projekt entwickelt standardisierte Methoden und Tools für die digitale
Analyse von Keramikfunden. Ziel ist die Schaffung interoperabler Datenstrukturen
für die Erfassung, Auswertung und Langzeitarchivierung von Keramikdaten.

## Ziele

- Entwicklung eines standardisierten Datenmodells für Keramikanalysen
- Implementierung von Machine-Learning-Verfahren zur Klassifikation
- Erstellung von Best-Practice-Guidelines
- Aufbau einer Community-Plattform zum Austausch

## Arbeitsschritte

1. **Bedarfsanalyse** (Q1 2024)
   - Befragung der Community
   - Analyse bestehender Tools

2. **Entwicklung** (Q2-Q3 2024)
   - Datenmodell-Entwicklung
   - Tool-Implementierung

3. **Testing & Dokumentation** (Q4 2024)
   - Beta-Tests mit Partnern
   - Erstellung der Dokumentation

4. **Launch** (Q1 2025)
   - Öffentlicher Release
   - Workshop-Reihe

## Erwartete Ergebnisse

- Standardisiertes Datenmodell
- Open-Source Software-Tools
- Umfangreiche Dokumentation
- Trainingsmaterialien
```

## Schritt 2: TTL-Metadaten-Datei erstellen

**Datei:** `_ttl/trails/keramik-analyse.ttl`

```yaml
---
layout: trail-ttl
permalink: /trails/keramik-analyse/index.ttl
trail_id: keramik-analyse

title_en: "Digital Ceramic Analysis in Archaeology"
title_de: "Digitale Keramikanalyse in der Archäologie"

definition_en: "This trail project develops standardized methods and tools for digital analysis of ceramic finds. The goal is to create interoperable data structures for recording, analyzing, and long-term archiving of ceramic data."

definition_de: "Dieses Trail-Projekt entwickelt standardisierte Methoden und Tools für die digitale Analyse von Keramikfunden. Ziel ist die Schaffung interoperabler Datenstrukturen für die Erfassung, Auswertung und Langzeitarchivierung von Keramikdaten."

identifier: "2.3"
start_date: "2024-03-15"
proposal_url: "https://osf.io/xyz789"
status: "active"
type: "nfdicore:Project"

coordinators:
  - person_ref: "person-sarah-schmidt"
  - person_ref: "person-michael-weber"

areas:
  - ta2
  - ta4

institutions:
  - dai
  - uni-tuebingen
  - leiza

lang: de
---
```

## Was passiert dann?

### 1. Jekyll Build-Prozess

Wenn Sie `bundle exec jekyll build` ausführen:

1. Jekyll verarbeitet `_trails/de/keramik-analyse.md`
   - Generiert HTML-Seite: `/trails/keramik-analyse/index.html`
   - Verwendet das Layout `trail.html`

2. Jekyll verarbeitet `_ttl/trails/keramik-analyse.ttl`
   - Generiert TTL-Datei: `/trails/keramik-analyse/index.ttl`
   - Verwendet das Layout `trail-ttl.html`
   - Konvertiert die Frontmatter-Daten in RDF/Turtle-Format

### 2. Ergebnis auf der Website

**HTML-Seite:**
- URL: `https://nfdi4objects.net/trails/keramik-analyse/`
- Enthält den vollständigen Trail-Content
- Zeigt einen Download-Button für die TTL-Metadaten

**TTL-Metadaten:**
- URL: `https://nfdi4objects.net/trails/keramik-analyse/index.ttl`
- Maschinenlesbare RDF-Daten
- Kann in Triple Stores importiert werden

### 3. TTL-Output (generiert)

Das generierte TTL sieht dann so aus:

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix nfdicore: <https://nfdi.fiz-karlsruhe.de/ontology#> .
@prefix n4o: <https://nfdi4objects.net/ontology#> .

<https://nfdi4objects.net/trails/keramik-analyse/keramik-analyse>
    rdf:type nfdicore:Project ;
    skos:prefLabel "Digital Ceramic Analysis in Archaeology"@en ;
    skos:prefLabel "Digitale Keramikanalyse in der Archäologie"@de ;
    skos:definition "This trail project develops..."@en ;
    skos:definition "Dieses Trail-Projekt entwickelt..."@de ;
    dcterms:identifier "2.3" ;
    dcterms:date "2024-03-15"^^xsd:date ;
    n4o:status "active" ;
    n4o:coChair <https://nfdi4objects.net/persons/sarah_schmidt/sarah_schmidt> ;
    n4o:coChair <https://nfdi4objects.net/persons/michael_weber/michael_weber> ;
    n4o:relatedTaskArea <https://nfdi4objects.net/areas/ta2/ta2> ;
    n4o:relatedTaskArea <https://nfdi4objects.net/areas/ta4/ta4> ;
    n4o:involvedInstitution "dai" ;
    n4o:involvedInstitution "uni-tuebingen" ;
    n4o:involvedInstitution "leiza" ;
    dcterms:isPartOf <https://nfdi4objects.net> .
```

## Quick-Checklist für neue Trails

- [ ] Markdown-Datei in `_trails/de/` oder `_trails/en/` erstellt
- [ ] TTL-Vorlage kopiert nach `_ttl/trails/`
- [ ] Dateinamen stimmen überein (ohne Extension)
- [ ] `trail_id` = Dateiname
- [ ] `permalink` korrekt gesetzt
- [ ] Beide Sprachen (de + en) ausgefüllt
- [ ] Co-Chairs referenziert (müssen in `_persons/` existieren)
- [ ] Task Areas zugeordnet
- [ ] Keine Syntax-Fehler (YAML validieren!)
- [ ] Kein Content nach `---` in der TTL-Datei

## Troubleshooting

### Problem: TTL-Download funktioniert nicht

**Lösung:** Prüfen Sie:
1. Liegt die TTL-Datei im richtigen Ordner? (`_ttl/trails/`)
2. Stimmt der `trail_id` mit dem Dateinamen überein?
3. Ist der `permalink` korrekt gesetzt?

### Problem: Build-Fehler "Invalid YAML"

**Lösung:**
- Verwenden Sie einen YAML-Validator (z.B. yamllint.com)
- Häufige Fehler:
  - Fehlende Anführungszeichen bei URLs
  - Falsche Einrückung (immer 2 Spaces!)
  - Unerlaubte Zeichen in Strings

### Problem: Person-Referenzen funktionieren nicht

**Lösung:**
- Die `person_ref` muss exakt mit der `translation_key` in `_persons/` übereinstimmen
- Format: `person-vorname-nachname` (kleingeschrieben, mit Bindestrichen)
