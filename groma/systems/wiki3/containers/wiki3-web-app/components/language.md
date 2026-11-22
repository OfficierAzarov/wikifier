---
type: C4 Component
title: Choix de la langue
status: stable
groma:
  id: language
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/application/language.ts
  technology: TypeScript
  group: Application
description: 'Cas d''usage : choisir et mémoriser la langue de l''interface'
---

`startLocale` prend la langue mémorisée, sinon celle du navigateur ; `selectLocale` mémorise le choix de l'utilisatrice. Il passe par les ports de préférence de langue et de langues du navigateur, sans connaître d'adaptateur. La langue de l'interface est indépendante de la page : elle n'entre jamais dans une sauvegarde.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/application/language.ts](../../../../../../src/application/language.ts) | [src/application/ports.ts](../../../../../../src/application/ports.ts) | Reads language preference | TypeScript interface |
| [src/application/language.ts](../../../../../../src/application/language.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Resolves the locale | Function call |
