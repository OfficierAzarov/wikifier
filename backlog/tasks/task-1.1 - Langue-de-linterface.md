---
id: TASK-1.1
title: Langue de l'interface
status: To Do
assignee: []
created_date: '2026-11-22T12:28:27Z'
updated_date: '2026-11-22T13:01:00Z'
labels:
  - ready-for-agent
dependencies: []
references:
  - interface-language
  - page-interface
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 2000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Tous les textes de l'interface passent par l'internationalisation (ADR 0005). Ce ticket la met en place d'abord, pour que les tickets suivants écrivent leurs textes en français et en anglais dès le départ. Récits 54-59, 61-62 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 L'interface s'ouvre en français quand le navigateur est en français, et en anglais pour toute autre langue non gérée
- [ ] #2 Un sélecteur de langue toujours visible change la langue de l'interface immédiatement
- [ ] #3 Le choix de langue est mémorisé dans le navigateur et retrouvé au rechargement, via un port de préférence de langue avec un faux adaptateur en mémoire
- [ ] #4 Le choix de langue n'est jamais écrit dans une sauvegarde, et la langue de l'interface est indépendante de celle de la page
- [ ] #5 Les dictionnaires fr (référence) et en ont le même type : une clé manquante dans une langue fait échouer la compilation
- [ ] #6 Les dates et les pluriels passent par Intl, sans nouvelle dépendance d'exécution
- [ ] #7 Le français de l'interface utilise l'écriture inclusive avec le point médian (en cas de doute sur une forme, demander)
- [ ] #8 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #9 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
