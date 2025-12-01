## Anleitung: Personen-Profile mit TTL-Metadaten erstellen

---

## Übersicht

Für jede Person werden **zwei Dateien** benötigt:

1. **Hauptdatei (Markdown)**: Enthält Biografie/Beschreibung
   - Pfad: `_persons/de/vorname-nachname.md`
   - Oder: `_persons/en/vorname-nachname.md`

2. **TTL-Metadaten-Datei**: Enthält strukturierte Metadaten
   - Pfad: `_ttl/persons/vorname-nachname.ttl`

## Workflow für Redakteure

### Schritt 1: Person Markdown-Datei erstellen

```yaml
---
layout: person
lang: de
translation_key: person-max-mustermann
title: Max Mustermann
position: Research Data Manager  # NEU: Wird prominent angezeigt!
image: /assets/images/persons/m.mustermann.jpg

# Organisatorische Rollen (NEU!)
groups:
  - coordination         # Koordinationsbüro
  - steering            # Lenkungsausschuss
  - advisory_board      # Wissenschaftlicher Beirat
  - co_applicants       # Mitantragstellende Institution

# Institution
institution: dai

# Task Areas
areas:
  - ta1
  - ta5

# ORCID (NEU - wird mit offiziellem Icon angezeigt!)
orcid: 0000-0002-1234-5678

---
Dr. Max Mustermann ist Experte für Forschungsdatenmanagement...
```

### Schritt 2: TTL-Metadaten-Datei erstellen (Pointer-System)

**Wichtig:** Die TTL-Datei ist nur ein **Pointer** - Sie müssen **keine Daten kopieren**!

1. **Kopieren Sie die Vorlage:** `_ttl/VORLAGE_person.ttl`
2. **Benennen Sie:** `_ttl/persons/max-mustermann.ttl`
3. **Passen Sie  2 Felder an:**

```yaml
---
layout: person-ttl
permalink: /persons/max-mustermann/index.ttl
source: person-max-mustermann  # ← Muss mit translation_key der MD-Datei übereinstimmen!
---
```

**Ergebnis:** Alle Daten (Name, ORCID, Position, etc.) werden automatisch aus der Markdown-Datei gelesen.


### Felder in der TTL-Datei

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `layout` | Immer `person-ttl` | `person-ttl` |
| `permalink` | URL zur TTL-Datei | `/persons/max-mustermann/index.ttl` |
| `source` | Verweis auf die MD-Datei | `person-max-mustermann` |

Alle anderen Daten (Name, ORCID, Position, Institution, etc.) kommen automatisch aus der Markdown-Datei.

### Felder in der Markdown-Datei

Alle Personendaten werden in der Markdown-Datei gepflegt:

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `translation_key` | Eindeutige ID | `person-max-mustermann` |
| `title` | Vollständiger Name | `Max Mustermann` |
| `position` | Position/Rolle | `Research Data Manager` |
| `orcid` | ORCID iD | `0000-0002-1234-5678` |
| `institution` | Hauptinstitution | `dai` |
| `image` | Profilbild-Pfad | `/assets/images/persons/m.mustermann.jpg` |
| `groups` | Organisatorische Rollen | `[coordination, steering]` |
| `areas` | Task Areas | `[ta1, ta5]` |
| `email` | E-Mail (optional) | `email@example.com` |
| `homepage` | Website (optional) | `https://...` |

---


###  **Rollen-Labels**
Bei allen automatisch erkannten Zugehörigkeiten (CCs, Trails, TWGs) wird die spezifische Rolle angezeigt, z.B.:
- "Data Capture and Creation (Co-Chair 2)"
- "Fuzziness & Wobbliness Trail (Koordinator)"
- "OCMDP & MaCHeCO (Co-Chair 1)"


##  Organisatorische Rollen (Groups)

Die `groups`-Felder zeigen die organisatorischen Zugehörigkeiten der Person an. 

### Mögliche Werte für `groups`:

| Wert | Anzeige (DE) | Anzeige (EN) | Icon |
|------|--------------|--------------|------|
| `coordination` | Koordinationsbüro | Coordination Office |  (fa-users-cog) |
| `steering` | Lenkungsausschuss | Steering Committee |  (fa-compass) |
| `advisory_board` | Wissenschaftlicher Beirat | Advisory Board |  (fa-user-tie) |
| `co_applicants` | Mitantragstellende Institution | Co-Applicant Institution |  (fa-handshake) |

### Beispiel:

```yaml
groups:
  - coordination
  - advisory_board
```

**So wird es angezeigt:**

**Organisatorische Rollen**
-  Koordinationsbüro
-  Wissenschaftlicher Beirat

---

##  Automatische Rollen-Erkennung

Zusätzlich zu den organisatorischen Rollen werden **automatisch** auch folgende Zugehörigkeiten erkannt und angezeigt:

### Community Clusters
Wenn die Person als Co-Chair in einem Community Cluster eingetragen ist, wird dies automatisch angezeigt mit der spezifischen Rolle (z.B. "Co-Chair 1", "Co-Chair 2").

### Trails
Wenn die Person als Koordinator in einem Trail eingetragen ist, wird dies automatisch angezeigt mit der Rolle (z.B. "Koordinator", "CoChair1").

### Temporary Working Groups (TWGs)
Wenn die Person als Koordinator in einer TWG eingetragen ist, wird dies automatisch angezeigt.

**Wichtig:** Diese Zuordnungen erfolgen über das `person_ref`-Feld in den jeweiligen CCs, Trails und TWGs. Die Person muss dort mit ihrem `translation_key` referenziert sein.

## Profilbilder

**Empfehlungen:**
- **Größe:** 400x400px (quadratisch)
- **Format:** JPG oder PNG
- **Dateigröße:** < 200 KB
- **Dateiname:** `vorname.nachname.jpg` (Kleinbuchstaben)
- **Pfad:** `/assets/images/persons/`

## Mehrsprachigkeit

Für mehrsprachige Profile:

1. **Zwei MD-Dateien:**
   - `_persons/de/max-mustermann.md` (Deutsche Bio)
   - `_persons/en/max-mustermann.md` (English Bio)

2. **Eine TTL-Datei:**
   - `_ttl/persons/max-mustermann.ttl`
   - Enthält Metadaten für beide Sprachen

**Wichtig:** Die `translation_key` muss in allen Dateien identisch sein!

## Tipps

### 1. Naming Convention

**Dateinamen:**
- Immer Kleinbuchstaben
- Bindestriche statt Leerzeichen
- Keine Umlaute (ä→ae, ö→oe, ü→ue, ß→ss)

### 2. Translation Key Format

Immer: `person-vorname-nachname`

**Beispiele:**
- `person-florian-thiery`
- `person-reinhard-foertsch`
- `person-kai-christian-bruhn`

### 3. Permalink Format

Immer: `/persons/VORNAME-NACHNAME/index.ttl`

**Wichtig:** Der Name im Permalink muss mit dem Dateinamen übereinstimmen!


## Checkliste für neue Personen

### Markdown-Datei
- [ ] Markdown-Datei erstellt (`_persons/de/` oder `_persons/en/`)
- [ ] `translation_key` korrekt gesetzt (z.B. `person-max-mustermann`)
- [ ] `title` ausgefüllt (vollständiger Name)
- [ ] Position/Rolle angegeben
- [ ] ORCID  (falls verfügbar)
- [ ] Institution als Shortcode eingetragen (z.B. `dai`)
- [ ] Profilbild vorhanden und Pfad korrekt
- [ ] Gruppen/Gremien zugeordnet (falls zutreffend)
- [ ] Task Areas zugeordnet (falls zutreffend)
- [ ] Bei Mehrsprachigkeit: Beide MD-Dateien erstellt

### TTL-Datei (Pointer)
- [ ] TTL-Datei aus Vorlage kopiert (`_ttl/persons/`)
- [ ] Dateiname stimmt mit MD-Datei überein
- [ ] TTL-Datei enthält **nur 3 Felder**: `layout`, `permalink`, `source`
- [ ] `source` in TTL stimmt mit `translation_key` in MD überein
- [ ] Permalink korrekt gesetzt (z.B. `/persons/max-mustermann/index.ttl`)
- [ ] **Keine zusätzlichen Felder** in der TTL-Datei
- [ ] **Kein Content-Bereich** in der TTL-Datei

##  Vollständige Beispiele

### Beispiel 1: Florian Thiery (einfache Rolle)

**Datei:** `_persons/de/florian-thiery.md`

```yaml
---
layout: person
lang: de
translation_key: person-florian-thiery
title: Florian Thiery
position: Linked Open Data Experte & Semantische Technologien
image: /assets/images/persons/f.thiery.jpg

groups:
  - advisory_board

institution: leiza

areas:
  - ta1
  - ta3
  - ta5

orcid: 0000-0002-3246-3531
---
Dr. Florian Thiery ist Spezialist für Linked Open Data...
```

**Wird angezeigt als:**

**Position**
Linked Open Data Experte & Semantische Technologien

**Institution**
[LEIZA - Leibniz-Zentrum für Archäologie](link)

**Organisatorische Rollen**
 Wissenschaftlicher Beirat

**Task Areas**
[TA1] [TA3] [TA5]

**Trails**
[Fuzziness & Wobbliness] (CoChair2)

**ORCID**
 [0000-0002-3246-3531](https://orcid.org/0000-0002-3246-3531)

---

### Beispiel 2: Anja Gerber (mehrere Rollen)

**Datei:** `_persons/de/anja-gerber.md`

```yaml
---
layout: person
title: "Anja Gerber"
lang: "de"
translation_key: "person-anja-gerber"
position: "Koordinationsbüro"
image: "/assets/images/persons/a.gerber.jpg"

groups:
  - coordination

institution: klassik_stiftung_weimar

areas:
  - ta6

orcid: 0000-0003-2576-1511
---
Anja Gerber forscht...
```

**Wird angezeigt als:**

**Position**
Koordinationsbüro

**Institution**
[Klassik Stiftung Weimar](link)

**Organisatorische Rollen**
 Koordinationsbüro

**Task Areas**
[TA6: Qualification, Integration and Harmonisation]

**Community Clusters**
- [Data Capture and Creation] (Co-Chair 2)
- [Authority Files and Community-driven Vocabularies] (Co-Chair 1)

**Temporary Working Groups**
- [N4O Object Core Metadata Profile (OCMDP) & MaCHeCO] (Co-Chair 1)

**ORCID**
 [0000-0003-2576-1511](https://orcid.org/0000-0003-2576-1511)

---

##  Wie funktioniert die automatische Rollen-Erkennung?

### In Community Clusters (CCs)

**Datei:** `_ccs/de/cc2-data-capture-creation.md`

```yaml
---
title: "Data Capture and Creation"
cochairs:
  - name: "Anja Gerber"
    person_ref: "person-anja-gerber"  # ← Hier wird die Verbindung hergestellt!
    role: "Co-Chair 2"
  - name: "Andere Person"
    person_ref: "person-andere"
    role: "Co-Chair 1"
---
```

Das System sucht automatisch nach dem `person_ref` und zeigt dann auf der Personenseite an:
- Den CC-Titel als Link
- Die spezifische Rolle ("Co-Chair 2")

### In Trails

**Datei:** `_trails/de/fuzziness-wobbliness.md`

```yaml
---
title: "Fuzziness & Wobbliness"
coordinators:
  - name: "Allard Mees"
    role: "CoChair1"
  - name: "Florian Thiery"
    person_ref: "person-florian-thiery"  # ← Verbindung!
    role: "CoChair2"
---
```

### In TWGs

**Datei:** `_twgs/de/ocmdp-macheco.md`

```yaml
---
title: "OCMDP & MaCHeCO"
coordinators:
  - name: "Anja Gerber"
    person_ref: "person-anja-gerber"  # ← Verbindung!
    role: "Co-Chair 1"
---
```

**Wichtig:** Der `person_ref` muss exakt dem `translation_key` der Person entsprechen!

---