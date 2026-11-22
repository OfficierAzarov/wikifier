---
id: TASK-1.13
title: Supprimer ma page
status: To Do
assignee: []
created_date: '2026-11-22T12:29:13Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.4
  - TASK-1.8
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 14000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
L'utilisatrice doit pouvoir repartir de zéro, en comprenant ce qui est effacé (la page du navigateur) et ce qui ne l'est pas (les fichiers déjà téléchargés). Récits 44-49 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Un bouton Supprimer ma page est disponible depuis Lire
- [ ] #2 Une confirmation s'ouvre, avec un bouton Télécharger une sauvegarde et un avertissement : les sauvegardes déjà téléchargées restent sur l'ordinateur et doivent être supprimées à la main
- [ ] #3 Confirmer efface la page du stockage du navigateur et ramène aux choix du premier lancement
- [ ] #4 Annuler la confirmation laisse la page intacte
- [ ] #5 Après suppression, au rechargement, l'application affiche le premier lancement et le stockage ne contient plus rien de la page
- [ ] #6 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #7 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #8 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #9 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
