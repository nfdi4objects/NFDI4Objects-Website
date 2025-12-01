# SEO-Anleitung für Redakteure

Diese Anleitung erklärt, wie Sie SEO-relevante Inhalte in Jekyll-Seiten und -Beiträgen optimal einpflegen.

## 1. Basis-SEO im Front Matter

### Minimale Angaben (erforderlich)

```yaml
---
title: "Ihr Seitentitel"
description: "Eine prägnante Beschreibung der Seite (155-160 Zeichen empfohlen)"
---
```

### Empfohlene vollständige Angaben

```yaml
---
title: "Forschungsdatenmanagement für Objektwissenschaften"
description: "Erfahren Sie, wie NFDI4Objects Forschende bei der Verwaltung und Veröffentlichung von Daten zu materiellen Objekten unterstützt."
keywords: "Forschungsdaten, NFDI, Objektwissenschaften, Datenmanagement"
author: "Dr. Martina Trognitz"
date: 2025-01-15
date_modified: 2025-01-20
lang: de
translation_key: unique-key-123

# Optional: Social Media
og_image: /assets/images/mein-beitragsbild.jpg
twitter_card: summary_large_image

# Optional: Erweiterte Einstellungen
robots: "index, follow"
canonical_url: ""  # Nur falls abweichend
schema_type: "Article"  # oder "WebPage", "Person"
---
```

## 2. Feld-Erklärungen

### Pflichtfelder

| Feld | Beschreibung | Beispiel |
|------|-------------|----------|
| `title` | Titel der Seite (max. 60 Zeichen) | "Workshop: Forschungsdatenmanagement" |
| `description` | Meta-Beschreibung für Suchmaschinen (155-160 Zeichen) | "Unser Workshop vermittelt Grundlagen des Forschungsdatenmanagements für Archäologen und Museumsfachleute." |

### Empfohlene Felder

| Feld | Beschreibung | Beispiel |
|------|-------------|----------|
| `keywords` | Komma-getrennte Schlüsselwörter | "Forschungsdaten, Workshop, Archäologie" |
| `author` | Name des Autors | "Dr. Sophie Schmidt" |
| `date` | Erstellungsdatum | 2025-01-15 |
| `date_modified` | Letzte Änderung | 2025-01-20 |
| `og_image` | Bild für Social Media (1200x630px empfohlen) | /assets/images/workshop-2025.jpg |

### Optionale Felder

| Feld | Beschreibung | Werte |
|------|-------------|-------|
| `robots` | Suchmaschinen-Anweisungen | "index, follow" (Standard)<br>"noindex, nofollow" (nicht indexieren) |
| `twitter_card` | Twitter Card Typ | "summary" oder "summary_large_image" |
| `schema_type` | Art der strukturierten Daten | "Article", "WebPage", "Person", "NewsArticle" |

## 3. Best Practices

### Title-Tag
- **Länge:** 50-60 Zeichen
- **Format:** "Hauptkeyword - Nebenkeyword | NFDI4Objects"
- **Beispiel:** "Forschungsdatenmanagement - Workshop | NFDI4Objects"

### Meta Description
- **Länge:** 155-160 Zeichen
- **Inhalt:** Klare, handlungsauffordernde Beschreibung
- **Beispiel:** "Erfahren Sie, wie Sie Forschungsdaten effizient verwalten. Unser Workshop bietet praxisnahe Tipps für Archäologen. Jetzt anmelden!"

### Keywords
- **Anzahl:** 5-10 relevante Keywords
- **Format:** Komma-getrennt, keine Hashtags
- **Beispiel:** "Forschungsdatenmanagement, FAIR-Prinzipien, Archäologie, Workshop, Weiterbildung"
- **Hinweis:** Moderne Suchmaschinen nutzen dieses Feld kaum noch, aber es schadet nicht.

### Social Media Bilder (og_image)
- **Format:** JPG oder PNG
- **Größe:** 1200 x 630 Pixel (optimale Größe für Facebook/LinkedIn)
- **Ort:** Speichern Sie Bilder in `/assets/images/`
- **Beispiel:** `og_image: /assets/images/news/workshop-2025-og.jpg`

## 4. Beispiele für verschiedene Content-Typen

### News-Beitrag

```yaml
---
layout: news
title: "Neuer Workshop: Forschungsdatenmanagement"
description: "Am 15. März 2025 findet unser Workshop zum Thema Forschungsdatenmanagement statt. Für Anfänger und Fortgeschrittene."
keywords: "Workshop, FDM, Forschungsdatenmanagement, NFDI4Objects, Weiterbildung"
author: "Dr. Florian Thiery"
date: 2025-01-15
lang: de
translation_key: "workshop-fdm-2025"
excerpt: "Unser nächster Workshop findet am 15. März statt."
og_image: /assets/images/news/workshop-fdm-2025.jpg
schema_type: "NewsArticle"
---
```

### Person-Seite

```yaml
---
layout: person
title: "Dr. Sophie Schmidt"
description: "Dr. Sophie Schmidt ist wissenschaftliche Mitarbeiterin bei NFDI4Objects und spezialisiert auf Datenmanagement in der Archäologie."
keywords: "Sophie Schmidt, Archäologie, Datenmanagement, NFDI4Objects"
email: "schmidt@nfdi4objects.de"
affiliation: "NFDI4Objects"
og_image: /assets/images/persons/sophie-schmidt.jpg
schema_type: "Person"
lang: de
---
```

### Standard-Seite

```yaml
---
layout: page
title: "Über uns"
description: "NFDI4Objects ist die Forschungsdateninfrastruktur für materielle Objekte in Deutschland. Erfahren Sie mehr über unsere Mission."
keywords: "NFDI4Objects, Forschungsdateninfrastruktur, Objektwissenschaften, über uns"
lang: de
translation_key: "about"
og_image: /assets/images/about-og.jpg
schema_type: "WebPage"
---
```

## 5. Automatische Fallbacks

Falls Sie einzelne Felder nicht ausfüllen, greift das System auf Standardwerte zurück:

- **Keine `description`?** → System nutzt `excerpt` oder Site-Description aus `_config.yml`
- **Kein `og_image`?** → System nutzt Standard-Bild aus `_config.yml`
- **Kein `author`?** → System nutzt "NFDI4Objects" als Organisation
- **Kein `robots`?** → Standard ist "index, follow"

## 6. Checkliste vor Veröffentlichung

- [ ] Title unter 60 Zeichen?
- [ ] Description zwischen 155-160 Zeichen?
- [ ] Keywords relevant und nicht zu viele?
- [ ] Datum korrekt?
- [ ] Sprache (lang: de/en) gesetzt?
- [ ] translation_key für mehrsprachige Versionen identisch?
- [ ] og_image vorhanden und korrekte Größe?
- [ ] Alle Bilder haben Alt-Texte?

## 7. Tools zur Überprüfung

Nach der Veröffentlichung können Sie Ihre SEO-Optimierung testen:

- **Google Search Console:** https://search.google.com/search-console
- **Meta-Tags Checker:** https://metatags.io/
- **Structured Data Testing Tool:** https://validator.schema.org/
- **PageSpeed Insights:** https://pagespeed.web.dev/

## 8. Mehrsprachigkeit & SEO


```yaml
# Deutsche Version (_pages/about.md)
---
title: "Über uns"
lang: de
translation_key: "about-page"
permalink: /about/
---

# Englische Version (_pages/en/about.md)
---
title: "About us"
lang: en
translation_key: "about-page"
permalink: /en/about/
---
```

Der gleiche `translation_key` verknüpft beide Versionen für hreflang-Tags.

## 9. Häufige Fehler vermeiden

**Fehler - Zu lange Titles:** "Willkommen auf der offiziellen Webseite des NFDI4Objects Projekts für Forschungsdaten..." (wird abgeschnitten)

**Richtig - Optimal:** "NFDI4Objects - Forschungsdaten für Objektwissenschaften"

---

**Fehler - Keyword-Stuffing:** "Forschungsdaten, Daten, Forschung, Datenmanagement, Forschungsdatenmanagement, Daten verwalten..."

**Richtig - Natürlich:** "Forschungsdatenmanagement, FAIR-Prinzipien, Archäologie, digitale Infrastruktur"

---

**Fehler - Keine Description:** Suchmaschinen generieren zufälligen Text aus der Seite

**Richtig - Klare Description:** "NFDI4Objects unterstützt Forschende bei der Verwaltung von Daten zu materiellen Objekten. Entdecken Sie unsere Services und Tools."

## 10. Weitere Ressourcen

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

