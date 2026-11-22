---
type: C4 Component
title: 'Adaptateur entrant : Langue de l''interface'
status: stable
groma:
  id: driving-interface-language
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/adapters/driving/i18n/translator.ts
    - scanner: typescript
      file: src/adapters/driving/i18n/dictionary.ts
      symbol: Dictionary
    - scanner: typescript
      file: src/adapters/driving/i18n/en.ts
      symbol: en
    - scanner: typescript
      file: src/adapters/driving/i18n/fr.ts
      symbol: fr
  technology: TypeScript, Intl
  group: Driving adapters
description: Textes français et anglais, dates et pluriels par Intl
---

Adaptateur entrant (adapters/driving). `fr.ts` est le dictionnaire de référence : son type est imposé à `en.ts`, donc une clé manquante fait échouer la compilation (ADR 0005). `createTranslator` donne les textes d'une langue, le nom de chaque langue dans sa propre langue, `formatDate` et `plural`, qui passent par `Intl` sans bibliothèque. Ajouter une langue demande une langue au domaine et un dictionnaire.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/adapters/driving/i18n/translator.ts](../../../../../../src/adapters/driving/i18n/translator.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Lists supported locales | Function call |
