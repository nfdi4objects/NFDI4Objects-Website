# TTL-Generierung Dokumentation

Diese Dokumentation erklärt, wie TTL-Dateien (RDF/Turtle) für verschiedene Entitätstypen im NFDI4Objects-Projekt generiert werden.

## Übersicht

Das Projekt nutzt Jekyll-Layouts, um automatisch TTL-Dateien aus Frontmatter-Daten zu generieren. **Kein Plugin erforderlich!**

## Verfügbare TTL-Templates

| Entitätstyp | Layout | RDF-Typ | Beispiel |
|-------------|--------|---------|----------|
| Task Areas | `ta-ttl.html` | `n4o:TaskArea` | `/areas/ta1/index.ttl` |
| TWGs | `twg-ttl.html` | `n4o:Organization` | `/twgs/twg-collections/index.ttl` |
| Community Clusters | `cc-ttl.html` | `n4o:Organization` | `/ccs/cc1/index.ttl` |
| Trails | `trail-ttl.html` | `nfdicore:Project` | `/trails/directory-evaluation-tools/index.ttl` |
| Personen | `person-ttl.html` | `nfdicore:Person` | `/persons/florian-thiery/index.ttl` |
| Services | `service-ttl.html` | `nfdicore:Service` | `/services/ianus/index.ttl` |

## Verwendete RDF-Präfixe

Alle Templates verwenden folgende Standard-Präfixe:

```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix schema: <http://schema.org/> .
@prefix nfdicore: <https://nfdi.fiz-karlsruhe.de/ontology#> .
@prefix n4o: <https://nfdi4objects.net/ontology#> .
```

## Anleitung: Neue TTL-Dateien erstellen

### 1. Task Area TTL

**Datei:** `_ttl/areas/ta1.ttl`

```yaml
---
layout: ta-ttl
permalink: /areas/ta1/index.ttl
ta_id: ta1
title_en: "Task Area 1 – Data Capture and Creation"
title_de: "Task Area 1 – Datenaufnahme & Erschließung"
definition_en: "Task Area 1 Documentation covers..."
definition_de: "TA 1 Documentation deckt..."
logo: "/assets/icons/task-areas/Task-Area-01.svg"
zenodo_url: "https://zenodo.org/records/10409228"
lang: de
---
```

**Automatisch erfasste Daten:**
- Mitglieder werden automatisch aus den Personen-Dateien extrahiert (basierend auf `areas: [ta1]` im Frontmatter)

### 2. TWG TTL

**Datei:** `_ttl/twgs/twg-collections.ttl`

```yaml
---
layout: twg-ttl
permalink: /twgs/twg-collections/index.ttl
twg_id: twg-collections
title_en: "TWG Collections and Museums"
title_de: "TWG Sammlungen & Museen"
definition_en: "Exchange between research institutions and museums."
definition_de: "Austausch zwischen Forschungseinrichtungen und Museen."
identifier: "TWG 2020.2"
status: active
date: "2023-05-01"
logo: "/assets/icons/twgs/twg-collections.svg"
lang: de
---
```

### 3. Trail TTL

**Datei:** `_ttl/trails/directory-evaluation-tools.ttl`

```yaml
---
layout: trail-ttl
permalink: /trails/directory-evaluation-tools/index.ttl
trail_id: directory-evaluation-tools
title_en: "Directory and evaluation of existing tools"
title_de: "Verzeichnis und Evaluation vorhandener Tools"
definition_en: "This trail project focuses on..."
definition_de: "Dieses Trail-Projekt fokussiert sich auf..."
identifier: "1.1"
start_date: "2024-02-09"
proposal_url: "https://osf.io/u6mbg"
status: "active"
coordinators:
  - person_ref: "person-benjamin-hoeke"
  - person_ref: "person-matthias-lang"
areas:
  - ta1
institutions:
  - dai
  - cau
lang: de
---
```

### 4. Person TTL

**Datei:** `_ttl/persons/florian-thiery.ttl`

```yaml
---
layout: person-ttl
permalink: /persons/florian-thiery/index.ttl
translation_key: person-florian-thiery
title: "Florian Thiery"
firstname: "Florian"
lastname: "Thiery"
orcid: "0000-0002-3246-3531"
position: "Linked Open Data Specialist"
institution: "leiza"
image: "/assets/images/persons/f.thiery.jpg"
groups:
  - advisory_board
areas:
  - ta1
  - ta3
  - ta5
lang: de
---
```

### 5. Service TTL

**Datei:** `_ttl/services/ianus-forschungsdatenmanagement-empfehlungen.ttl`

```yaml
---
layout: service-ttl
permalink: /services/ianus-forschungsdatenmanagement-empfehlungen/index.ttl
translation_key: service-ianus-fdm
title: "IANUS FDM-Empfehlungen"
short_title: "FDM-Empfehlungen"

nfdi_category: support
service_type: consulting
lifecycle_phases:
  - planung

organization: "ianus"
homepage: "https://ianus-fdz.de/it-empfehlungen"
logo: "/assets/images/services/ianus-logo.png"

task_areas:
  - ta5

lang: de
---
```

**Hinweis:** Die TTL-Datei wird automatisch aus dem Service-Frontmatter generiert. Folgende Felder werden verwendet:
- `title` / `short_title` → Service-Name
- `nfdi_category` → Kategorie (aus service_categories.yml)
- `service_type` / `nfdi_service_types` → Typ-Klassifikation
- `lifecycle_phases` → Lebenszyklus-Phasen
- `organization` → Institution/Organisation (aus institutions.yml)
- `homepage` / `access_url` → URLs
- `task_areas` → Task Area Zuordnungen
- Features-Sektion im Markdown-Inhalt

### 6. Community Cluster TTL

**Datei:** `_ttl/ccs/cc1.ttl`

```yaml
---
layout: cc-ttl
permalink: /ccs/cc1/index.ttl
cc_id: cc1
title_en: "CC1 Knowledge Modeling and Interoperability"
title_de: "CC1 Wissensmodellierung und Interoperabilität"
definition_en: "Focus on semantic modeling and Linked Open Data"
definition_de: "Fokus auf semantische Modellierung und Linked Open Data"
identifier: "CC1"
status: "Active"
focus_areas: "meta- and research data structures, semantic modelling, Linked Open Data"
lang: de
---
```

## Download-Buttons integrieren

### Universeller Download-Button

Verwende die Include-Vorlage `ttl-download-button.html`:

```liquid
{% include ttl-download-button.html
   entity_type="areas"
   entity_id="ta1"
%}
```

### In HTML-Seiten

**Beispiel für Task Area:**
```markdown
---
layout: page
title: Task Area 1
---

Beschreibung der Task Area...

{% include ta-persons-list.html ta_id="ta1" %}
```

Der Download-Button ist bereits in `ta-persons-list.html` integriert!

**Beispiel für Trails:**
```html
<p class="space-t">
  {% include ttl-download-button.html
     entity_type="trails"
     entity_id="directory-evaluation-tools"
  %}
</p>
```

**Beispiel für Personen:**
```html
{% include ttl-download-button.html
   entity_type="persons"
   entity_id="florian-thiery"
%}
```

## Mehrsprachigkeit

TTL-Dateien sind **sprachunabhängig** und enthalten beide Sprachen:

```turtle
<https://nfdi4objects.net/areas/ta1/ta1>
    skos:prefLabel "Task Area 1 – Data Capture and Creation"@en ;
    skos:prefLabel "Task Area 1 – Datenaufnahme & Erschließung"@de ;
```

**Best Practice:** Eine TTL-Datei pro Ressource, eine für alle Sprachen!

## Ordnerstruktur

**Wichtig:** TTL-Dateien liegen in einem **sprachunabhängigen** `_ttl/` Ordner, da sie mehrsprachig sind!

```
_ttl/                        # Sprachunabhängige TTL-Dateien
├── areas/
│   ├── ta1.ttl              → /areas/ta1/index.ttl
│   └── ta2.ttl              → /areas/ta2/index.ttl
├── twgs/
│   └── twg-collections.ttl  → /twgs/twg-collections/index.ttl
├── trails/
│   └── directory-evaluation-tools.ttl → /trails/directory-evaluation-tools/index.ttl
└── persons/
    └── florian-thiery.ttl   → /persons/florian-thiery/index.ttl

_areas/                      # Sprachabhängige HTML-Seiten
├── de/
│   └── ta1.md               → /areas/ta1/ (Deutsch)
└── en/
    └── ta1.md               → /en/areas/ta1/ (Englisch)

_twgs/
├── de/
│   └── twg-collections.md
└── en/
    └── twg-collections.md

_trails/
├── de/
│   └── directory-evaluation-tools.md
└── en/
    └── directory-evaluation-tools.md

_persons/
├── de/
│   └── florian-thiery.md
└── en/
    └── florian-thiery.md
```

## Jekyll Build-Prozess

```
Frontmatter (YAML)
    ↓
Jekyll Layout (Liquid Template)
    ↓
Generierte TTL-Datei (RDF/Turtle)
    ↓
_site/areas/ta1/index.ttl
```

## Validierung

Um die generierten TTL-Dateien zu validieren:

1. **Lokal testen:** Jekyll-Server starten und TTL-Datei aufrufen
2. **RDF Validator:** Nutze https://www.w3.org/RDF/Validator/
3. **Turtle Validator:** Nutze http://ttl.summerofcode.be/

## Erweitern der Templates

Um neue Felder hinzuzufügen, bearbeite das entsprechende Layout in `_layouts/`:

```liquid
{%- if page.new_field %}
n4o:newProperty "{{ page.new_field }}" ;
{%- endif %}
```

## Support

Bei Fragen zu den TTL-Templates, siehe:
- RDF 1.1 Turtle Spezifikation: https://www.w3.org/TR/turtle/
- SKOS Reference: https://www.w3.org/TR/skos-reference/
- FOAF Vocabulary: http://xmlns.com/foaf/spec/
