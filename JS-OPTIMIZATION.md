# JavaScript-Optimierung für NFDI4Objects

## Implementierung

Das Projekt verwendet eine **manuelle JavaScript-Bundling-Lösung** ohne externe Ruby-Gems:

### 1. Core-Bundle (Navigation + Accessibility)

Die Dateien `navigation.js` und `accessibility.js` werden automatisch zu einer einzigen Datei zusammengeführt:

- **Quelle**: [`assets/js/core.js`](assets/js/core.js)
- **Methode**: Jekyll Liquid `{% include_relative %}`
- **Ergebnis**: Eine kombinierte Datei wird bei jedem Jekyll-Build generiert

### 2. Search-Script (separat)

Die Suchfunktion bleibt separat, da sie:
- Nur auf Such-Seiten benötigt wird
- Eine externe Abhängigkeit (lunr.js) hat
- Mit `defer` bereits lazy-loaded wird

### 3. Minifizierung (optional)

Für Production-Builds steht ein npm-basiertes Minifier-Tool bereit:

```bash
# Node.js Abhängigkeiten installieren
npm install

# Nur Core-Bundle minifizieren
npm run minify

# Nur Search minifizieren
npm run minify-search

# Alles minifizieren
npm run minify-all

# Kompletter Build mit Minifizierung
npm run build
```

## Struktur

```
assets/js/
├── core.js           # Bundle-Datei (kombiniert navigation + accessibility)
├── navigation.js     # Navigation, Mobile Menu, Search Toggle
├── accessibility.js  # ESC-Taste, Smooth-Scroll, Lazy-Loading, Hero-Bilder
└── search.js        # Lunr-basierte Volltextsuche (separat)
```

## Deployment

### Ohne Minifizierung (einfachste Lösung)
```bash
bundle exec jekyll build
```

### Mit Minifizierung (empfohlen für Production)
```bash
npm run build
```

Die minifizierten Dateien befinden sich dann in `_site/assets/js/`.


## Wartung

Wenn Sie  neue JavaScript-Funktionen hinzufügen möchten:

- **Globale Features** (auf jeder Seite): Zu `navigation.js` oder `accessibility.js` hinzufügen
- **Seiten-spezifische Features**: Separate Datei erstellen und nur auf relevanten Seiten laden
