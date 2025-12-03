# SPARQL Knowledge Graph Implementation

Diese Dokumentation beschreibt die SPARQL-Integration für den NFDI4Objects Knowledge Graph.

## Übersicht

Die Implementation ermöglicht es, alle strukturierten Daten der Website über ein interaktives SPARQL-Interface abzufragen. Die Lösung ist vollständig clientseitig und benötigt keine Backend-Infrastruktur.

## Architektur

### 1. TTL-Generierung (Jekyll-Templates)

Jede Entität auf der Website (Personen, Projekte, Services, etc.) hat:
- Eine Markdown-Datei mit den Daten (z.B. `_persons/de/florian-thiery.md`)
- Eine TTL-Pointer-Datei (z.B. `_ttl/persons/florian-thiery.ttl`)
- Ein Layout-Template, das die TTL generiert (z.B. `_layouts/person-ttl.html`)

**Beispiel:** Eine Person wird in RDF/TTL mit FOAF und NFDI-Ontologien beschrieben.

### 2. TTL-Aggregation (Jekyll-Plugin)

**Datei:** `_plugins/aggregate_ttl.rb`

Das Plugin läuft nach der Jekyll-Site-Generierung (`post_write` Hook) und:
1. Sammelt alle `*.ttl` Dateien aus `_site/`
2. Entfernt doppelte Namespace-Deklarationen
3. Fügt alle zu einer einzigen `nfdi4objects.ttl` zusammen
4. Speichert diese im Root von `_site/`

**Output:** `_site/nfdi4objects.ttl` (ca. 12 KB mit aktuellen Daten)

### 3. SPARQL-Interface (YASGUI + Comunica)

**Dateien:**
- `_includes/sparql-interface.html` - Die SPARQL-UI-Komponente
- `_pages/services/sparql.md` - Deutsche SPARQL-Seite
- `_pages/en/services/sparql.md` - Englische SPARQL-Seite

**Technologien:**
- **YASGUI (Yet Another SPARQL GUI):** Browser-basierter SPARQL-Editor und Result-Viewer
- **Comunica:** JavaScript SPARQL-Engine, die die TTL-Datei direkt im Browser lädt und abfragt

**Workflow:**
1. Benutzer öffnet `/services/sparql/`
2. JavaScript lädt `nfdi4objects.ttl` über Comunica
3. Benutzer schreibt SPARQL-Query im YASGUI-Editor
4. Query wird clientseitig ausgeführt
5. Ergebnisse werden in YASGUI-Tabelle angezeigt

### 4. Beispiel-Queries

**Dateien:**
- `_data/sparql-examples-de.yml` - Deutsche Beispiele
- `_data/sparql-examples-en.yml` - Englische Beispiele

7 vordefinierte Queries für häufige Anwendungsfälle:
- Alle Personen auflisten
- Personen mit ORCID-ID
- Alle Projekte (Trails)
- Personen und ihre Task Areas
- Projekt-Koordinatoren
- Anzahl Personen pro Task Area
- Alle Daten einer bestimmten Person

## Verwendete Ontologien/Vokabulare

Die TTL-Dateien nutzen folgende Standard-Vokabulare:

- **RDF/RDFS/OWL:** Basis-Semantik
- **SKOS:** Preferred Labels, Definitionen
- **FOAF:** Personen, Namen, Mitgliedschaften
- **Dublin Core (dcterms):** Metadaten, Relationen
- **Schema.org:** Webseiten-Semantik
- **NFDI Core:** `https://nfdi.fiz-karlsruhe.de/ontology#`
- **N4O:** `https://nfdi4objects.net/ontology#` (Custom NFDI4Objects-Ontologie)

## Build-Prozess

```bash
# Lokaler Build
jekyll build

# Output
# - Alle individuellen TTL-Dateien werden generiert
# - Plugin aggregiert sie zu nfdi4objects.ttl
# - SPARQL-Seiten werden gebaut
```

Bei jedem Build wird:
1. Jekyll alle Markdown-Dateien in HTML/TTL konvertiert
2. Das Plugin die TTL-Aggregation durchführt
3. Die fertige `nfdi4objects.ttl` für SPARQL bereitgestellt

## Deployment

**Wichtig:** Stellen Sie sicher, dass:
1. Der `_plugins/` Ordner auf dem Build-Server vorhanden ist
2. GitHub Pages: Plugins funktionieren NUR mit GitHub Actions, nicht mit der automatischen Pages-Integration
3. Die aggregierte `nfdi4objects.ttl` öffentlich zugänglich ist

### GitHub Actions Workflow (Empfohlen)

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.0'
          bundler-cache: true
      - name: Build site
        run: bundle exec jekyll build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## Erweiterung

### Neue Entitäts-Typen hinzufügen

1. **Layout erstellen:** `_layouts/ENTITY-ttl.html`
2. **TTL-Pointer erstellen:** `_ttl/ENTITY/example.ttl` mit `layout: ENTITY-ttl`
3. **Ontologie definieren:** Passende RDF-Types und Properties verwenden

### Neue SPARQL-Beispiele hinzufügen

Bearbeiten Sie `_data/sparql-examples-de.yml` und `_data/sparql-examples-en.yml`:

```yaml
- title: "Meine neue Query"
  description: "Was diese Query macht"
  query: |
    PREFIX foaf: <http://xmlns.com/foaf/0.1/>
    SELECT * WHERE {
      ?s ?p ?o .
    } LIMIT 10
```

## Performance

**Aktuelle Größe:** ~12 KB (23 TTL-Dateien)

**Skalierung:**
- Bis ~1 MB TTL: Keine Probleme
- 1-5 MB: Möglicherweise langsamer Ladezeit
- >5 MB: Erwägen Sie Server-seitigen SPARQL-Endpoint (z.B. Fuseki, Blazegraph)

## Monitoring

Nach dem Deployment prüfen:
1. `https://ihre-domain.de/nfdi4objects.ttl` ist erreichbar
2. `/services/sparql/` lädt ohne JavaScript-Fehler
3. Beispiel-Queries funktionieren
4. Browser-Konsole zeigt keine Comunica-Fehler

## Fehlerbehebung

**Problem:** "TTL file not found"
- Prüfen Sie, ob `nfdi4objects.ttl` im `_site/` Root existiert
- Überprüfen Sie Plugin-Logs: `jekyll build --trace`

**Problem:** "No results from SPARQL query"
- TTL-Syntax-Fehler: Validieren Sie einzelne TTL-Dateien
- Namespace-Probleme: Prüfen Sie Prefix-Deklarationen
- Browser-Konsole für Comunica-Fehler checken

**Problem:** "YASGUI doesn't load"
- CDN-Problem: Prüfen Sie Internet-Verbindung
- Content Security Policy: Erlauben Sie `unpkg.com`
- JavaScript Module-Support: Moderne Browser nötig

## Weitere Ressourcen

- [SPARQL 1.1 Specification](https://www.w3.org/TR/sparql11-query/)
- [YASGUI Documentation](https://triply.cc/docs/yasgui)
- [Comunica Documentation](https://comunica.dev/)
- [RDF Turtle Format](https://www.w3.org/TR/turtle/)
- [NFDI4Objects Original SPARQL](https://www.nfdi4objects.net/portal/sparql/)

## Lizenz & Credits

Die Implementation basiert auf der Architektur des [NFDI4Objects Portals](https://www.nfdi4objects.net/portal/sparql/).

Verwendete Open-Source-Bibliotheken:
- YASGUI (MIT License)
- Comunica (MIT License)
