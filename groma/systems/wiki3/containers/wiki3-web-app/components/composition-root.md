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

Seul endroit autorisé à relier les adaptateurs aux ports de l'application (ADR 0002). Il est chargé par index.html, importe la feuille de style globale (styles.css, jetons visuels proches de Vector) et branche aujourd'hui le choix de la langue : préférence mémorisée dans le stockage local, langues du navigateur, traducteur et coquille de l'interface. Les autres cas d'usage et adaptateurs viendront s'y brancher.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/main.ts](../../../../../../src/main.ts) | [src/application/language.ts](../../../../../../src/application/language.ts) | Starts and selects language | Function call |
| [src/main.ts](../../../../../../src/main.ts) | [src/adapters/driving/ui/shell.ts](../../../../../../src/adapters/driving/ui/shell.ts) | Mounts the shell | Function call |
| [src/main.ts](../../../../../../src/main.ts) | [src/adapters/driven/language-preference/storage-language-preference.ts](../../../../../../src/adapters/driven/language-preference/storage-language-preference.ts) | Creates the preference store | Function call |
| [src/main.ts](../../../../../../src/main.ts) | [src/adapters/driving/i18n/translator.ts](../../../../../../src/adapters/driving/i18n/translator.ts) | Provides translations | Function call |
