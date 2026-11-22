---
type: C4 Component
title: Racine de composition
status: stable
groma:
  id: composition-root
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/main.ts
  technology: TypeScript
description: Point d'entrée qui branche les adaptateurs sur les ports
---

Seul endroit autorisé à relier les adaptateurs aux ports de l'application (ADR 0002). Il est chargé par index.html et importe la feuille de style globale (styles.css, jetons visuels proches de Vector). Pour l'instant c'est un squelette : aucun cas d'usage ni adaptateur n'est encore branché.
