---
id: TASK-1.3
title: Modifier et enregistrer
status: To Do
assignee: []
created_date: '2026-11-22T12:28:40Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.2
references:
  - page
  - page-use-cases
  - page-interface
  - system-clock
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 4000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Une utilisatrice doit pouvoir changer son nom et le texte de sa page et valider ses changements. Ce ticket ajoute le mode Modifier et le cas d'usage Enregistrer ; c'est aussi lui qui fait ouvrir Modifier juste après la création de la page. Récits 4, 19-26, 31 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Des onglets Lire et Modifier permettent de passer d'un mode à l'autre ; Lire reste le mode par défaut à l'ouverture
- [ ] #2 Modifier montre le titre et le corps dans un même formulaire ; le corps peut être vide
- [ ] #3 Enregistrer refuse un titre vide (espaces seuls compris) avec un message traduit et reste en Modifier
- [ ] #4 Enregistrer conserve la nouvelle version, met à jour la date de dernière modification via Clock et ramène à Lire ; seule la dernière version est gardée
- [ ] #5 Après la création de la page (ticket précédent), l'application s'ouvre sur Modifier
- [ ] #6 Le titre modifié est visible en Lire et au rechargement
- [ ] #7 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #8 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #9 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
