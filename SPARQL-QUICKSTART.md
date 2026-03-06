# SPARQL Knowledge Graph - Quickstart

##  Was wurde implementiert?

Ein vollständig **clientseitiger SPARQL-Endpoint** für den NFDI4Objects Knowledge Graph:

**Jekyll-Plugin** aggregiert automatisch alle TTL-Dateien zu `nfdi4objects.ttl`
**Interaktives SPARQL-Interface** auf `/services/sparql/` (Deutsch & Englisch)
**7 Beispiel-Queries** für häufige Anwendungsfälle
**Download-Link** zur vollständigen TTL-Datei
**Browser-basiert** - keine Server-Infrastruktur nötig

## Neue/Geänderte Dateien

### Erstellt:
- `_plugins/aggregate_ttl.rb` - Aggregiert alle TTL-Dateien
- `_includes/sparql-interface.html` - SPARQL-UI-Komponente (YASGUI + Comunica)
- `_data/sparql-examples-de.yml` - Deutsche Beispiel-Queries
- `_data/sparql-examples-en.yml` - Englische Beispiel-Queries
- `SPARQL-IMPLEMENTATION.md` - Ausführliche Dokumentation
- `SPARQL-QUICKSTART.md` - Diese Datei

### Aktualisiert:
- `_pages/services/sparql.md` - Deutsche SPARQL-Seite mit Interface
- `_pages/en/services/sparql.md` - Englische SPARQL-Seite mit Interface

##  Testen

```bash
# 1. Jekyll-Build durchführen
jekyll build

# 2. Prüfen ob TTL generiert wurde
ls -lh _site/nfdi4objects.ttl

# 3. Lokalen Server starten
jekyll serve

# 4. Im Browser öffnen
# http://localhost:4000/nfdi4o-relaunch/services/sparql/
```

##  Was Sie sehen sollten

1. **SPARQL-Seite** mit vollständiger Erklärung
2. **YASGUI-Editor** mit vordefinierter Query
3. **7 Beispiel-Queries** als klickbare Buttons
4. **Download-Link** zur TTL-Datei

##  Beispiel-Query ausprobieren

Klicken Sie auf "Alle Personen auflisten" und führen Sie die Query aus:

```sparql
PREFIX foaf: <http://xmlns.com/foaf/0.1/>
PREFIX nfdicore: <https://nfdi.fiz-karlsruhe.de/ontology#>

SELECT ?person ?name WHERE {
  ?person a nfdicore:Person ;
          foaf:name ?name .
}
ORDER BY ?name
```

##  Wie es funktioniert

1. **Build-Zeit:** Jekyll generiert individuelle TTL-Dateien für jede Entität
2. **Post-Build:** Plugin sammelt alle TTL-Dateien und erstellt `nfdi4objects.ttl`
3. **Laufzeit:** Browser lädt TTL-Datei via Comunica und führt SPARQL-Queries aus

##  Deployment

### GitHub Pages mit Actions

**Wichtig:** Das Plugin funktioniert nur mit GitHub Actions, nicht mit automatischem GitHub Pages Build!

Benötigte Workflow-Datei (`.github/workflows/deploy.yml`):

```yaml
name: Deploy Jekyll site

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true

      - name: Build with Jekyll
        run: bundle exec jekyll build
        env:
          JEKYLL_ENV: production

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```



##  Aktuelle Statistik

Nach dem Build:
- **23 TTL-Dateien** gefunden
- **~12 KB** aggregierte TTL-Datei
- **7 Beispiel-Queries** verfügbar

## 🔗 Nützliche Links

- **SPARQL-Seite (DE):** `/services/sparql/`
- **SPARQL-Seite (EN):** `/en/services/sparql/`
- **TTL-Download:** `/nfdi4objects.ttl`
- **Knowledge Graph Service:** `/services/nfdi4objects-graph/`

## Probleme?

**TTL-Datei fehlt nach Build:**
```bash
# Prüfen Sie die Build-Logs
jekyll build --trace | grep "N4O TTL"
```

