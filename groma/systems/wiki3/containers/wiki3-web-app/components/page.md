---
type: C4 Component
title: Page
status: stable
groma:
  id: page
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/domain/page.ts
  group: Domain
  technology: TypeScript
description: Entité Page et règle de création
---

Représente le contenu unique d'une utilisatrice : titre, corps Markdown et date de dernière modification. createPage refuse un titre vide ou composé d'espaces (code d'erreur title-required, traduit plus tard par l'interface) et reçoit l'heure en paramètre plutôt que de la lire. Ne dépend que de Result.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/domain/page.ts](../../../../../../src/domain/page.ts) | [src/domain/result.ts](../../../../../../src/domain/result.ts) | Returns outcomes as | TypeScript import |
