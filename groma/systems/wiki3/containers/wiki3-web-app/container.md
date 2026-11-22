---
type: C4 Container
title: Application web Wiki3
status: stable
groma:
  id: wiki3-web-app
  parent: wiki3
  technology: TypeScript, Vite, DOM natif
description: Application navigateur qui porte toute la logique de Wiki3
---

Unique conteneur du système : une page HTML (index.html) charge le module src/main.ts, qui est la seule entrée. Le code suit une architecture hexagonale (ADR 0002) : domain/ pour les règles métier pures, application/ pour les cas d'usage et les ports, adapters/ pour le stockage, le Markdown, les fichiers, l'horloge et l'interface. Aujourd'hui, seuls le domaine (Page, Result) et le point d'entrée existent ; application/ et adapters/ ne sont pas encore écrits. Aucun framework d'interface n'est utilisé (ADR 0003).
