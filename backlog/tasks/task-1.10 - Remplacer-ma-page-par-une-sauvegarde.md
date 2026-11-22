---
id: TASK-1.10
title: Remplacer ma page par une sauvegarde
status: To Do
assignee: []
created_date: '2026-11-22T12:29:12Z'
updated_date: '2026-11-22T14:28:16Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.9
  - TASK-1.4
references:
  - driven-backup-files
  - use-cases-page
  - driven-page-storage
  - driving-page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 11000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Une utilisatrice qui a déjà une page peut vouloir revenir à une sauvegarde, mais ne doit pas écraser son travail par accident. Récits 36-37, 42 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Depuis Lire, un bouton Charger une sauvegarde permet de choisir un fichier
- [ ] #2 Avec un fichier valide, une confirmation demande si la sauvegarde doit remplacer la page actuelle
- [ ] #3 Accepter remplace la page enregistrée par la sauvegarde et affiche le résultat en Lire
- [ ] #4 Refuser laisse la page actuelle intacte
- [ ] #5 Un fichier invalide ou trop récent est refusé comme au premier lancement, sans toucher à la page actuelle et sans demander de confirmation
- [ ] #6 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #7 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #8 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #9 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
