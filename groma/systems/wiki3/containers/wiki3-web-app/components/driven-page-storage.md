---
type: C4 Component
title: 'Adaptateur sortant : Stockage de la page'
description: 'Prévu : adaptateur qui garde la page dans le navigateur'
status: draft
groma:
  id: driven-page-storage
  parent: wiki3-web-app
  technology: TypeScript, stockage du navigateur
  group: Driven adapters
---

Adaptateur sortant (adapters/driven), pas encore écrit. Il implémente le port de stockage de la page sur le stockage local du navigateur : lire, enregistrer, supprimer. Il lit la page par le même mécanisme de validation et de migration que les sauvegardes (ADR 0006), et signale un stockage plein, désactivé ou illisible sans casser l'application.
