---
id: TASK-1.11
title: Migrations de version et page enregistrée illisible
status: To Do
assignee: []
created_date: '2026-11-22T12:29:12Z'
labels:
  - ready-for-agent
dependencies:
  - TASK-1.9
parent_task_id: TASK-1
priority: high
type: feature
ordinal: 12000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Le format de sauvegarde va évoluer : les anciennes sauvegardes doivent rester lisibles, et un stockage du navigateur abîmé ne doit jamais casser l'application (ADR 0006). La version actuelle du format est la 1 ; le mécanisme est donc testé avec de faux anciens schémas. Récits 40, 53 de TASK-1.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Le chargement valide le fichier avec le schéma de sa version puis applique les migrations dans l'ordre jusqu'à la version actuelle
- [ ] #2 Une sauvegarde d'une version plus ancienne est lue et mise à niveau (testé avec de faux schémas anciens)
- [ ] #3 La page enregistrée dans le navigateur est lue par le même mécanisme de validation et de migration
- [ ] #4 Une page enregistrée qui ne correspond plus au format est traitée comme une sauvegarde invalide : message clair, l'application reste utilisable et propose de créer une page ou de charger une sauvegarde
- [ ] #5 Tests unitaires des cas d'usage avec faux adaptateurs : page corrompue, version trop récente, chaîne de migrations
- [ ] #6 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [ ] #7 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [ ] #8 Textes en français (inclusif, point médian) et en anglais, sans clé manquante
- [ ] #9 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->
