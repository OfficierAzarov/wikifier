---
type: C4 Component
title: Ports
status: stable
groma:
  id: ports
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/application/ports.ts
  technology: TypeScript
  group: Application
description: Interfaces par lesquelles les cas d'usage atteignent l'extérieur
---

Interfaces TypeScript que la couche application appelle et que les adaptateurs implémentent (ADR 0002). Aujourd'hui : la préférence de langue (lire et écrire la langue choisie) et les langues demandées par le navigateur. Les ports du stockage de la page, de l'horloge, des fichiers de sauvegarde et du rendu Markdown viendront ici.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/application/ports.ts](../../../../../../src/application/ports.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Types the locale | TypeScript type |
