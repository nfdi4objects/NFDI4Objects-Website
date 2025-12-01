# Anleitung: TTL-Metadaten für Trails, TWGs und Services erstellen

## Übersicht

Für Trails, TWGs und Services werden **zwei Dateien** benötigt:

1. **Hauptdatei (Markdown)**: Enthält den vollständigen Inhalt
   - Pfad: `_trails/de/mein-trail.md`, `_twgs/de/meine-twg.md` oder `_services/de/mein-service.md`

2. **TTL-Metadaten-Datei**: Enthält nur Frontmatter für die Metadaten
   - Pfad: `_ttl/trails/mein-trail.ttl`, `_ttl/twgs/meine-twg.ttl` oder `_ttl/services/mein-service.ttl`

## Warum zwei Dateien?

Die TTL-Dateien ermöglichen:
- **Maschinenlesbare Metadaten** im RDF/Turtle-Format
- **Download als Linked Open Data**
- **Integration in semantische Datenbanken**
- **Interoperabilität** mit anderen NFDI-Konsortien

## Workflow für Redakteure

### Schritt 1: Markdown-Datei erstellen (Trail/TWG/Service)

Erstellen Sie zuerst die normale Markdown-Datei wie gewohnt:

**Beispiel Trail:**

```yaml
---
layout: trail
lang: de
translation_key: trail-mein-projekt
title: "Mein Projekt-Titel"
short_title: "Kurztitel"
status: active
start_date: 2024-01-15
proposal_url: "https://osf.io/abc123"
coordinators:
  - name: "Max Mustermann"
    role: "CoChair1"
    person_ref: "person-max-mustermann"
areas:
  - ta1
institutions:
  - dai
permalink: /trails/mein-projekt/
---

Hier kommt der Hauptinhalt...
```

**Beispiel Service:**

```yaml
---
layout: service
lang: de
translation_key: service-mein-dienst
title: "Mein Service-Name"
short_title: "Kurztitel"

nfdi_category: webapp
service_type: tool
lifecycle_phases:
  - planung
  - erhebung

organization: "n4o"
logo: "/assets/images/services/logo.png"

task_areas:
  - ta1
  - ta2

permalink: /services/mein-dienst/
---

Hier kommt der Hauptinhalt...
```

### Schritt 2: TTL-Datei erstellen

1. **Kopieren Sie die Vorlage** aus `_ttl/VORLAGE_trail.ttl`, `_ttl/VORLAGE_twg.ttl` oder `_ttl/VORLAGE_service.ttl`
2. **Benennen Sie sie** entsprechend: z.B. `_ttl/trails/mein-projekt.ttl` oder `_ttl/services/mein-dienst.ttl`
3. **Füllen Sie die Felder aus** (siehe unten)

### Schritt 3: Felder ausfüllen

Die TTL-Datei benötigt **nur Frontmatter**, keinen Content-Bereich!

### Felder in der TTL-Datei (Pointer-System)

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `layout` | Layout-Typ | `trail-ttl`, `twg-ttl` oder `service-ttl` |
| `permalink` | URL zur TTL-Datei | `/trails/mein-projekt/index.ttl` |
| `source` | Verweis auf die MD-Datei | `trail-mein-projekt` |

 Alle anderen Daten kommen automatisch aus der Markdown-Datei.

## Tipps

### Source-ID korrekt setzen

Die `source` in der TTL-Datei muss **exakt** mit der `translation_key` aus der Markdown-Datei übereinstimmen!

**Beispiel Trail:**
```yaml
# In _trails/de/mein-projekt.md:
translation_key: trail-mein-projekt

# In _ttl/trails/mein-projekt.ttl:
source: trail-mein-projekt  # ← Muss identisch sein!
```

###  Permalinks richtig setzen

**Trails:**
```yaml
permalink: /trails/DATEINAME/index.ttl
```

**TWGs:**
```yaml
permalink: /twgs/DATEINAME/index.ttl
```

**Services:**
```yaml
permalink: /services/DATEINAME/index.ttl
```

**Achtung:** Der `DATEINAME` muss mit der `.md`-Datei übereinstimmen!

**Beispiel Trail:**
- Markdown: `_trails/de/fuzziness-wobbliness.md`
  - `translation_key: trail-fuzziness-wobbliness`
- TTL: `_ttl/trails/fuzziness-wobbliness.ttl`
  - `source: trail-fuzziness-wobbliness`

**Beispiel Service:**
- Markdown: `_services/de/ianus-fdm.md`
  - `translation_key: service-ianus-fdm`
- TTL: `_ttl/services/ianus-fdm.ttl`
  - `source: service-ianus-fdm`


**Fehler:** Source stimmt nicht mit translation_key überein
```yaml
# In MD-Datei:
translation_key: trail-my-project

# In TTL-Datei:
source: trail-different-name  ← FALSCH!
```

**Richtig:** Source muss identisch sein
```yaml
# In MD-Datei:
translation_key: trail-my-project

# In TTL-Datei:
source: trail-my-project  ← Muss exakt übereinstimmen!
```


## Checkliste vor dem Commit

- [ ] Markdown-Datei erstellt und vollständig ausgefüllt
- [ ] TTL-Datei aus Vorlage kopiert
- [ ] TTL-Datei enthält **nur 3 Felder**: `layout`, `permalink`, `source`
- [ ] `source` in TTL stimmt mit `translation_key` in MD überein
- [ ] Permalink korrekt gesetzt (entspricht Dateinamen)
- [ ] Keine Syntax-Fehler in der MD-Datei (YAML-Validator nutzen!)
- [ ] Deutsche UND englische Titel in der MD-Datei vorhanden
- [ ] **Kein Content-Bereich** in der TTL-Datei
- [ ] **Keine zusätzlichen Felder** in der TTL-Datei (außer layout, permalink, source)
