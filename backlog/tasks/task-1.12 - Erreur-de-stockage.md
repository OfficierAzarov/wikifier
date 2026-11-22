---
id: TASK-1.12
title: Erreur de stockage
status: To Do
assignee: []
created_date: '2026-11-22T12:29:13Z'
updated_date: '2026-11-22T13:01:01Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.3
  - TASK-1.8
references:
  - page-storage
  - page-use-cases
  - page-interface
  - backup-files
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 13000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Si le navigateur refuse d'enregistrer (stockage plein ou désactivé), l'utilisatrice ne doit pas perdre ce qu'elle vient d'écrire. Récits 50-52 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Quand le stockage échoue à l'enregistrement, un message d'erreur visible en haut de la page s'affiche
- [ ] #2 L'utilisatrice reste en Modifier et son titre et son corps saisis sont intacts
- [ ] #3 Le message propose Télécharger une sauvegarde du contenu saisi pour garder le travail
- [ ] #4 L'échec est simulé en Playwright (stockage plein ou désactivé) et par un faux stockage qui échoue dans les tests de cas d'usage
- [ ] #5 Après un échec, un nouvel essai d'Enregistrer qui réussit ramène à Lire normalement
- [ ] #6 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #7 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #8 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #9 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
