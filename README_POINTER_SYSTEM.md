# POINTER-SYSTEM für TTL-Metadaten

Das TTL-System wurde als ein **Pointer-System** entwickelt, das **Redundanz vermeidet** und den **Redaktionsaufwand reduziert**.

---


### **Pointer-System**

Redakteure pflegen **nur die Markdown-Datei**. Die TTL-Datei ist  ein minimaler "Pointer":

```yaml
# Datei 1: _persons/de/alexandra-busch.md
---
layout: person
translation_key: person-alexandra-busch
title: Alexandra Busch
position: Position
orcid: 0000-0002-7248-2227
groups: [coordination, steering]
institution: leiza
areas: [ta2]
---
Content...
```

```yaml
# Datei 2: _ttl/persons/alexandra-busch.ttl (NUR 4 Zeilen!)
---
layout: person-ttl
permalink: /persons/alexandra-busch/index.ttl
source: person-alexandra-busch  # ← Verweis auf MD-Datei
---
```

**Vorteil:**
-  **Keine Redundanz** 
-  **Keine Inkonsistenzen** möglich
-  Daten werden **nur 1× gepflegt**
-  TTL-Datei bleibt **trivial**

---

## Wie funktioniert es?

### 1. **Markdown-Datei pflegen** (wie gewohnt)

```yaml
# _persons/de/max-mustermann.md
---
layout: person
lang: de
translation_key: person-max-mustermann
title: Max Mustermann
position: Archäologe
orcid: 0000-0002-1234-5678
groups:
  - steering
institution: dai
areas:
  - ta1
---
Max Mustermann ist...
```

### 2. **Pointer-TTL erstellen** 

```yaml
# _ttl/persons/max-mustermann.ttl
---
layout: person-ttl
permalink: /persons/max-mustermann/index.ttl
source: person-max-mustermann  # ← Verweis
---
```

### 3. **Jekyll generiert TTL automatisch**

Beim Build liest das Layout die Daten aus der MD-Datei und generiert:

```turtle
# /persons/max-mustermann/index.ttl
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix n4o: <https://nfdi4objects.net/ontology#> .

<https://nfdi4objects.net/persons/max_mustermann/max_mustermann>
    a nfdicore:Person ;
    foaf:name "Max Mustermann" ;
    foaf:givenName "Max" ;
    foaf:familyName "Mustermann" ;
    n4o:orcidId "0000-0002-1234-5678" ;
    n4o:position "Archäologe" ;
    n4o:affiliation "dai" ;
    n4o:memberOf "steering" ;
    n4o:worksIn <https://nfdi4objects.net/areas/ta1/ta1> .
```

---

## Für welche Inhaltstypen?

Das Pointer-System gilt für **alle** TTL-Dateien:

| Inhaltstyp | Pointer-Layout | MD-Collection |
|------------|----------------|---------------|
| **Personen** | `person-ttl` | `_persons/` |
| **Trails** | `trail-ttl` | `_trails/` |
| **TWGs** | `twg-ttl` | `_twgs/` |
| **Community Clusters** | `cc-ttl` | `_ccs/` |
| **Services** | `service-ttl` | `_services/` |
| **Task Areas** | `ta-ttl` | `_areas/` |

---

## Organisations-Gruppen TTLs

Zusätzlich wurden **automatisch aggregierende** TTLs für Übersichtsseiten erstellt:

### Beispiel: Steering Committee

```yaml
# _ttl/organisation/steering.ttl
---
layout: organisation-group-ttl
permalink: /about/organisation/steering/index.ttl
group: steering
title_de: "Lenkungsausschuss"
title_en: "Steering Committee"
---
```

**Das Layout sammelt automatisch** alle Personen mit `groups: [steering]` und generiert:

```turtle
<https://nfdi4objects.net/organisation/steering>
    a n4o:OrganizationalUnit ;
    rdfs:label "Lenkungsausschuss"@de ;
    rdfs:label "Steering Committee"@en ;
    foaf:member <https://nfdi4objects.net/persons/alexandra_busch/alexandra_busch> ;
    foaf:member <https://nfdi4objects.net/persons/...> ;
    n4o:memberCount 5 .
```

### Verfügbare Organisations-TTLs

| Seite | TTL-Datei | Gruppe |
|-------|-----------|--------|
| Steering Committee | `_ttl/organisation/steering.ttl` | `steering` |
| Advisory Board | `_ttl/organisation/advisory.ttl` | `advisory_board` |
| Coordination Office | `_ttl/organisation/coordination.ttl` | `coordination` |
| Consortium Members | `_ttl/organisation/members.ttl` | `co_applicants` |
| All Persons | `_ttl/organisation/persons.ttl` | `all` |

---

## Workflow für Redakteure

### Neue Person anlegen

**Schritt 1:** Markdown-Datei erstellen
```bash
cp _persons/de/VORLAGE.md _persons/de/vorname-nachname.md
# Datei ausfüllen
```

**Schritt 2:** Pointer-TTL erstellen
```bash
cp _ttl/VORLAGE_person.ttl _ttl/persons/vorname-nachname.ttl
# Nur 'permalink' und 'source' anpassen!
```

**Ergebnis:** Beim Build werden beide Dateien verarbeitet:
- HTML: `/persons/vorname-nachname/`
- TTL: `/persons/vorname-nachname/index.ttl`





## Technische Details

- Kompatibel mit GitLab Pages (kein Plugin)
- Saubere Trennung: Daten (MD) → Pointer (TTL) → Output (RDF)

### Layouts mit Pointer-Unterstützung

Alle TTL-Layouts unterstützen Pointer:

- [`_layouts/person-ttl.html`](../_layouts/person-ttl.html)
- [`_layouts/trail-ttl.html`](../_layouts/trail-ttl.html)
- [`_layouts/twg-ttl.html`](../_layouts/twg-ttl.html)
- [`_layouts/cc-ttl.html`](../_layouts/cc-ttl.html)
- [`_layouts/service-ttl.html`](../_layouts/service-ttl.html)
- [`_layouts/ta-ttl.html`](../_layouts/ta-ttl.html)

###  Layout für Gruppen

- [`_layouts/organisation-group-ttl.html`](../_layouts/organisation-group-ttl.html)

### Code-Beispiel (person-ttl.html)

```liquid
{%- if page.source -%}
  {%- comment -%}Pointer-Modus: Lade aus MD-Datei{%- endcomment -%}
  {%- assign person = site.persons | where: "translation_key", page.source | first -%}
{%- else -%}
  {%- comment -%}Legacy-Modus: Nutze page direkt{%- endcomment -%}
  {%- assign person = page -%}
{%- endif -%}

<https://nfdi4objects.net/persons/{{ person_id }}/{{ person_id }}>
    foaf:name "{{ person.title }}" ;
    n4o:orcidId "{{ person.orcid }}" ;
    ...
```

---


