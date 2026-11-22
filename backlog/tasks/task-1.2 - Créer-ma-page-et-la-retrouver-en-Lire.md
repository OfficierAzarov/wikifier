---
id: TASK-1.2
title: Créer ma page et la retrouver en Lire
status: To Do
assignee: []
created_date: '2026-11-22T12:28:40Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.1
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 3000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Une utilisatrice sans page doit pouvoir en créer une et la retrouver à chaque ouverture : c'est le premier trait de bout en bout (stockage, horloge, cas d'usage, interface) sur lequel tout le reste s'appuie. Le choix « Charger une sauvegarde » arrive au ticket de chargement. Récits 1-3, 5-6, 10-11, 17-18 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Sans page enregistrée, l'application affiche le choix « Créer ma page » ; avec une page, elle s'ouvre sur Lire
- [ ] #2 Créer ma page demande un nom ; un nom vide ou fait d'espaces est refusé avec un message traduit expliquant quoi corriger
- [ ] #3 La page créée porte le nom (sans espaces aux extrémités) comme titre, a un corps vide et est enregistrée immédiatement dans le navigateur
- [ ] #4 Au rechargement, la page enregistrée s'affiche en Lire : titre, corps vide sans erreur et date de dernière modification en bas, au format de la langue de l'interface
- [ ] #5 Ports PageStore et Clock avec faux adaptateurs en mémoire ; le temps passe uniquement par Clock ; cas d'usage « ouvrir l'application » et « créer la page » testés avec les faux adaptateurs
- [ ] #6 Architecture hexagonale respectée (npm run arch passe) et date stockée au format ISO
- [ ] #7 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #8 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #9 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
