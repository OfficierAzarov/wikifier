---
id: TASK-1.4
title: Annuler avec confirmation
status: To Do
assignee: []
created_date: '2026-11-22T12:28:41Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.3
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 5000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Une utilisatrice ne doit jamais perdre son travail par erreur en quittant Modifier. Ce ticket ajoute Annuler et la boîte de confirmation accessible, composant que le chargement de sauvegarde et la suppression réutilisent. Récits 27-30, 69 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Annuler ramène à Lire sans rien demander quand le titre et le corps sont identiques à la dernière version enregistrée
- [ ] #2 Annuler demande confirmation quand le titre ou le corps a changé
- [ ] #3 Répondre non à la confirmation garde l'utilisatrice en Modifier avec son texte intact
- [ ] #4 Répondre oui revient à Lire avec la dernière version enregistrée inchangée
- [ ] #5 La boîte de confirmation est un composant réutilisable, utilisable entièrement au clavier (focus, Échap, Entrée) et annoncée aux lecteurs d'écran
- [ ] #6 La détection de changement est un test unitaire du cas d'usage, avec propriétés fast-check sur les espaces
- [ ] #7 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #8 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #9 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
