---
layout: twg
lang: de
translation_key: twg2024-1_omds_oo
title: N4O Object Core Metadata Profile (OCMDP) & Material Cultural Heritage Crosswalk
  Ontology (MaCHeCO)
identifier: TWG 2024.1
status: active
start_date: 2024-10-23 21:55:00+00:00
end_date: ''
cochairs:
- name: ''
  person_ref: anjagerber
- name: ''
  person_ref: florian_thiery
areas:
- ta6
- ta1
- ta2
- ta3
- ta4
- ta5
---

## Beschreibung

Chairs: Fabian Fricke, Anja Gerber und Florian Thiery

Primäres Ziel ist der Aufbau eines von der NFDI4Objects-Community getragenes Object Core Metadata Profile (OCMDP). Dieses Kerndatenschema stellt die Kompatibilität mit dem sich in Aufbau befindlichen NFDI Core Meta Data Profile (NFDI Sektionen) und dem NFDI Core (FIZ Karlsruhe) sicher, so dass Metadaten in NFDI4Objects innerhalb der NFDI-Konsortien interoperabel zur Verfügung stehen. Dazu müssen abgestimmte N4O eigene Elemente/Terms (properties) und Entitäten (classes) erzeugt und durch einen Cross-Walk mit anderen Schemata (u. a. schema.org, DCAT, DataCite, DublinCore) verknüpft werden. Der OCMDP ist die Basis für ein RDF-basiertes Austauschformat (Objects Metadata Junction Ontology - OMJO), welche Daten in einen N4O Metadata Knowledge Graph (N4O MKG) einspielt und diese FAIR zur Verfügung stellt. Zur FAIRifizierung von Forschungsdaten und Herstellung der Kompatibilität mit internationalen Cultural Heritage Daten auf Basis des CIDOC CRM und seiner Extensions wird eine Material Cultural Heritage Crosswalk Ontology (MaCHeCO) entwickelt, um hier gemeinsam mit der N4O Community Basis-Entitäten (classes)  in individuellen Ontologien durch einen hierarchischen CrossWalk zu CIDOC CRM als Crosswalk-Ontology im N4O Knowledge Graph (N4O KG) festzulegen. Zur Interaktion zwischen MaCHeCO und OMJO werden Anknüpfungsklassen zur föderierten Abfrage der beiden Knowledge Graphen (KG und MKG) definiert.

Das OCMDP und die MaCHeCO werden vor allem durch das fachliche Arbeitsprogramm - und damit dem Objektzyklus - der Task Areas 1-4 “Documentation”, “Collecting”, “Analysis & Experiments” sowie “Protecting” bestimmt und berühren dabei die Themengebiete Ausgrabung, (digitale) Rekonstruktion und Annotation, Sammlung, Kunstgeschichte, Restaurierung/Konservierung, naturwissenschaftliche Analysen, Denkmalpflege, Provenienzforschung, etc. Die Themengebiete erzeugen dabei fachliche Profile als Module der OCMDP, sowie fachspezifische Profil-Ontologien, die jeweils auf CIDOC CRM Klassen referenzieren (per cross-walk) um die Kompatibilität mit dem N4O KG herzustellen und die Validierung positiv zu gestalten.

**Daraus ergeben sich als Aufgaben für die TWG u. a.:**

Definition der Begrifflichkeiten zu einem Objects Core (N4O Proposal G6.5, p. 93; M6.3, p.95)

Festlegung von gemeinsamen Basis-Entitäten (classes) in individuellen Ontologien und hierarchischer CrossWalk u.A. auf CIDOC CRM 7.1.3 für MaCHeCO als Crosswalk-Ontologie im N4O Knowledge Graph

Entwicklung eines Object Core Metadata Profile (OCMDP) und Verknüpfung zu MaCHeCO und dem Knowledge Graph

* Aufbau eines gemeinsamen Thesaurus zur Definition der Elemente (properties) und Entitäten (classes, zum Ontologieaustausch) im Object Core Metadata Profile (OCMDP)
* OCMDP-Super-Element-CrossWalk zu NFDI Core Metadata Profile (schema.org / DataCite / DCAT / NFDI Core / CodeMeta) sowie DublinCore und Wikidata
* Definition eines Austauschformats (CSV; XML; JSON)
* Definition einer OCMDP Ontology (RDF Repräsentation des OCMDP) und der Object Metadata Junction Ontology (OMJO)

  * Elemente (properties) im Object Core Metadata Profile (OCMDP)
  * Gemeinsame Anknüpfungsentitäten (classes) zwischen OMJO und MaCHeO zur föderierten Abfrage der beiden Knowledge Graphen

OSF: <https://osf.io/v6ncy/>  

Mailingliste: <https://www.listserv.dfn.de/sympa/admin/n4o_twg_ocmdp_macheco>

[](https://www.listserv.dfn.de/sympa/info/n4o_twg_omds_oo)Rocket-Chat: [](https://n4o-chat.nfdi.de/channel/TWG_N4O_OMDS_OO)<https://n4o-chat.nfdi.de/channel/TWG_N4O_OCMDP_MaCHeCO>