# Dokumentation: News & Events

Diese Dokumentation erklärt, wie News-Beiträge und Veranstaltungen im NFDI4Objects-System angelegt und verwaltet werden.

---

##  News-Beiträge

### Speicherort

News-Beiträge werden im Ordner `_news/` gespeichert:
- **Deutsch**: `_news/de/`
- **Englisch**: `_news/en/`

### Dateiname

Format: `YYYY-MM-DD-titel-des-beitrags.md`

**Beispiel**: `2025-01-20-neue-entwicklungen.md`

### Frontmatter (Kopfbereich)

```yaml
---
layout: news
title: "Titel des News-Beitrags"
date: 2025-01-20
lang: de
excerpt: "Kurze Zusammenfassung des Beitrags (ca. 1-2 Sätze)"
translation_key: "eindeutiger-schluessel"  # Für Sprachverknüpfung

# Optional: Teaser-Bild
teaser_image: "/assets/images/news/bildname.jpg"
teaser_image_alt: "Alternativtext für Barrierefreiheit"
teaser_image_srcset: "/assets/images/news/bildname@2x.jpg 2x, /assets/images/news/bildname.jpg 1x"

# Optional: Taxonomie-Zuordnungen
areas:
  - ta1
  - ta2
ccs:
  - cc2-data-capture-creation
twgs:
  - lab-standards
---
```

### Mehrsprachigkeit

Für einen zweisprachigen News-Beitrag:

1. **Deutsche Version**: `_news/de/2025-01-20-neue-entwicklungen.md`
2. **Englische Version**: `_news/en/2025-01-20-new-developments.md`

**Wichtig**: Beide Dateien müssen den **gleichen** `translation_key` haben!

```yaml
# Deutsch
translation_key: "news-entwicklungen-2025"

# Englisch
translation_key: "news-entwicklungen-2025"
```

### Taxonomie-Zuordnungen

News-Beiträge können optional folgenden Bereichen zugeordnet werden:

#### Task Areas
```yaml
areas:
  - ta1  # Task Area 1 – Documentation
  - ta2  # Task Area 2 – Community Building
  - ta3  # Task Area 3 – Analytics
  # usw.
```

#### Community Clusters
```yaml
ccs:
  - cc2-data-capture-creation
  - cc-25-experimentelle-archaeologie
```

#### Temporäre Arbeitsgruppen (TWGs)
```yaml
twgs:
  - lab-standards
  - kommunikation-konzept
```

Diese Zuordnungen werden **automatisch** am Ende des News-Beitrags als anklickbare Badges angezeigt.

### Beispiel komplett

```yaml
---
layout: news
title: "Neue Standards für Labordaten"
date: 2025-01-20
lang: de
excerpt: "Die TWG Lab Standards hat neue Empfehlungen für die Dokumentation von Laboranalysen veröffentlicht."
translation_key: "news-lab-standards-2025"

teaser_image: "/assets/images/news/labor.jpg"
teaser_image_alt: "Labor mit Mikroskopen"

areas:
  - ta3
ccs:
  - cc2-data-capture-creation
twgs:
  - lab-standards
---

## Neue Empfehlungen veröffentlicht

Die Temporäre Arbeitsgruppe "Lab Standards" hat heute ihre neuen Empfehlungen für die standardisierte Dokumentation von Laboranalysen veröffentlicht.

## Details

Die Empfehlungen umfassen:
- Metadaten für Instrumentenparameter
- Kontrollierte Vokabulare
- Best Practices für die Langzeitarchivierung

[Mehr Informationen](https://example.com)
```

---

##  Veranstaltungen (Events)

### Speicherort

Veranstaltungen werden im Ordner `_events/` gespeichert:
- **Deutsch**: `_events/de/`
- **Englisch**: `_events/en/`

### Dateiname

Format: `YYYY-MM-DD-titel-der-veranstaltung.md`

**Beispiel**: `2025-03-15-workshop-datenmanagement.md`

### Frontmatter (Kopfbereich)

```yaml
---
layout: event
title: "Workshop: Forschungsdatenmanagement"
lang: de
translation_key: "event-workshop-fdm"

# Event-spezifische Felder
event_date: 2025-03-15
event_end_date: 2025-03-16  # Optional bei mehrtägigen Events
location: "Berlin, Deutsches Archäologisches Institut"
event_type: "Workshop"  # z.B. Workshop, Konferenz, Webinar
registration_url: "https://..."  # Optional: Link zur Anmeldung

# Teaser
excerpt: "Zweitägiger Workshop zu Best Practices im Forschungsdatenmanagement."

# Optional: Teaser-Bild
teaser_image: "/assets/images/events/workshop.jpg"
teaser_image_alt: "Workshop-Teilnehmer"

# Optional: Taxonomie-Zuordnungen (wie bei News)
areas:
  - ta1
  - ta3
ccs:
  - cc2-data-capture-creation
twgs:
  - lab-standards
---
```

### Event-spezifische Felder

| Feld | Pflicht | Beschreibung | Beispiel |
|------|---------|--------------|----------|
| `event_date` | Ja | Startdatum | `2025-03-15` |
| `event_end_date` | Nein | Enddatum bei mehrtägigen Events | `2025-03-16` |
| `location` | Empfohlen | Veranstaltungsort | `"Berlin, DAI"` |
| `event_type` | Empfohlen | Art der Veranstaltung | `"Workshop"` |
| `registration_url` | Nein | Link zur Anmeldung | `"https://..."` |

### Anmeldungsbutton

Wenn `registration_url` angegeben ist, wird automatisch ein Button "Anmeldung / Weitere Informationen" auf der Event-Detailseite angezeigt.

### Beispiel komplett

```yaml
---
layout: event
title: "Workshop: Forschungsdatenmanagement in der Archäologie"
lang: de
translation_key: "event-workshop-fdm-2025"

event_date: 2025-03-15
event_end_date: 2025-03-16
location: "Berlin, Deutsches Archäologisches Institut"
event_type: "Workshop"
registration_url: "https://www.nfdi4objects.net/registration/workshop-fdm"

excerpt: "Zweitägiger Workshop zu Best Practices im Forschungsdatenmanagement."

teaser_image: "/assets/images/events/workshop-fdm.jpg"
teaser_image_alt: "Workshop-Raum mit Teilnehmern"

areas:
  - ta1
  - ta3
ccs:
  - cc2-data-capture-creation
twgs:
  - lab-standards
---

## Über den Workshop

Dieser Workshop richtet sich an Forschende aus der Archäologie...

## Programm

### Tag 1
- 09:00 Begrüßung
- 10:00 Session 1: Datenerfassung
...

## Anmeldung

Die Teilnehmerzahl ist begrenzt. Anmeldeschluss: 1. März 2025.
```

---

##  Übersichtsseiten

### News-Übersicht

Die News-Übersichtsseite wird automatisch generiert:

- **Deutsch**: `/news/`
- **Englisch**: `/en/news/`

**Datei**: `_pages/news/index.md`

### Events-Übersicht

Die Events-Übersichtsseite wird automatisch generiert:

- **Deutsch**: `/community/events/`
- **Englisch**: `/en/community/events/`

**Datei**: `_pages/community/events/index.md`

---

##  Automatische Features

### 1. Breadcrumb-Navigation

Auf allen News- und Event-Seiten wird automatisch eine Breadcrumb angezeigt:

**News**: `Startseite > Aktuelles > [News-Titel]`
**Events**: `Startseite > Community > Veranstaltungen > [Event-Titel]`

### 2. Prev/Next Navigation

Am Ende jeder News-/Event-Detailseite erscheinen automatisch Links zum vorherigen/nächsten Beitrag:

- **Nur für die gleiche Sprache**
- Nur angezeigt, wenn vorheriger/nächster Beitrag existiert
- News: chronologisch nach Datum
- Events: chronologisch nach Event-Datum (neueste zuerst)

### 3. Sprachwechsler

Der Sprachwechsler im Header funktioniert automatisch, wenn:
- Beide Sprachversionen den **gleichen** `translation_key` haben
- Beide Sprachversionen existieren

### 4. Taxonomie-Badges

Wenn `areas`, `ccs` oder `twgs` im Frontmatter angegeben sind, werden am Ende der Detailseite automatisch anklickbare Badges mit Links zu den entsprechenden Bereichen angezeigt.

---


##  Teaser-Bilder Best Practices

### Bildgrößen

Für optimale Performance sollten Bilder in zwei Größen bereitgestellt werden:

- **Standard**: `bildname.jpg` (max. 600px Breite)
- **Retina**: `bildname@2x.jpg` (max. 1200px Breite)

### Srcset-Beispiel

```yaml
teaser_image: "/assets/images/news/workshop.jpg"
teaser_image_srcset: "/assets/images/news/workshop@2x.jpg 2x, /assets/images/news/workshop.jpg 1x"
teaser_image_sizes: "(min-width: 768px) 600px, 100vw"
```

### Barrierefreiheit

**Immer** einen aussagekräftigen Alt-Text angeben:

```yaml
teaser_image_alt: "Teilnehmer bei einem Workshop zur Datenerfassung"
```

---

##  Checkliste: Neuer Beitrag

- [ ] Datei im richtigen Ordner erstellt (`_news/de/` oder `_events/de/`)
- [ ] Dateiname im Format `YYYY-MM-DD-titel.md`
- [ ] Layout korrekt (`layout: news` oder `layout: event`)
- [ ] `lang` gesetzt (`de` oder `en`)
- [ ] `translation_key` eindeutig und in beiden Sprachversionen identisch
- [ ] `excerpt` für Vorschau vorhanden
- [ ] Event: `event_date` gesetzt
- [ ] Optional: Teaser-Bild mit Alt-Text
- [ ] Optional: Taxonomie-Zuordnungen (`areas`, `ccs`, `twgs`)
- [ ] Inhalt in Markdown geschrieben
- [ ] Englische Version mit gleichem `translation_key` erstellt

---