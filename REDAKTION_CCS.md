# Anleitung: Community Cluster (CCs) mit TTL-Metadaten erstellen

## Übersicht

Community Clusters (CCs) -  thematische Arbeitsgruppen innerhalb von NFDI4Objects.
Für jeden CC werden **zwei Dateien** benötigt:

1. **Hauptdatei (Markdown)**: Enthält Beschreibung und Inhalte
   - Pfad: `_ccs/de/cc-name.md` oder `_ccs/en/cc-name.md`

2. **TTL-Metadaten-Datei**: Enthält strukturierte Metadaten
   - Pfad: `_ttl/ccs/cc-name.ttl`

## Workflow für Redakteure

### Schritt 1: CC Markdown-Datei erstellen

```yaml
---
layout: cc
lang: de
translation_key: cc15-semantic-modelling
title: "CC15 Semantic Modelling & Linked Open Data"
short_title: "Semantic Modelling & LOD"
identifier: "CC15"
status: active

# Metadata
date: 2024-03-15
proposal_url: "https://doi.org/10.5281/zenodo.12345"
type: "n4o:Organization"

# Co-Chairs
cochairs:
  - name: "Dr. Anna Schmidt"
    person_ref: "person-anna-schmidt"
  - name: "Prof. Michael Weber"
    person_ref: "person-michael-weber"

# Zugeordnete Task Areas
areas:
  - ta3
  - ta5

# Fokus-Bereiche
focus_areas: "Semantische Modellierung und Linked Open Data für Objektdaten"

permalink: /ccs/cc15-semantic-modelling/
---

## Beschreibung

Der Community Cluster CC15 befasst sich mit...

## Schwerpunkte

- Punkt 1
- Punkt 2

## Ziele

1. Ziel 1
2. Ziel 2
```

### Schritt 2: TTL-Metadaten-Datei erstellen (Pointer-System)

**Wichtig:** Die TTL-Datei ist nur ein **Pointer** - Sie müssen **keine Daten kopieren**!

1. **Kopiere die Vorlage:** `_ttl/VORLAGE_cc.ttl`
2. **Benenne sie:** `_ttl/ccs/cc15-semantic-modelling.ttl`
3. **Passen Sie 2 Felder an:**

```yaml
---
layout: cc-ttl
permalink: /ccs/cc15-semantic-modelling/index.ttl
source: cc15-semantic-modelling  # ← Muss mit translation_key der MD-Datei übereinstimmen!
---
```

**Das war's!** Alle Daten (Titel, Co-Chairs, Task Areas, etc.) werden automatisch aus der Markdown-Datei gelesen.

## Das Pointer-System

### Was ist das Pointer-System?

Die TTL-Datei ist **kein Duplikat** der Markdown-Datei, sondern nur ein **Verweis (Pointer)**!

**Wichtig:**
-  Sie pflegen **nur die Markdown-Datei** (in `_ccs/de/` oder `_ccs/en/`)
-  Die TTL-Datei enthält **nur 3 Zeilen** (Layout, Permalink, Source)
-  **Keine Duplikation** von Daten mehr!
-  Jekyll liest beim Build automatisch alle Daten aus der MD-Datei

### Felder in der TTL-Datei

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `layout` | Immer `cc-ttl` | `cc-ttl` |
| `permalink` | URL zur TTL-Datei | `/ccs/cc15-semantic-modelling/index.ttl` |
| `source` | Verweis auf die MD-Datei | `cc15-semantic-modelling` |

Alle anderen Daten (Titel, Co-Chairs, Task Areas, etc.) kommen automatisch aus der Markdown-Datei.

### Felder in der Markdown-Datei

Alle CC-Daten werden in der Markdown-Datei gepflegt:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `translation_key` | Eindeutige ID | `cc15-semantic-modelling` |
| `title` | CC-Titel | `CC15 Semantic Modelling & LOD` |
| `short_title` | Kurztitel | `Semantic Modelling & LOD` |
| `identifier` | CC-Nummer | `CC15` |
| `status` | Status | `active`, `completed`, `planned` |
| `date` | Gründungsdatum | `2024-03-15` |
| `proposal_url` | Proposal DOI/URL | `https://doi.org/...` |
| `cochairs` | Co-Chairs Liste | siehe unten |
| `areas` | Task Areas | `[ta1, ta2]` |
| `focus_areas` | Fokus-Beschreibung | `Thematischer Fokus...` |

### Co-Chairs Format (in der Markdown-Datei)

```yaml
cochairs:
  - name: "Anna Schmidt"
    person_ref: "person-anna-schmidt"
  - name: "Michael Weber"
    person_ref: "person-michael-weber"
```

**Wichtig:** Die `person_ref` muss mit der `translation_key` in `_persons/` übereinstimmen!

## CC-Status

Mögliche Werte für `status`:

- `active` - CC ist aktiv arbeitend
- `completed` - Arbeit abgeschlossen
- `planned` - In Planung

## CC-Identifikatoren

Format: `"CCX"` wobei X die Nummer ist

**Beispiele:**
- `"CC1"` - Knowledge Modelling and Interoperability
- `"CC2"` - Data Capture and Creation
- `"CC15"` - Semantic Modelling & Linked Open Data
- `"CC22"` - Fernerkundung


## Naming Convention

**Dateinamen:**
- Format: `ccX-thematischer-name.md`
- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Umlaute

**Beispiele:**
- Richtig: `cc2-data-capture-creation.md`
- Richtig: `cc15-semantic-modelling.md`
- Richtig: `cc22-fernerkundung.md`
- Falsch: `CC2 Data Capture.md`
- Falsch: `cc_15_semantic.md`

## Mehrsprachigkeit

Für mehrsprachige CCs:

1. **Zwei MD-Dateien:**
   - `_ccs/de/cc15-semantic-modelling.md` (Deutsche Beschreibung)
   - `_ccs/en/cc15-semantic-modelling.md` (English Description)

2. **Eine TTL-Datei:**
   - `_ttl/ccs/cc15-semantic-modelling.ttl`
   - Enthält beide Sprachen (`title_de` und `title_en`)

**Wichtig:** Die `translation_key` muss in allen Dateien identisch sein!

## Beispiel: Vollständiger CC

### Markdown-Datei (_ccs/de/cc2-data-capture-creation.md)

```yaml
---
layout: cc
lang: de
translation_key: cc2-data-capture-creation
title: "CC2 Data Capture and Creation"
short_title: "Datenerfassung und -erstellung"
identifier: "CC2"
status: active
date: 2024-05-24
proposal_url: "https://doi.org/10.5281/zenodo.11655935"

cochairs:
  - name: "Gerald Steilen"
    person_ref: "person-gerald-steilen"
  - name: "Anja Gerber"
    person_ref: "person-anja-gerber"

areas:
  - ta1
  - ta2
  - ta5
  - ta6

focus_areas: "Datengenerierung, -erfassung und -beschreibung"

permalink: /ccs/cc2-data-capture-creation/
---

## Beschreibung
...
```

### TTL-Datei (_ttl/ccs/cc2-data-capture-creation.ttl)

```yaml
---
layout: cc-ttl
permalink: /ccs/CC-NAME/index.ttl
source: cc-cc-name  # WICHTIG: Muss mit translation_key der MD-Datei übereinstimmen!
---
```


## Checkliste für neue CCs

### Markdown-Datei
- [ ] Markdown-Datei erstellt (`_ccs/de/` oder `_ccs/en/`)
- [ ] `translation_key` korrekt gesetzt (z.B. `cc15-semantic-modelling`)
- [ ] CC-Identifier korrekt (z.B. `CC15`)
- [ ] Titel ausgefüllt (kurz und lang)
- [ ] Status gesetzt
- [ ] Co-Chairs mit `person_ref` referenziert (falls vorhanden)
- [ ] Task Areas zugeordnet (mindestens eine)
- [ ] Fokus-Bereiche beschrieben
- [ ] Proposal-URL eingetragen (falls vorhanden)
- [ ] Keine Syntax-Fehler (YAML validieren!)
- [ ] Bei Mehrsprachigkeit: Beide MD-Dateien erstellt

### TTL-Datei (Pointer)
- [ ] TTL-Datei aus Vorlage kopiert (`_ttl/ccs/`)
- [ ] Dateiname stimmt mit MD-Datei überein
- [ ] TTL-Datei enthält **nur 3 Felder**: `layout`, `permalink`, `source`
- [ ] `source` in TTL stimmt mit `translation_key` in MD überein
- [ ] Permalink korrekt gesetzt (z.B. `/ccs/cc15-semantic-modelling/index.ttl`)
- [ ] **Keine zusätzlichen Felder** in der TTL-Datei
- [ ] **Kein Content-Bereich** in der TTL-Datei

## Configuration Update

Nach dem Erstellen der ersten CCs muss die `_config.yml` aktualisiert werden:

```yaml
collections:
  ccs:
    output: true
    permalink: /ccs/:path/
```

