---
type: C4 Component
title: 'Adaptateur entrant : Coquille de l''interface'
status: stable
groma:
  id: driving-shell
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/adapters/driving/ui/shell.ts
  technology: TypeScript, DOM
  group: Driving adapters
description: En-tête avec le titre et le sélecteur de langue toujours visible
---

Adaptateur entrant en DOM natif (adapters/driving, ADR 0003). Construit une seule fois l'en-tête (titre Wiki3, sélecteur de langue natif) et une zone principale vide, puis met à jour en place le libellé, la valeur du sélecteur et la langue du document, pour que le focus reste sur le sélecteur. Il ne connaît ni le traducteur ni le stockage : la racine de composition les lui donne. C'est la base où viendront les écrans de la page.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/adapters/driving/ui/shell.ts](../../../../../../src/adapters/driving/ui/shell.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Validates chosen locale | Function call |
