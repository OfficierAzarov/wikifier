---
type: Groma Flow
title: Open Wiki3
groma:
  id: open-wiki3
---

L'utilisatrice ouvre l'application dans son navigateur, qui charge le point d'entrée. La racine de composition choisit la langue de l'interface (préférence mémorisée, sinon langue du navigateur), puis affiche la coquille de l'interface dans cette langue.

## Steps

| From | To | Action |
| --- | --- | --- |
| [Utilisatrice](../actors/utilisatrice.md) | [Racine de composition](../systems/wiki3/containers/wiki3-web-app/components/composition-root.md) | Load the page and its script |
| [Racine de composition](../systems/wiki3/containers/wiki3-web-app/components/composition-root.md) | [Choix de la langue](../systems/wiki3/containers/wiki3-web-app/components/use-cases-language.md) | Pick the interface language |
| [Racine de composition](../systems/wiki3/containers/wiki3-web-app/components/composition-root.md) | [Coquille de l'interface](../systems/wiki3/containers/wiki3-web-app/components/driving-shell.md) | Show the shell in that language |
