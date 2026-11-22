---
id: TASK-1.5
title: Markdown sécurisé en Lire
status: To Do
assignee: []
created_date: '2026-11-22T12:28:56Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.3
references:
  - markdown-renderer
  - page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 6000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Le corps est écrit en Markdown et doit s'afficher mis en forme comme une page d'encyclopédie, sans jamais exécuter de code venant de la page ou d'une sauvegarde (ADR 0004). Récits 8, 14-16 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Lire affiche titres, gras, listes, liens, citations et tableaux mis en forme à partir du Markdown du corps
- [ ] #2 Le HTML brut écrit dans le corps s'affiche comme du texte et aucun script ne s'exécute
- [ ] #3 Une image dont l'adresse commence par https s'affiche ; une image d'une autre sorte d'adresse (data:, http:, javascript:) est refusée
- [ ] #4 Le rendu passe par un port MarkdownRenderer avec un adaptateur markdown-it configuré avec html à false ; l'application n'importe pas markdown-it
- [ ] #5 La politique de sécurité du contenu existante reste en vigueur et ses scénarios restent verts
- [ ] #6 Un corps vide s'affiche sans erreur
- [ ] #7 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #8 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #9 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
