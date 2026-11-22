---
id: TASK-1.7
title: Apparence Wikipédia et mobile
status: To Do
assignee: []
created_date: '2026-11-22T12:28:57Z'
updated_date: '2026-11-22T14:28:17Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.3
  - TASK-1.5
references:
  - driving-page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 8000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
L'application doit ressembler à Wikipédia sans en reprendre le logo ni la marque, pour que l'utilisatrice se sente en terrain connu, et rester utilisable sur téléphone. Récits 9, 63-67 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Le titre s'affiche en grande police à empattements avec un filet dessous ; le corps en police sans empattement ; polices système uniquement
- [ ] #2 L'interface a un en-tête, les onglets Lire et Modifier, une colonne de lecture unique et un pied de page, dans l'esprit du style Vector actuel
- [ ] #3 Aucun logo ni marque Wikipédia, et aucune recherche, onglet Discussion, onglet Historique ni lien interne [[ ]]
- [ ] #4 L'interface est lisible et utilisable sur un écran de téléphone, sans défilement horizontal de la page
- [ ] #5 Le poids du build reste sous le seuil size-limit, sans nouvelle dépendance d'exécution
- [ ] #6 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #7 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #8 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #9 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
