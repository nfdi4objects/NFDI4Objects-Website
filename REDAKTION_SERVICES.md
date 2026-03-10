# Anleitung: Services mit TTL-Metadaten erstellen ####

## Übersicht

Für jeden Service werden **zwei Dateien** benötigt:

1. **Hauptdatei (Markdown)**: Enthält alle Service-Informationen und Beschreibung
   - Pfad: `_services/de/service-name.md` oder `_services/en/service-name.md`

2. **TTL-Metadaten-Datei**: Pointer-Datei für maschinenlesbare Metadaten
   - Pfad: `_ttl/services/service-name.ttl`

## Workflow für Redakteure

### Schritt 1: Service Markdown-Datei erstellen

Erstellen Sie die Markdown-Datei mit allen Service-Informationen:

**Beispiel:**

```yaml
---
layout: service
lang: de
translation_key: service-re3dragon
title: "re3dragon"
short_title: "Ein Tool zum Suchen und Auflösen von LOD-Ressourcen"

# Klassifikation
nfdi_category: webapp
service_type: tool

# Organisation
organization: "leiza"
contact_email: "florian.thiery@leiza.de"
homepage: "https://tools.leiza.de/re3dragon/"
access_url: "https://api.leiza.de/re3dragon/"
logo: "/assets/images/services/re3dragon-logo2_500px.png"

# Lebenszyklus-Phasen
lifecycle_phases:
  - verarbeitung
  - nachnutzung

# Zuordnungen
task_areas:
  - ta2
  - ta5

trails:
  - directory-evaluation-tools

# Optional: Koordinatoren
coordinators:
  - person_ref: person-florian-thiery
    role: "Lead Developer"

permalink: /services/re3dragon/
---

## Über den Service

Hier folgt die Markdown-Beschreibung des Services...
```

### Schritt 2: TTL-Metadaten-Datei erstellen (Pointer-System)

**Wichtig:** Die TTL-Datei ist ein **Pointer** - Sie müssen **keine Daten kopieren**!

1. **Kopieren Sie die Vorlage:** `_ttl/VORLAGE_service.ttl`
2. **Benennen Sie sie:** `_ttl/services/service-name.ttl`
3. **Passen Sie 2 Felder an:**

```yaml
---
layout: service-ttl
permalink: /services/re3dragon/index.ttl
source: service-re3dragon  # Muss mit translation_key der MD-Datei übereinstimmen!
---
```

Alle Daten werden automatisch aus der Markdown-Datei gelesen.


### Felder in der TTL-Datei

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `layout` | Immer `service-ttl` | `service-ttl` |
| `permalink` | URL zur TTL-Datei | `/services/service-name/index.ttl` |
| `source` | Verweis auf die MD-Datei | `service-service-name` |

Alle anderen Daten (Titel, Klassifikation, Organisation, etc.) kommen automatisch aus der Markdown-Datei.

## Felder in der Markdown-Datei

### Pflichtfelder

Diese Felder müssen immer vorhanden sein:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `layout` | Immer `service` | `service` |
| `lang` | Sprache | `de` oder `en` |
| `translation_key` | Eindeutiger Key | `service-name` |
| `title` | Service-Name | `"re3dragon"` |
| `short_title` | Kurzbeschreibung | `"Ein Tool zum..."` |
| `nfdi_category` | NFDI-Kategorie | `webapp` (siehe unten) |
| `service_type` | Service-Typ | `tool` (siehe unten) |
| `organization` | Organisation | `"leiza"`, `"dai"`, `"n4o"` |
| `permalink` | URL zur Service-Seite | `/services/service-name/` |

### Empfohlene Felder

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `homepage` | Service-Website | `"https://..."` |
| `access_url` | Direktzugang zum Service | `"https://..."` |
| `contact_email` | Kontakt-E-Mail | `"email@example.com"` |
| `logo` | Logo-Pfad | `"/assets/images/services/logo.png"` |
| `lifecycle_phases` | Lebenszyklus-Phasen | Liste (siehe unten) |
| `task_areas` | Task Areas | Liste (siehe unten) |

### Optionale Felder

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `nfdi_service_types` | Detaillierte NFDI-Typen | Liste (siehe unten) |
| `ccs` | Community Clusters | Liste von CC-IDs |
| `trails` | Trails | Liste von Trail-IDs |
| `twgs` | TWGs | Liste von TWG-IDs |
| `coordinators` | Koordinatoren | Liste mit `person_ref` |
| `institution` | Alternative zu `organization` | `"leiza"` |

**Hinweis:** Verwenden Sie entweder `institution` ODER `organization`, nicht beide.

## Service-Klassifikation

### NFDI Service-Kategorie

Wählen Sie **eine** der folgenden Kategorien:

```yaml
nfdi_category: webapp
```

**Verfügbare Kategorien:**

| ID | Beschreibung |
|------|--------------|
| `data-curation` | Datenkuration |
| `database` | Datenbank |
| `library` | Bibliothek |
| `storage` | Speicherung |
| `support` | Beratung & Support |
| `tool` | Tools & Anwendungen |
| `training` | Schulung & Training |
| `webapp` | Web-Anwendungen |
| `workflow` | Workflows & Pipelines |

### Service-Typ

Sie haben zwei Möglichkeiten zur Klassifikation:

#### Option 1: Einfacher Service-Typ

Für grundlegende Klassifikation:

```yaml
service_type: webapp
```

**Verfügbare Typen:**

| ID | Beschreibung |
|------|--------------|
| `repository` | Repositorium |
| `database` | Datenbank |
| `api` | API / Schnittstelle |
| `tool` | Software-Tool |
| `webapp` | Web-Anwendung |
| `consulting` | Beratungsangebot |
| `training` | Schulungsangebot |
| `infrastructure` | Infrastruktur |
| `standard` | Standard / Vokabular |
| `catalogue` | Katalog |
| `vocabulary` | Vokabular |
| `portal` | Portal |

#### Option 2: NFDI Service-Typen

Für detaillierte Klassifikation können Sie **mehrere** NFDI-Typen angeben:

```yaml
nfdi_service_types:
  - sas
  - dis
  - cres
```

**Verfügbare NFDI Service-Typen:**

**Community, Support and Qualification Services:**
- `cres` - Catalogue and Registry Services
- `quas` - Qualification Services
- `sus` - Support Services

**FAIRification Services - Data Management:**
- `dms` - Data Management Services
- `dcs` - Data Capturing Services
- `des` - Data Enrichment Services
- `dds` - Data Discovery Services
- `dcons` - Data Connecting Services
- `dps` - Data Preservation Services

**FAIRification Services - Spezifische Services:**
- `avs` - Authority File and Vocabulary Services
- `ints` - Interoperability Services
- `das` - Data Services
- `sas` - Software Application Services
- `dis` - Discovery Services
- `stos` - Storage Services

**Wichtig:** Verwenden Sie entweder `service_type` ODER `nfdi_service_types`, nicht beide gleichzeitig!

### Lebenszyklus-Phasen

Ordnen Sie den Service einer oder mehreren Phasen im Forschungsdaten-Lebenszyklus zu:

```yaml
lifecycle_phases:
  - planung
  - erhebung
  - verarbeitung
```

**Verfügbare Phasen:**

| ID | Beschreibung |
|------|--------------|
| `planung` | Planung des Forschungsvorhabens |
| `erhebung` | Erhebung der Daten |
| `verarbeitung` | Verarbeitung und Analyse der Daten |
| `archivierung` | Archivierung von Daten |
| `datenzugang` | Datenzugang ermöglichen |
| `nachnutzung` | Nachnutzung von Daten |
| `lernen-beraten` | Lernen & Beraten |

## Querverbindungen

### Task Areas

Verknüpfen Sie den Service mit Task Areas:

```yaml
task_areas:
  - ta1
  - ta2
  - ta5
```

**Verfügbare Task Areas:** `ta1` bis `ta7`

### Community Clusters

```yaml
ccs:
  - cc2-data-capture-creation
  - cc-25-experimentelle-archaeologie
```

### Trails

```yaml
trails:
  - directory-evaluation-tools
  - workflow-name
```

### Temporary Working Groups (TWGs)

```yaml
twgs:
  - lab-standards
  - another-twg
```

### Koordinatoren

```yaml
coordinators:
  - person_ref: person-reinhard-foertsch
    role: "Lead Developer"
  - person_ref: person-jane-doe
    role: "Project Manager"
```

**Wichtig:** Die `person_ref` muss mit der `translation_key` in `_persons/` übereinstimmen!

## Darstellung auf der Website

### Service-Infobox

Die Infobox erscheint direkt nach dem Service-Header und zeigt:
- NFDI Service-Kategorie
- Service-Typ(en)
- Organisation/Institution (als Link)

Die Box ist standardmäßig eingeklappt und kann durch Klick geöffnet werden.

### Querverbindungen

Am Ende der Seite werden automatisch angezeigt:
- Zugeordnete Task Areas (als verlinkte Badges)
- Zugeordnete Community Cluster (falls vorhanden)
- Zugeordnete Trails (falls vorhanden)
- Zugeordnete TWGs (falls vorhanden)

### Kontakt-Bereich

Wird automatisch angezeigt wenn vorhanden:
- Koordinatoren (aus `coordinators` Feld)
- E-Mail-Adresse (aus `contact_email`)

### Access-Button

Wenn `access_url` vorhanden ist, wird ein prominenter Button angezeigt: "Service-Name nutzen"

### Mehrfache Präsentation

Ein Service erscheint automatisch auf:
- `/services/all/` (Alle Services A-Z, filterbar nach NFDI-Kategorie)
- `/services/planning/`, `/services/collection/` etc. (Lebenszyklus-Phasen-Seiten)
- Task Area Seiten (wenn `task_areas` gesetzt)

## Naming Convention

**Dateinamen:**
- Format: `service-name.md`
- Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Umlaute (ä→ae, ö→oe, ü→ue, ß→ss)

## Mehrsprachigkeit

Für mehrsprachige Services:

1. **Zwei MD-Dateien:**
   - `_services/de/service-name.md` (Deutsche Beschreibung)
   - `_services/en/service-name.md` (English Description)

2. **Eine TTL-Datei:**
   - `_ttl/services/service-name.ttl`
   - Enthält Metadaten für beide Sprachen

**Wichtig:** Die `translation_key` muss in allen Dateien identisch sein!

## Häufige Fehler vermeiden

**Fehler:** Source stimmt nicht mit translation_key überein
```yaml
# In MD-Datei:
translation_key: service-re3dragon
```

**Richtig:** Source muss identisch sein
```yaml
# In MD-Datei:
translation_key: service-re3dragon

# In TTL-Datei:
source: service-re3dragon  # Muss exakt übereinstimmen!
```

**Fehler:** Beide Service-Klassifikationen verwenden
```yaml
service_type: webapp
nfdi_service_types:  # FALSCH! Nicht beide gleichzeitig!
  - sas
```

**Richtig:** Entweder einfach oder detailliert
```yaml
# Entweder einfach:
service_type: webapp

# Oder detailliert:
nfdi_service_types:
  - sas
  - dis
```

**Fehler:** Organisation ohne Anführungszeichen
```yaml
organization: leiza  # FALSCH!
```

**Richtig:** Organisation in Anführungszeichen
```yaml
organization: "leiza"
```

**Fehler:** Kommentare im YAML
```yaml
# Taxonomie  # FALSCH! Keine Kommentare
nfdi_category: webapp
```

**Richtig:** Keine Kommentare
```yaml
nfdi_category: webapp
```

## Checkliste für neue Services

### Markdown-Datei
- [ ] Markdown-Datei erstellt (`_services/de/` oder `_services/en/`)
- [ ] `translation_key` korrekt gesetzt (z.B. `service-name`)
- [ ] Titel und Kurzbeschreibung ausgefüllt
- [ ] `nfdi_category` gewählt
- [ ] `service_type` ODER `nfdi_service_types` gesetzt (nicht beide)
- [ ] Organisation angegeben
- [ ] Lebenszyklus-Phasen zugeordnet 
- [ ] Task Areas zugeordnet  (optional)
- [ ] Homepage und Access-URL eingetragen (falls vorhanden)
- [ ] Kontakt-E-Mail angegeben (empfohlen)
- [ ] Logo vorhanden und Pfad korrekt (optional)
- [ ] Koordinatoren mit `person_ref` referenziert (falls vorhanden)
- [ ] Querverbindungen zu CCs/Trails/TWGs gesetzt (falls zutreffend)


### TTL-Datei (Pointer)
- [ ] TTL-Datei aus Vorlage kopiert (`_ttl/services/`)
- [ ] Dateiname stimmt mit MD-Datei überein
- [ ] TTL-Datei enthält **nur 3 Felder**: `layout`, `permalink`, `source`
- [ ] `source` in TTL stimmt mit `translation_key` in MD überein
- [ ] Permalink korrekt gesetzt (z.B. `/services/service-name/index.ttl`)
- [ ] **Keine zusätzlichen Felder** in der TTL-Datei
- [ ] **Kein Content-Bereich** in der TTL-Datei

## Tipps & Best Practices

1. **Konsistente Benennung:** Verwenden Sie einheitliche `translation_key` über Sprachen hinweg
2. **Permalinks:** Sollten dem Schema `/services/service-name/` folgen
3. **Logos:** Speichern Sie Logos unter `/assets/images/services/`
   - Empfohlene Größe: 500x500px oder ähnlich
   - Format: PNG oder JPG
   - Dateigröße: < 200 KB
4. **Organisation-IDs:** Prüfen Sie `_data/de/institutions.yml` für verfügbare IDs
5. **Mehrsprachigkeit:** Erstellen Sie parallele Dateien in `_services/de/` und `_services/en/`
6. **Lebenszyklus-Phasen:** Ordnen Sie mindestens eine Phase zu, damit der Service gut auffindbar ist

## Vollständiges Beispiel

### Markdown-Datei (_services/de/re3dragon.md)

```yaml
---
layout: service
lang: de
translation_key: service-re3dragon
title: "re3dragon"
short_title: "Ein Tool zum Suchen und Auflösen von LOD-Ressourcen"

nfdi_category: webapp
nfdi_service_types:
  - sas
  - dis
  - cres

organization: "leiza"
contact_email: "florian.thiery@leiza.de"
homepage: "https://tools.leiza.de/re3dragon/"
access_url: "https://api.leiza.de/re3dragon/"
logo: "/assets/images/services/re3dragon-logo2_500px.png"

lifecycle_phases:
  - verarbeitung
  - nachnutzung

task_areas:
  - ta2
  - ta5

trails:
  - directory-evaluation-tools

coordinators:
  - person_ref: person-florian-thiery
    role: "Lead Developer"

permalink: /services/re3dragon/
---

## Über den Service

re3dragon ist ein Tool zum Suchen und Auflösen von Linked Open Data (LOD) Ressourcen...

## Hauptfunktionen

- Suche nach LOD-Ressourcen
- Auflösung von URIs
- Integration verschiedener Vokabulare

## Technische Details

...
```

### TTL-Datei (_ttl/services/re3dragon.ttl)

```yaml
---
layout: service-ttl
permalink: /services/re3dragon/index.ttl
source: service-re3dragon
---
```