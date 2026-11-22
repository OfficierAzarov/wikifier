---
type: C4 Component
title: Préférence de langue (stockage local)
status: stable
groma:
  id: storage-language-preference
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/adapters/driven/language-preference/storage-language-preference.ts
      symbol: createStorageLanguagePreference
  technology: TypeScript, localStorage
description: Mémorise la langue choisie dans le navigateur
---

Adaptateur sortant (adapters/driven) du port de préférence de langue, sur le stockage local du navigateur, sous la clé `wiki3.language`, distincte de toute page ou sauvegarde. Il ignore une valeur qui n'est pas une langue gérée et avale les erreurs de stockage : le choix ne vaut alors que pour la session. Un faux en mémoire sert aux tests et n'est pas représenté ici.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [src/adapters/driven/language-preference/storage-language-preference.ts](../../../../../../src/adapters/driven/language-preference/storage-language-preference.ts) | [src/application/ports.ts](../../../../../../src/application/ports.ts) | Implements the port | TypeScript interface |
| [src/adapters/driven/language-preference/storage-language-preference.ts](../../../../../../src/adapters/driven/language-preference/storage-language-preference.ts) | [src/domain/locale.ts](../../../../../../src/domain/locale.ts) | Validates stored locale | Function call |
