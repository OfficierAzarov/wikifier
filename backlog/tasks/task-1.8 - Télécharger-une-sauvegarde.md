---
id: TASK-1.8
title: Télécharger une sauvegarde
status: To Do
assignee: []
created_date: '2026-11-22T12:28:58Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.2
references:
  - backup-files
  - page-use-cases
  - system-clock
  - page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 9000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
L'utilisatrice veut garder une copie de sa page sur son ordinateur. Ce ticket pose le format de sauvegarde versionné (ADR 0006) et le téléchargement ; le chargement vient ensuite. Récits 32-34 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Un bouton Télécharger une sauvegarde est accessible depuis Lire et télécharge un fichier JSON de la page enregistrée
- [ ] #2 Le fichier est nommé titre-AAAA-MM-JJ.json, titre sans accents ni espaces, avec la date du jour donnée par Clock
- [ ] #3 Le contenu a un numéro de version (1), le titre, le corps et la date de dernière modification
- [ ] #4 Port d'écriture de fichiers avec faux adaptateur en mémoire ; schéma Zod v1 dans l'adaptateur, le domaine reste sans dépendance (Zod est déjà décidé par l'ADR 0006)
- [ ] #5 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #6 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #7 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #8 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
- [ ] #9 Le nom de fichier est testé par propriétés (fast-check) : il ne contient jamais d'accents ni d'espaces ; le comportement quand le titre ne laisse aucun caractère utilisable est tranché et testé
<!-- AC:END -->
