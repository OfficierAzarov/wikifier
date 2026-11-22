---
id: TASK-1.9
title: Charger une sauvegarde au premier lancement
status: To Do
assignee: []
created_date: '2026-11-22T12:28:58Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.8
references:
  - backup-files
  - page-use-cases
  - page-storage
  - page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 10000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
L'utilisatrice qui change d'ordinateur ou de navigateur doit pouvoir retrouver sa page depuis une sauvegarde, et un fichier mauvais ne doit jamais rien détruire. Récits 1 (second choix), 7, 35, 38-39, 41-43 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Le premier lancement propose aussi « Charger une sauvegarde » à côté de « Créer ma page »
- [ ] #2 Une sauvegarde valide choisie sur l'ordinateur devient la page enregistrée et s'ouvre en Lire, quelle que soit la langue de l'interface
- [ ] #3 Un fichier qui n'est pas du JSON valide est refusé avec un message clair
- [ ] #4 Un JSON sans titre ou sans corps est refusé avec un message clair
- [ ] #5 Une sauvegarde d'une version plus récente que celle de l'application est refusée avec un message clair
- [ ] #6 Un fichier refusé laisse l'état de l'application inchangé ; la lecture passe par un port de fichiers avec faux adaptateur et un schéma Zod validé par propriétés (fast-check)
- [ ] #7 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #8 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #9 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
