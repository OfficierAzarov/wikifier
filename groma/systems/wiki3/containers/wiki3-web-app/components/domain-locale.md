---
type: C4 Component
title: 'Domaine : Langues gérées'
status: stable
groma:
  id: domain-locale
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/domain/locale.ts
  group: Domain
  technology: TypeScript
description: Les langues de l'interface et le choix de la langue au démarrage
---

Définit les langues gérées (fr, en), la langue par défaut (en) et `resolveLocale`, qui retient la première langue gérée du navigateur en ignorant la région et la casse (`fr-CA` donne `fr`). `isLocale` valide une valeur venue de l'extérieur. Ne dépend de rien.
