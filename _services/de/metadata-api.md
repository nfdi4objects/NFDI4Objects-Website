---
layout: service
lang: de
translation_key: service-metadata-api
title: "Metadata API"
short_title: "Metadata API"

nfdi_category: libraries
service_type: api
lifecycle_phases:
  - planung

organization: "dai"
contact_email: "helpdesk@nfdi4objects.net"
homepage: "https://metadata-api.nfdi4objects.net/"
access_url: "https://api.nfdi4objects.net/v1/"
logo: "/assets/images/services/api-logo.png"

task_areas:
  - ta3
  - ta5

permalink: /services/metadata-api/
---
*Verantwortliche: Florian Thiery (LEIZA) / Allard W. Mees (LEIZA)*


Mit dem **Academic Meta Tool (AMT)** können **Vagheiten in RDF-Graphdaten** modelliert und mit Hilfe von Reasoning **automatische Schlussfolgerungen**, z.B. zu relativzeitlichen Abfolgen, gezogen werden. Die Ergebnisse können als Linked Open Data im RDF-Format als FAIRe Daten zur Verfügung gestellt und in Graphen visualisiert werden.


Zur Beantwortung geisteswissenschaftlicher Forschungsfragenkommen in den letzten Jahren vermehrt Graphdatenbanken und sogenannte Triplestores zum Einsatz. In diesen Fällen werden die relevanten Daten als Graph bzw. als Sammlung von Tripeln modelliert. Das hat gegenüber relationalen Datenbanken, in denen Tabellenstrukturen eine Rolle spielen, den Vorteil, dass dadurch Netzwerke sowie Verbindungen ins Semantic Web und die Linked Data Cloud wesentlich einfacher ausgedrückt werden können. In diesen Netzwerken werden Zusammenhänge als Beziehungen zwischen Entitäten dargestellt.


So kann beispielsweise eine Handelsbeziehung "handelt mit" zwischen Person A und Person B modelliert werden. Eine solche Verknüpfung zwischen zwei Entitäten über eine Beziehung entspricht damit auch dem Grundkonzept der Triple-Struktur von Linked Data. Dabei werden dann sowohl die beiden Entitäten (Person A und B) als auch die Beziehung ("handelt mit") als Begriffe mit einer eindeutigen Adresse (URI) im WWW hinterlegt. Dadurch kann auch Software die Triple interpretieren, wodurch sie maschinenlesbar wird. 


Ein häufig dabei auftauchendes Problem ist die Vagheit von Kanten beziehungsweise von Aussagen. Das bedeutet, dass eine Verbindung zwischen zwei Knoten beziehungsweise Ressourcen nur zu einem gewissen Grad besteht. Dies ist nicht zu verwechseln mit Unsicherheit, bei der unbekannt ist, ob die Verbindung überhaupt besteht. 


Im vorgenannten Beispiel wäre dies, dass die Handelsbeziehung nicht besonders intensiv war, es sich also eher um sporadische Handelskontakte handelt. Sind in einem Datensatz viele Freundschaftsbeziehungen vorhanden, die aber eine unterschiedliche Intensität der Beziehung bedeuten, müsste man entweder alle auf gleiche Weise verknüpfen oder sehr viele verschiedene Verknüpfungen erfinden, die aber im Wesentlichen das Gleiche bedeuten. Das Academic Meta Tool (AMT) greift dieses Problem auf und bietet die Möglichkeit, Kantengewichte (“degree of connection”) einzufügen und darauf Inferenz unter Berücksichtigung von Vagheit vorzunehmen.


Das AMT ist bereits in vielen verschiedenen Kontexten von NFDI4Objects getestet und eingesetzt worden:


* [“Typologie-Handling zur Dokumentation mit Hilfe künstlicher Intelligenz”](https://zenodo.org/doi/10.5281/zenodo.7179955)

* [“Taming Ambiguity - Dealing with doubts in archaeological datasets using LOD”](http://dx.doi.org/10.15496/publikation-87762)

* “Töpfer-Netzwerk Südgallischer Terra Sigillata”

* [“Darstellungen auf archäologischen Kleinfunden”](http://dx.doi.org/10.17175/sb004_004)

* [Modellierung relativ-chnologischer Zeitperioden](https://zenodo.org/doi/10.5281/zenodo.8154700)


Das Tool wird im Rahmen des Arbeitsprogrammes weiterentwickelt. Es steht als sogenannter [Playground](https://leiza-rse.github.io/amt-playground/) zur Verfügung.


Der [Quellcode](https://github.com/leiza-rse/amt-playground) ist auf GitHub verfügbar. Die [Ontologie](https://academic-meta-tool.xyz/ontology/) ist auf Zenodo veröffentlicht.


Das AMT wurde 2017 als Kooperationsprojekt des Mainzer Zentrum für Digitalität in den Geistes- und Kulturwissenschaften ([mainzed](https://mainzed.org/)) als Research Tool von Martin Unold ([i3mainz - Institut für Raumbezogene Informations- und Messtechnik](https://i3mainz.hs-mainz.de/) am Fachbereich Technik der Hochschule Mainz) und Florian Thiery (damals i3mainz und Römisch-Germanisches Zentralmuseum) entwickelt. AMT wird nun von Allard Mees und Florian Thiery am [Leibniz-Zentrum für Archäologie (LEIZA)](https://www.leiza.de/) am Arbeitsbereich “Wissenschaftliche IT, digitale Plattformen und Tools”, sowie im Dauerforschungsgebiet “Explorative Forschung und Methodenentwicklung” im Rahmen des Handlungsfeldes “Digitale Methodik in der Archäoinformatik” in den Projekten “Semantische Modellierung und Knowledge Graphs” und NFDI4Objects weiterentwickelt.