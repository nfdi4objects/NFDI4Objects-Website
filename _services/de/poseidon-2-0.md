---
layout: service
lang: de
translation_key: poseidon-2-0
title: POSEIDON 2.0
short_title: Forschungsinstrument und Speicher für archäogenetische Daten
logo: /assets/images/services/poseidon-logo-watergraphiclrg_500px.png
homepage: https://www.poseidon-adna.org/#/
access_url: https://www.poseidon-adna.org/#/
areas:
- ta3
trails:
- poseidon_20_a_data_repository_for_genetic_bioarchaeological_and_archaeologica-data
nfdi_category: databases
nfdi_service_types:
- dis
- das
permalink: /services/poseidon-2-0/
---

## Beschreibung

Die **Archäogenetik** hat sich zu einem rasanten Feld entwickelt, in dem neue Daten schneller veröffentlicht werden, als viele einzelne Forscher den Überblick behalten und gemeinsam analysieren können. Kürzlich haben wir die Schwelle von [genomweiten Daten für 10.000 antike Menschen](https://www.nature.com/articles/d41586-023-01403-4) überschritten. Darüber hinaus verfügen wir für viele dieser Proben über umfangreiche Metadaten, die von archäologischen Informationen bis hin zu Radiokarbondatierungen reichen.


Die Art und Weise wie Daten derzeit weitergegeben und in akademischen Publikationen veröffentlicht werden, besteht - zumindest bei genetischen Analysen - hauptsächlich darin, dass die Rohdaten der Sequenzierung in öffentlichen Repositories wie der [ENA](https://www.ebi.ac.uk/ena/browser/home) veröffentlicht werden, während die Metadaten zu den Proben teilweise über oft schlecht formatierte Excel-Tabellen im Anhang bereitgestellt werden. Dies führt zu (mindestens) den folgenden Problemen:

* Zwischendaten wie z. B. Genotypen werden oft überhaupt nicht veröffentlicht, was es anderen erschwert, Analysen zu reproduzieren.

* Die Verbindung zwischen Individuen, Kontextinformationen und genetischen Daten ist schwer aufrechtzuerhalten, da sie zwischen sehr unterschiedlichen Repositories und Quellen (Excel vs. persönliche Homepages vs. öffentliche Repositories) überbrückt wird.

* Meta-Analysen, die sich über mehrere Datensätze erstrecken, erfordern einen enormen Arbeitsaufwand für die Datensammlung und -pflege.


Eine wichtige Initiative zur Lösung dieser Probleme in der menschlichen Archäogenetik ist die [Allen Ancient DNA Resource ("AADR")](https://www.biorxiv.org/content/10.1101/2023.04.06.535797v1), ein kuratierter Datensatz öffentlicher antiker DNA-Daten, der vom Labor für antike DNA von David Reich an der Harvard University erstellt, kuratiert und gebündelt wurde. Unsere Initiative ist in vielerlei Hinsicht von dieser Ressource inspiriert und leitet sich von ihr ab. Insbesondere ist das AADR derzeit (April 2023) die wohl vollständigste Ressource weltweit, die genomweite Genotypdaten für antike menschliche Individuen aus nahezu allen Veröffentlichungen auf diesem Gebiet bereitstellt.


[Unsere öffentlichen Archive](https://www.poseidon-adna.org/#/archive_overview) stammen zu einem großen Teil direkt aus der AARD, während viele kuratierte Pakete, insbesondere ab 2019, von uns zusammengestellte und generierte Daten enthalten. Unsere Initiative unterscheidet sich aber auch in wichtigen Aspekten von der AARD:

* Anstatt die Daten in einem monolithischen Datensatz bereitzustellen, haben wir beschlossen, die Daten in Form von Paketen zu strukturieren, die in der Regel (aber nicht zwangsläufig) Daten aus einzelnen Publikationen enthalten. Dies macht es für uns viel einfacher, die Ressource auf dem neuesten Stand zu halten, da neue Pakete einfach hinzugefügt werden können und Patches für einzelne Pakete leichtgewichtig sind und keine Aktualisierung des gesamten Datensatzes erforderlich machen.

* Um die Arbeit mit diesem eher dezentralisierten, paketorientierten System zu erleichtern, stellen wir unser Kommandozeilenprogramm [trident](https://www.poseidon-adna.org/#/trident) zur Verfügung, das als vorkompilierte ausführbare Datei für alle wichtigen Betriebssysteme zur Verfügung steht und kontinuierlich weiterentwickelt und gepflegt wird.

* Wir haben die Kontextdaten, die zusammen mit den genetischen Daten in der AARD geliefert werden, formalisiert und zu einem maschinenlesbaren Standard standardisiert (siehe[Standard](https://www.poseidon-adna.org/#/standard) und [Details zur janno-Datei](https://www.poseidon-adna.org/#/janno_details).


Alles in allem hoffen wir, dass **POSEIDON 2.0** dazu beiträgt, das schnell wachsende Feld der Archäogenetik reproduzierbarer zu machen und uns letztendlich den FAIR-Prinzipien offener Daten näher zu bringen: Auffindbarkeit, Zugänglichkeit, Interoperabilität, Wiederverwendbarkeit.