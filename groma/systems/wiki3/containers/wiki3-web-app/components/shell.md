---
type: C4 Component
title: Coquille de l'interface
status: stable
groma:
  id: shell
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/adapters/driving/ui/shell.ts
  technology: TypeScript, DOM
description: En-tête avec le titre et le sélecteur de langue toujours visible
---

Adaptateur d'interface en DOM natif (ADR 0003). Construit une seule fois l'en-tête (titre Wiki3, sélecteur de langue natif) et une zone principale vide, puis met à jour en place le libellé, la valeur du sélecteur et la langue du document, pour que le focus reste sur le sélecteur. Il ne connaît ni le traducteur ni le stockage : la racine de composition les lui donne. C'est la base où viendront les écrans de la page.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/adapters/driving/ui/shell.ts](../../../../../../src/adapters/driving/ui/shell.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Validates chosen locale | Function call |
