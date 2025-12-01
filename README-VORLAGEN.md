# Wiederverwendbare Jekyll-Vorlagen

Diese Dokumentation beschreibt die universellen Vorlagen für Seitenelemente in NFDI4Objects.

## 1. Page Header (`page-header.html`)

Flexible Überschriften mit Icon/Bild, Titel, Untertitel und Text.

### Parameter:

| Parameter | Typ | Pflicht | Beschreibung |
|-----------|-----|---------|--------------|
| `icon` | String | Nein | Pfad zum Icon/SVG |
| `image` | String | Nein | Pfad zu größerem Bild (Alternative zu icon) |
| `icon_class` | String | Nein | CSS-Klasse für Icon/Bild (z.B. "text-icon") - funktioniert für `icon` UND `image` |
| `title` | String | Nein | Hauptüberschrift |
| `title_tag` | String | Nein | HTML-Tag (h1, h2, h3, default: "h1") |
| `subtitle` | String | Nein | Untertitel/Lead-Text |
| `text` | String | Nein | Beschreibungstext (Markdown) |
| `align` | String | Nein | Ausrichtung: "left", "center", "right" (default: "center") |

### Beispiele:

```liquid
{% comment %} Einfache Überschrift mit Icon {% endcomment %}
{% include page-header.html
   icon="/assets/icons/dienste.svg"
   title="Unsere Services"
   text="Hier finden Sie alle Angebote"
%}

{% comment %} Mit Untertitel {% endcomment %}
{% include page-header.html
   icon="/assets/icons/trails.svg"
   title="TRAILS"
   subtitle="Task Related Activities for Implementation and Launch of Services"
   text="Pilotprojekte für innovative Lösungen"
%}

{% comment %} Linksbündig ohne Icon {% endcomment %}
{% include page-header.html
   title="Technische Infrastruktur"
   text="NFDI4Objects entwickelt verschiedene Infrastrukturdienste"
   align="left"
%}
```

---

## 2. Service Cards (`teaser-cards.html`)

Universelle Kachel-Vorlage für flexible Grid-Layouts.

### Parameter:

| Parameter | Typ | Pflicht | Beschreibung |
|-----------|-----|---------|--------------|
| `cards` | Array | Ja | Array von Kachel-Objekten (siehe unten) |
| `columns` | Integer | Nein | Spaltenanzahl 1-12 (default: 3) |
| `bg_color` | String | Nein | Hintergrundfarbe (default: "bg-sand") |
| `text_align` | String | Nein | Textausrichtung (default: "text-center") |

### Kachel-Objekt (cards):

| Feld | Typ | Pflicht | Beschreibung |
|------|-----|---------|--------------|
| `title` | String | Ja | Überschrift |
| `url` | String | Nein | Link-Ziel (macht Überschrift klickbar) |
| `icon` | String | Nein | Pfad zu Icon/SVG |
| `image` | String | Nein | Pfad zu größerem Bild |
| `description` | String | Nein | Beschreibungstext (HTML erlaubt) |
| `bg_color` | String | Nein | Individuelle Farbe (überschreibt global) |
| `button_text` | String | Nein | Button-Text |
| `button_url` | String | Nein | Button-Link |
| `button_style` | String | Nein | "primary", "secondary", "outline" (default: "primary") |

### Verfügbare Farben:

- `bg-white` - Weiß
- `bg-sand-light` - Helles Sand
- `bg-sand` - Sand (Standard)
- `bg-sand-dark` - Dunkles Sand
- `bg-beige-light` - Helles Beige
- `bg-beige` - Beige
- `bg-beige-dark` - Dunkles Beige

### Beispiele:

```yaml
---
# Einfache 3-spaltige Kacheln
cards:
  - title: "Service 1"
    icon: "/assets/icons/service1.svg"
    url: "/services/service1/"
    description: "Beschreibung des Services"
  - title: "Service 2"
    icon: "/assets/icons/service2.svg"
    url: "/services/service2/"
    description: "Ein weiterer Service"
---
{% include teaser-cards.html cards=page.cards columns=3 %}
```

```yaml
---
# Mit unterschiedlichen Farben
cards:
  - title: "Service 1"
    icon: "/assets/icons/service1.svg"
    bg_color: "bg-sand-light"
    description: "Helle Kachel"
  - title: "Service 2"
    icon: "/assets/icons/service2.svg"
    bg_color: "bg-beige"
    description: "Beige Kachel"
---
{% include teaser-cards.html cards=page.cards columns=2 bg_color="bg-white" %}
```

```yaml
---
# Mit Buttons
cards:
  - title: "Service 1"
    description: "Beschreibung"
    button_text: "Mehr erfahren"
    button_url: "/services/service1/"
    button_style: "primary"
---
{% include teaser-cards.html cards=page.cards columns=3 text_align="text-left" %}
```

---

## 3. Kombinierte Verwendung

Die Vorlagen können frei kombiniert werden:

```liquid
<section class="bg-sand-light-img">
    {% include page-header.html
       icon="/assets/icons/portal/Dienste.svg"
       title="Entwickeln / Integrieren"
       subtitle="APIs, Bibliotheken und Entwicklertools"
    %}

    {% include teaser-cards.html
       cards=page.cards
       columns=2
       bg_color="bg-sand"
    %}
</section>
```

---

## Best Practices

1. **Konsistenz**: Verwende die gleichen Farben und Spaltenanzahlen für ähnliche Bereiche
2. **Icons**: Halte Icon-Größen konsistent (empfohlen: SVG-Dateien)
3. **Beschreibungen**: Halte Texte kurz und prägnant
4. **Accessibility**: Stelle sicher, dass alle Bilder aussagekräftige Alt-Texte haben
5. **Markdown**: Der `text` Parameter in page-header.html unterstützt Markdown für Formatierung

---

## Vollständiges Beispiel

```yaml
---
layout: page
title: "Technische Infrastruktur"
lang: de
translation_key: infrastructure
permalink: /services/development/infrastruktur/
cards:
  - title: "TRAILS"
    icon: "/assets/icons/dienste/Dienste-Icons-04.svg"
    url: "/services/development/infrastruktur/trails/"
    description: "Technische Pilotprojekte"
  - title: "Metadata API"
    icon: "/assets/icons/dienste/Dienste-Icons-01.svg"
    url: "/services/development/infrastruktur/metadata-api/"
    description: "Programmierschnittstelle"
  - title: "SPARQL"
    icon: "/assets/icons/dienste/Dienste-Icons-02.svg"
    url: "/services/development/infrastruktur/sparql/"
    description: "Abfragesprache"
---
<section class="bg-sand-light-img">
    {% include page-header.html
       icon="/assets/icons/portal/Dienste.svg"
       title="Technische Infrastruktur"
       text="NFDI4Objects entwickelt verschiedene Infrastrukturdienste"
    %}

    {% include teaser-cards.html
       cards=page.cards
       columns=3
       bg_color="bg-sand"
    %}
</section>
```
