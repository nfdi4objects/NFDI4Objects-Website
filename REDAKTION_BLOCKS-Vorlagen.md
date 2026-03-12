# Block Vorlagen - Verwendung
Das ist ein Test.
Dieses Verzeichnis enthält wiederverwendbare Block-Vorlagen für die NFDI4Objects Website.

Alle Blocks werden direkt im Markdown-Content eingebunden und können frei positioniert werden.

## Verfügbare Blocks

- `page-header.html` - Seitenüberschrift mit Icon/Bild und Text
- `image-text-grid.html` - Zweispaltiges Layout mit Bild und Text
- `image-centered.html` - Zentriertes Einzelbild
- `button.html` - Call-to-Action Button

---

## page-header.html

Flexible Seitenüberschrift mit optionalem Icon/Bild, Titel, Untertitel und Text.

**Verwendung:**
```liquid
{% include page-header.html
   icon="/assets/icons/portal/Konsortialmitglieder.svg"
   title="Konsortialmitglieder"
   subtitle="NFDI4Objects als Konsortium der Nationalen Forschungsdateninfrastruktur (NFDI). Durchsuchen Sie die Liste der Einrichtungen, die Mitglied sind oder die Arbeit unterstützen."
%}
```

**Parameter:**
- `icon` - Pfad zum Icon/Bild (optional)
- `image` - Pfad zu größerem Bild (optional, Alternative zu icon)
- `icon_class` - CSS-Klasse für Icon/Bild (optional, z.B. "icon-lg")
- `title` - Hauptüberschrift (optional)
- `title_tag` - HTML-Tag für Titel: h1, h2, h3, etc. (optional, default: "h1")
- `class` - CSS-Klasse für den Titel (optional, fügt automatisch "focus-ring" hinzu)
- `subtitle` - Untertitel (optional)
- `text` - Beschreibungstext, unterstützt Markdown (optional)
- `align` - Ausrichtung: "left", "center", "right" (optional, default: "center")

**Beispiele:**

Einfache Überschrift mit Icon:
```liquid
{% include page-header.html
   icon="/assets/icons/dienste.svg"
   title="Unsere Services"
   text="Hier finden Sie alle Angebote"
%}
```

Linksbündige Überschrift ohne Icon:
```liquid
{% include page-header.html
   title="Technische Infrastruktur"
   text="NFDI4Objects entwickelt verschiedene Infrastrukturdienste"
   align="left"
%}
```

Mit Focus-Ring Effekt:
```liquid
{% include page-header.html
   title="Entwickler"
   class="focus-white"
   subtitle="Welches Angebot können Entwickler bei NFDI4Objects nutzen?"
%}
```

---

## image-text-grid.html

Zweispaltiges Grid-Layout mit Bild und Text, frei positionierbar.

**Verwendung:**
```liquid
{% include blocks/image-text-grid.html
   image="/assets/images/community-cluster.jpg"
   alt="Beschreibender Alt-Text"
   caption="© H. Wendling, Archäologische Staatsammlung"
   text="Community Cluster erleichtern den Wissenstransfer..."
   image_order="1"
   text_order="2"
%}
```

**Parameter:**
- `image` - Pfad zum Bild (erforderlich)
- `alt` - Alt-Text für Barrierefreiheit (optional, default: "")
- `caption` - Bildunterschrift mit Copyright (optional)
- `text` - Textinhalt, unterstützt Markdown (erforderlich)
- `image_order` - Spaltenreihenfolge für Bild (optional, default: "1")
- `text_order` - Spaltenreihenfolge für Text (optional, default: "2")
- `srcset` - Responsive Bildvarianten für Retina-Displays (optional)
- `sizes` - Bildgrößen-Definition (optional, default: "(min-width: 768px) 600px, 100vw")
- `class` - CSS-Klasse für das Bild (optional, default: "img")

**Hinweis:** Mit `image_order` und `text_order` können Sie die Position von Bild und Text tauschen.

**Beispiel mit Retina-Unterstützung:**
```liquid
{% include blocks/image-text-grid.html
   image="/assets/images/community-cluster.jpg"
   srcset="/assets/images/community-cluster@2x.jpg 2x, /assets/images/community-cluster.jpg 1x"
   alt="Beschreibender Alt-Text"
   text="Community Cluster erleichtern den Wissenstransfer..."
%}
```

---

## image-centered.html

Zentriertes Einzelbild mit optionaler Bildunterschrift.

**Verwendung:**
```liquid
{% include blocks/image-centered.html
   image="/assets/images/content/beispiel.jpg"
   alt="Beschreibung des Bildes"
   caption="© Kay Fuhrmann, Museum Oldenburg"
   width="600"
   class="img-center"
%}
```

**Parameter:**
- `image` - Pfad zum Bild (erforderlich)
- `alt` - Alt-Text für Barrierefreiheit (optional, default: "")
- `caption` - Bildunterschrift mit Copyright (optional)
- `width` - Breite in Pixeln (optional)
- `class` - CSS-Klasse für die Figure (optional, default: "img-center")
- `srcset` - Responsive Bildvarianten für Retina-Displays (optional)
- `sizes` - Bildgrößen-Definition (optional, default: "(min-width: 768px) 600px, 100vw")

**Beispiel mit Retina-Unterstützung:**
```liquid
{% include blocks/image-centered.html
   image="/assets/images/content/menschengruppe-treppe.jpg"
   srcset="/assets/images/content/menschengruppe-treppe@2x.jpg 2x, /assets/images/content/menschengruppe-treppe.jpg 1x"
   alt="Menschengruppe auf Treppe"
   width="600"
   class="img-center"
%}
```

---

## button.html

Zentrierter Call-to-Action Button.

**Verwendung:**
```liquid
{% include blocks/button.html
   text="Alle TRAILS ansehen"
   url="/trails/"
   style="primary"
%}
```

**Parameter:**
- `text` - Button-Text (erforderlich)
- `url` - Link-URL (erforderlich)
- `style` - Button-Stil (optional, default: "primary")
  - Optionen: primary, secondary, success, danger, warning, info, light, dark
- `new_window` - Link in neuem Fenster öffnen (optional, default: false)

**Beispiele:**

Externer Link in neuem Fenster:
```liquid
{% include blocks/button.html
   text="Zenodo Antrag S. 61-67"
   url="https://zenodo.org/records/10409228"
   style="primary"
   new_window=true
%}
```

Sekundärer Button:
```liquid
{% include blocks/button.html
   text="Mehr erfahren"
   url="/about/"
   style="secondary"
%}
```

---

## Beispiel: Kombinierte Verwendung in einer Seite

```markdown
---
layout: page
title: "Beispielseite"
---

{% include page-header.html
   icon="/assets/icons/portal/icon.svg"
   title="Hauptüberschrift"
   subtitle="Eine informative Unterüberschrift"
%}

Einleitungstext...

{% include blocks/image-centered.html
   image="/assets/images/header.jpg"
   alt="Headerimage"
   caption="© Bildnachweis"
   width="800"
%}

Weiterer Text...

{% include blocks/image-text-grid.html
   image="/assets/images/detail.jpg"
   alt="Detailansicht"
   caption="© Museum XY"
   text="**Wichtige Information:** Dieser Text kann Markdown enthalten."
   image_order="2"
   text_order="1"
%}

Abschlusstext...

{% include blocks/button.html
   text="Mehr erfahren"
   url="/services/"
   style="primary"
%}
```

---

## Best Practices

1. **Alt-Texte:** Verwenden Sie immer beschreibende Alt-Texte für Barrierefreiheit
2. **Bildrechte:** Geben Sie Copyright-Informationen in der Caption an
3. **Markdown:** Die `text`-Parameter unterstützen Markdown-Formatierung
4. **Responsive:** Alle Blocks sind responsiv und passen sich automatisch an mobile Geräte an
5. **Konsistenz:** Nutzen Sie `page-header.html` für einheitliche Seitenüberschriften
6. **Retina-Bilder:** Verwenden Sie `srcset` für hochauflösende Displays (siehe Abschnitt unten)

---

## Responsive Images mit srcset

Für scharfe Darstellung auf Retina-Displays können alle Bild-Blocks mit `srcset` verwendet werden.

### Namenskonvention für Retina-Bilder

- **1x Bild** (normale Auflösung): `bild.jpg` (600px breit)
- **2x Bild** (Retina): `bild@2x.jpg` (1200px breit)

### Verwendungsbeispiele

**Minimale Angabe (ohne Retina):**
```liquid
{% include blocks/image-centered.html
   image="/assets/images/beispiel.jpg"
   alt="Bildbeschreibung"
%}
```

**Mit Retina-Unterstützung:**
```liquid
{% include blocks/image-centered.html
   image="/assets/images/beispiel.jpg"
   srcset="/assets/images/beispiel@2x.jpg 2x, /assets/images/beispiel.jpg 1x"
   alt="Bildbeschreibung"
%}
```

**Mit Custom sizes:**
```liquid
{% include blocks/image-centered.html
   image="/assets/images/beispiel.jpg"
   srcset="/assets/images/beispiel@2x.jpg 2x, /assets/images/beispiel.jpg 1x"
   sizes="(min-width: 1024px) 800px, 100vw"
   alt="Bildbeschreibung"
%}
```

### Wie funktioniert srcset?

Der Browser wählt automatisch das passende Bild basierend auf:
- **Display-Auflösung**: Normale Displays laden 1x Bilder, Retina-Displays laden 2x Bilder
- **Viewport-Größe**: Über `sizes` kann gesteuert werden, welche Bildgröße für welchen Viewport geladen wird
- **Standard-Wert**: Wenn `sizes` nicht angegeben wird, verwendet das System `(min-width: 768px) 600px, 100vw`

### Wann sollte srcset verwendet werden?

 **Verwenden Sie srcset wenn:**
- Das Bild auf Retina-Displays scharf dargestellt werden soll
- Sie bereit sind, 2 Bildvarianten zu pflegen (1x und 2x)
- Bildqualität wichtiger ist als Dateigröße

 **Verzichten Sie auf srcset wenn:**
- Das Bild nur dekorativ ist und Schärfe nicht kritisch ist
- Sie nur eine Bildversion pflegen möchten
- Bandbreite kritischer ist als Bildqualität
