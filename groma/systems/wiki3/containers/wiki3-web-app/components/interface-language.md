---
type: C4 Component
title: Langue de l'interface
description: 'Prévu : dictionnaires fr/en et préférence de langue'
status: draft
groma:
  id: interface-language
  parent: wiki3-web-app
  technology: TypeScript, Intl
---

Adaptateur (adapters/driving) pas encore écrit. Dictionnaires TypeScript fr (référence) et en de même type, dates et pluriels par Intl, détection de la langue du navigateur et sélecteur toujours visible (ADR 0005). Le choix est mémorisé dans le navigateur par un port de préférence de langue, et n'entre jamais dans une sauvegarde.
