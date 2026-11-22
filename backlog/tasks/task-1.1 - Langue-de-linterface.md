---
id: TASK-1.1
title: Langue de l'interface
status: Done
assignee:
  - '@claude'
created_date: '2026-11-22T12:28:27Z'
updated_date: '2026-11-22T14:19:13Z'
labels:
  - ready-for-agent
dependencies: []
references:
  - interface-language
  - page-interface
modified_files:
  - e2e/language.spec.ts
  - package.json
  - package-lock.json
  - src/domain/locale.ts
  - src/domain/locale.test.ts
  - src/application/ports.ts
  - src/application/language.ts
  - src/application/language.test.ts
  - src/adapters/driven/language-preference/in-memory-language-preference.ts
  - src/adapters/driven/language-preference/storage-language-preference.ts
  - src/adapters/driven/language-preference/storage-language-preference.test.ts
  - src/adapters/driving/i18n/fr.ts
  - src/adapters/driving/i18n/en.ts
  - src/adapters/driving/i18n/dictionary.ts
  - src/adapters/driving/i18n/translator.ts
  - src/adapters/driving/i18n/translator.test.ts
  - src/adapters/driving/ui/shell.ts
  - src/adapters/driving/ui/shell.test.ts
  - src/main.ts
  - src/styles.css
  - GLOSSARY.md
  - groma/config.json
  - groma/flows/open-wiki3.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/composition-root.md
  - >-
    groma/systems/wiki3/containers/wiki3-web-app/components/interface-language.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/page-interface.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/page-use-cases.md
  - groma/systems/wiki3/containers/wiki3-web-app/container.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/language.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/locale.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/ports.md
  - groma/systems/wiki3/containers/wiki3-web-app/components/shell.md
  - >-
    groma/systems/wiki3/containers/wiki3-web-app/components/storage-language-preference.md
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
- [x] #1 L'interface s'ouvre en français quand le navigateur est en français, et en anglais pour toute autre langue non gérée
- [x] #2 Un sélecteur de langue toujours visible change la langue de l'interface immédiatement
- [x] #3 Le choix de langue est mémorisé dans le navigateur et retrouvé au rechargement, via un port de préférence de langue avec un faux adaptateur en mémoire
- [x] #4 Le choix de langue n'est jamais écrit dans une sauvegarde, et la langue de l'interface est indépendante de celle de la page
- [x] #5 Les dictionnaires fr (référence) et en ont le même type : une clé manquante dans une langue fait échouer la compilation
- [x] #6 Les dates et les pluriels passent par Intl, sans nouvelle dépendance d'exécution
- [x] #7 Le français de l'interface utilise l'écriture inclusive avec le point médian (en cas de doute sur une forme, demander)
- [x] #8 Scénario Playwright écrit avant le code et vu en échec, vert sur Chromium, Firefox et WebKit, tailles ordinateur et téléphone
- [x] #9 Aucune violation axe (WCAG 2.2 AA) sur chaque écran touché
- [x] #10 Couverture, mutation, taille du build et complexité ESLint ne baissent pas (npm run check passe)
<!-- AC:END -->

## Implementation Plan

<!-- SECTION:PLAN:BEGIN -->
1. E2E e2e/language.spec.ts written first and seen failing
2. Add happy-dom devDependency (DOM unit tests, no runtime dep)
3. domain/locale (resolveLocale, isLocale) with property test
4. application ports + startLocale/selectLocale with in-memory fake
5. driven storage-language-preference (injected Storage, own key)
6. driving i18n: fr (reference) / en same type, translator with Intl
7. driving ui shell with language select, focus kept, html lang updated
8. wire main.ts, styles, e2e green
9. GLOSSARY entry, npm run check

10. DOM unit tests use jsdom (devDependency) instead of happy-dom, per the user's choice
<!-- SECTION:PLAN:END -->

## Implementation Notes

<!-- SECTION:NOTES:BEGIN -->
Evidence: e2e/language.spec.ts seen failing (9/9, selector not found) before any production code, then 65 e2e passed on chromium, firefox, webkit, mobile-chrome, mobile-safari (incl. axe WCAG 2.2 AA in fr and en). Unit: 35 tests, coverage 100%, Stryker 100%, build 1.22 kB (limit 60 kB), knip/arch/lint/tsc clean. AC5 proven by removing an en key: tsc TS2741. Caveats: AC4 holds for the current code (preference lives only under localStorage key wiki3.language, Page has no locale field) but no backup exists yet, so TASK-1.8 must assert that the backup JSON has no language key. AC7: the only French text is the label 'Langue', no gendered form, so no point median was needed yet; later tickets must apply the rule.
<!-- SECTION:NOTES:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Interface language is in place: browser language detection (fr, else en), an always-visible native select that switches texts and html lang at once while keeping focus, and a choice remembered in localStorage (key wiki3.language) through a LanguagePreference port with an in-memory fake. fr is the reference dictionary and en has the same type; dates and plurals use Intl via the translator (no runtime dependency). jsdom was added as a devDependency for DOM unit tests. npm run check passes. Follow-ups: TASK-1.8 must test that the backup has no language key; inclusive writing applies to the French texts of the next tickets.
<!-- SECTION:FINAL_SUMMARY:END -->
