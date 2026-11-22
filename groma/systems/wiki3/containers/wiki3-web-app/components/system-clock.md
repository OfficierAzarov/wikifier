---
type: C4 Component
title: Horloge
description: 'Prévu : adaptateur qui donne l''heure courante'
status: draft
groma:
  id: system-clock
  parent: wiki3-web-app
  technology: TypeScript
---

Adaptateur sortant (adapters/driven), pas encore écrit. Il implémente le port Clock : l'heure ne passe que par lui, ce qui permet de la fixer dans les tests. Elle sert à dater les enregistrements et à nommer les fichiers de sauvegarde.
