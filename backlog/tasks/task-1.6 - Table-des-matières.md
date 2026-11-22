---
id: TASK-1.6
title: Table des matières
status: To Do
assignee: []
created_date: '2026-11-22T12:28:57Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.5
references:
  - page-interface
  - markdown-renderer
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 7000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Une page longue doit pouvoir se parcourir par section, mais une page courte ne doit pas être alourdie. Récits 12-13 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Une table des matières générée à partir des titres du corps apparaît quand la page compte au moins trois titres
- [ ] #2 Avec moins de trois titres, aucune table des matières n'est affichée
- [ ] #3 Chaque entrée mène à sa section au clavier comme à la souris
- [ ] #4 La règle des trois titres est testée avec des cas limites (0, 2, 3 titres, titres imbriqués)
- [ ] #5 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #6 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #7 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #8 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
