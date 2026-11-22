---
type: C4 Component
title: Fichiers de sauvegarde
description: 'Prévu : adaptateur qui lit et écrit les sauvegardes JSON'
status: draft
groma:
  id: backup-files
  parent: wiki3-web-app
  technology: TypeScript, Zod
---

Adaptateur sortant (adapters/driven), pas encore écrit. Il télécharge la page en fichier titre-AAAA-MM-JJ.json et lit un fichier choisi par l'utilisatrice. Chaque version du format a un schéma Zod ; au chargement il valide puis applique les migrations dans l'ordre, et refuse un fichier invalide ou trop récent (ADR 0006). Zod reste dans cet adaptateur.
