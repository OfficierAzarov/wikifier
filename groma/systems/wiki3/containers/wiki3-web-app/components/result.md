---
type: C4 Component
title: Result
status: stable
groma:
  id: result
  parent: wiki3-web-app
  code:
    - scanner: typescript
      file: src/domain/result.ts
  group: Domain
  technology: TypeScript
description: Type Result partagé pour signaler succès ou échec
---

Union discriminée (ok / error) avec les constructeurs success et failure. Le domaine renvoie des codes d'erreur plutôt que de lever des exceptions ; ce type est le contrat commun, utilisable par toutes les couches.
