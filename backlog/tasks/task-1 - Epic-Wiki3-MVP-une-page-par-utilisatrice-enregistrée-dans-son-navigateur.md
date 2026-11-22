---
id: TASK-1
title: 'Epic : Wiki3 MVP, une page par utilisatrice enregistrée dans son navigateur'
status: To Do
assignee: []
created_date: '2026-11-21T20:26:10Z'
updated_date: '2026-11-22T12:38:02Z'
labels:
  - ready-for-agent
dependencies: []
priority: high
type: feature
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
## Problem Statement

Une utilisatrice veut avoir sa propre page, à son nom, dans l'esprit d'une page Wikipédia, sans créer de compte, sans serveur et sans outil lourd. Aujourd'hui, elle n'a aucun moyen simple d'écrire une page mise en forme, de la modifier, de la garder dans son navigateur et d'en conserver des copies sur son ordinateur. Les wikis existants sont trop lourds pour cet usage : ils demandent un compte, un serveur, une recherche, un historique, des discussions. Le dépôt ne contient pour l'instant que la coquille de l'application et le début du domaine (la page et son titre).

## Solution

Wiki3 est un site statique très léger. Chaque utilisatrice a une seule page : un titre (son nom) et un corps écrit en Markdown. La page est enregistrée dans son navigateur. Elle la lit dans l'onglet **Lire**, la change dans l'onglet **Modifier**, et la valide avec **Enregistrer**. Elle peut télécharger des **sauvegardes** (fichiers JSON), en charger une pour remplacer sa page, et supprimer sa page. L'interface existe en français et en anglais, avec l'internationalisation prévue pour d'autres langues, et son apparence est très proche de Wikipédia (sans son logo ni sa marque).

## User Stories

### Premier lancement
1. As an utilisatrice, I want to see two clear choices when I open the app with no page, **Créer ma page** and **Charger une sauvegarde**, so that I know how to start.
2. As an utilisatrice, I want to create my page by entering my name, so that my page carries my name as its title.
3. As an utilisatrice, I want my page to be saved immediately with an empty body when I create it, so that I do not lose it if I close the tab.
4. As an utilisatrice, I want the app to open on **Modifier** right after I create my page, so that I can write my first line without searching for a button.
5. As an utilisatrice, I want to be refused when I try to create my page with an empty name (spaces only included), so that my page always has a title.
6. As an utilisatrice, I want a clear message in my language explaining why my name is refused, so that I know what to fix.
7. As an utilisatrice, I want to load a backup instead of creating a page, so that I can recover a page I wrote earlier.

### Lire
8. As an utilisatrice, I want my page displayed formatted (headings, bold, lists, links, quotes, tables), so that it reads like an encyclopedia page.
9. As an utilisatrice, I want my title shown as a large serif heading with a line under it, so that the page looks like Wikipedia.
10. As an utilisatrice, I want to see the date of last modification at the bottom of my page, so that I know when it was last saved.
11. As an utilisatrice, I want that date shown in the format of my interface language, so that it is easy to read.
12. As an utilisatrice, I want a table of contents generated from my headings when my page has at least three headings, so that I can jump to a section.
13. As an utilisatrice, I want no table of contents when my page has fewer than three headings, so that short pages stay clean.
14. As an utilisatrice, I want images from `https` web addresses to display in my page, so that I can illustrate it.
15. As an utilisatrice, I want images from other kinds of address to be refused, so that my page and shared backups stay safe.
16. As an utilisatrice, I want raw HTML I type in the body shown as plain text, so that no script can ever run from my page or from a backup file.
17. As an utilisatrice, I want **Lire** to be the mode I land on when I open an existing page, so that I see my page first.
18. As an utilisatrice, I want my empty body to display without error, so that a new page looks fine.

### Modifier
19. As an utilisatrice, I want to switch to **Modifier** with a tab, so that I can change my title and body.
20. As an utilisatrice, I want to edit my title and my body in the same screen, so that I do not need several steps.
21. As an utilisatrice, I want to change my name (the title) whenever I want, so that my page stays correct if my name changes.
22. As an utilisatrice, I want my body to be allowed empty, so that I can save a draft with nothing written yet.
23. As an utilisatrice, I want **Enregistrer** to validate my changes in my browser, so that they are kept.
24. As an utilisatrice, I want **Enregistrer** to refuse an empty title, so that my page always keeps its name.
25. As an utilisatrice, I want the date of last modification to be updated at each save, so that it always tells the truth.
26. As an utilisatrice, I want to return to **Lire** after saving, so that I see the result of my changes.
27. As an utilisatrice, I want **Annuler** to bring me back to **Lire** without asking when I changed nothing, so that I am not bothered.
28. As an utilisatrice, I want **Annuler** to ask me to confirm when I changed something, so that I never lose work by mistake.
29. As an utilisatrice, I want to keep editing if I answer no to the confirmation, so that my text is still there.
30. As an utilisatrice, I want my last saved version to be unchanged after I cancel, so that cancelling really discards the changes.
31. As an utilisatrice, I want only the last saved version to be kept, so that the app stays simple (no history).

### Sauvegardes
32. As an utilisatrice, I want to download a backup of my page as a JSON file, so that I keep a copy on my computer.
33. As an utilisatrice, I want the backup file named after my title and today's date (for example `elisabeth-2026-11-21.json`, without accents or spaces), so that I can tell several backups apart.
34. As an utilisatrice, I want the backup to contain a format version number, my title, my body and my date of last modification, so that it can be read by future versions of the app.
35. As an utilisatrice, I want to load a backup from my computer, so that I can restore a page.
36. As an utilisatrice, I want the app to ask me to confirm before a loaded backup replaces my current page, so that I do not overwrite my work by accident.
37. As an utilisatrice, I want my current page untouched if I decline the confirmation, so that nothing is lost.
38. As an utilisatrice, I want a file that is not valid JSON to be refused with a clear message, so that I understand the problem.
39. As an utilisatrice, I want a JSON file missing a title or a body to be refused with a clear message, so that a broken file never replaces my page.
40. As an utilisatrice, I want a backup written with an older format version to be read and upgraded, so that my old backups keep working.
41. As an utilisatrice, I want a backup from a newer version of the app than mine to be refused with a clear message, so that it is not misread.
42. As an utilisatrice, I want my current page to stay untouched when a file is refused, so that a bad file never destroys anything.
43. As an utilisatrice, I want a backup to be loadable whatever language my interface uses, so that language is never a barrier.

### Suppression
44. As an utilisatrice, I want a **Supprimer ma page** button, so that I can start from scratch.
45. As an utilisatrice, I want a confirmation before my page is deleted, so that I do not delete it by accident.
46. As an utilisatrice, I want that confirmation to offer **Télécharger une sauvegarde**, so that I can keep a last copy.
47. As an utilisatrice, I want the confirmation to remind me that backup files already downloaded stay on my computer and that I must delete them myself, so that I understand what is really erased.
48. As an utilisatrice, I want to return to the first-launch choices after deletion, so that I can create a new page or load a backup.
49. As an utilisatrice, I want my page to be erased from my browser's storage when I confirm, so that nothing is left behind.

### Erreurs de stockage
50. As an utilisatrice, I want a visible error message when my browser refuses to save (storage full or disabled), so that I know my page was not saved.
51. As an utilisatrice, I want to stay in **Modifier** with my text intact when saving fails, so that I never lose what I just wrote.
52. As an utilisatrice, I want the error message to offer **Télécharger une sauvegarde** instead, so that I can still keep my work.
53. As an utilisatrice, I want a page saved in my browser that no longer matches the expected format to be handled like an invalid backup, so that a corrupted storage never breaks the app.

### Langue
54. As an utilisatrice, I want the interface to open in my browser's language when the app supports it, so that it speaks my language from the start.
55. As an utilisatrice, I want the interface in English when my browser's language is not supported, so that I always get a readable interface.
56. As an utilisatrice, I want a language selector that is always visible, so that I can change language whenever I want.
57. As an utilisatrice, I want my language choice remembered in my browser, so that I do not have to choose it again.
58. As an utilisatrice, I want the language of the interface to be independent of the language of my page, so that I can write in any language.
59. As an utilisatrice, I want dates and plurals to follow my interface language, so that texts read naturally.
60. As an utilisatrice, I want the French interface to use inclusive writing with the point médian, so that the text speaks to everyone.
61. As a contributor, I want to add a language by adding one translation dictionary, so that the app can grow to other languages without changing its logic.
62. As a contributor, I want the build to fail when a language is missing a text, so that no screen shows a missing translation.

### Apparence et accessibilité
63. As an utilisatrice, I want an interface very close to Wikipedia's current look (header, tabs **Lire** and **Modifier**, one reading column, footer), so that it feels familiar.
64. As an utilisatrice, I want no logo or brand from Wikipedia, so that the app has its own identity.
65. As an utilisatrice, I want no search bar, discussion tab, history tab or internal `[[ ]]` links, so that nothing suggests a feature that does not exist.
66. As an utilisatrice, I want readable system fonts (a serif for titles, a sans-serif for text), so that the page loads fast and looks right.
67. As an utilisatrice, I want to use the app on my phone, so that I can read and write anywhere.
68. As an utilisatrice who uses a keyboard or a screen reader, I want every screen to meet WCAG 2.2 level AA, so that I can use the app without a mouse or without sight.
69. As an utilisatrice, I want confirmation dialogs I can answer from the keyboard, so that I can move without a mouse.
70. As an utilisatrice, I want the app to work in the latest Chrome, Firefox and Safari, so that I can use the browser I already have.

## Implementation Decisions

- **Architecture** (ADR 0002) : le métier est séparé en trois couches. Le domaine contient les règles pures (page, titre obligatoire, erreurs sous forme de codes comme « titre requis », jamais de texte). L'application contient les cas d'usage et les ports. Les adaptateurs « driven » gèrent le stockage du navigateur, le rendu Markdown, la lecture et le téléchargement de fichiers et l'horloge ; les adaptateurs « driving » gèrent l'interface et l'internationalisation. Un seul endroit branche tout.
- **Cas d'usage à construire** : créer la page, enregistrer la page, annuler l'édition (avec détection des modifications), supprimer la page, télécharger une sauvegarde, charger une sauvegarde, ouvrir l'application (page enregistrée ou premier lancement), choisir la langue.
- **Ports à définir** : stockage de la page, horloge (le temps passe toujours par ce port), rendu Markdown, lecture et écriture de fichiers de sauvegarde, préférence de langue. Chaque port a un faux adaptateur en mémoire pour les tests, y compris un stockage qui échoue.
- **Domaine** : le titre est coupé aux extrémités et refusé s'il est vide ; le corps peut être vide ; la date de dernière modification est fournie par l'horloge à chaque enregistrement et stockée dans un format neutre (ISO).
- **Modes** : **Lire** est le mode par défaut ; **Modifier** est le seul endroit où le titre et le corps changent ; l'enregistrement et l'annulation ramènent à **Lire**.
- **Création** : la page est enregistrée avec un corps vide avant l'ouverture de **Modifier**.
- **Annulation** : la confirmation n'apparaît que si le titre ou le corps diffère de la dernière version enregistrée.
- **Format de sauvegarde** (ADR 0006) : JSON avec un numéro de version, le titre, le corps et la date de dernière modification. Chaque version a son schéma ; au chargement, l'adaptateur valide le fichier puis applique les migrations dans l'ordre. Un fichier invalide ou plus récent que l'application est refusé sans toucher à la page actuelle. Le même mécanisme s'applique à la page enregistrée dans le navigateur. La version actuelle est la version 1.
- **Nom de fichier** : `<titre>-<date>.json`, avec le titre sans accents ni espaces et la date au format AAAA-MM-JJ.
- **Chargement d'une sauvegarde** : le remplacement de la page actuelle passe par une confirmation.
- **Suppression** : confirmation avec bouton de téléchargement d'une sauvegarde et avertissement sur les fichiers déjà téléchargés ; la page est effacée du stockage du navigateur, puis l'application revient au premier lancement.
- **Erreur de stockage** : message visible en haut de la page, mode **Modifier** conservé, texte intact, proposition de télécharger une sauvegarde.
- **Rendu Markdown et sécurité** (ADR 0004) : le HTML brut est affiché comme du texte ; les images n'acceptent que les adresses `https:` ; une Content Security Policy est déclarée dans la page construite (pas en en-tête HTTP).
- **Images** : pour le MVP, uniquement par adresse web. Pas d'import depuis l'ordinateur, donc aucune image dans la sauvegarde.
- **Table des matières** : générée à partir des titres Markdown, affichée à partir de trois titres.
- **Internationalisation** (ADR 0005) : dictionnaires typés (le français sert de référence, l'anglais doit avoir les mêmes clés, sinon la compilation échoue) ; dates et pluriels par les fonctions du navigateur ; langue détectée dans le navigateur avec repli sur l'anglais ; sélecteur toujours visible ; choix mémorisé dans le navigateur et jamais dans la sauvegarde.
- **Textes français de l'interface** : écriture inclusive avec le point médian ; en cas de doute sur une forme, on demande à la personne qui commande le projet.
- **Interface** (ADR 0003) : DOM natif, sans framework ; onglets **Lire** et **Modifier**, formulaire, table des matières, boîtes de dialogue.
- **Apparence** : style très proche de Wikipédia (Vector), polices système, sans recherche, discussion, historique ni liens internes, sans logo ni marque Wikipédia ; utilisable sur un écran de téléphone.
- **Hébergement** (ADR 0001) : site statique ; le choix de l'hébergeur et le déploiement ne font pas partie de cette spec.
- **Navigateurs** (ADR 0009) : dernières versions de Chrome, Firefox et Safari, ordinateur et mobile.
- **Nouvelle dépendance d'exécution** : aucune nouvelle sans ADR. Le Markdown (markdown-it) et la lecture des sauvegardes (Zod) sont déjà décidés dans les ADR 0004 et 0006.

## Testing Decisions

- **Un bon test** vérifie ce que l'utilisatrice voit ou obtient, pas la façon dont le code est écrit. Il survit à un changement de la structure interne.
- **TDD sans exception** (ADR 0010) : pour chaque récit, un test d'abord, lancé et montré en échec pour la bonne raison, puis le minimum de code, puis le nettoyage.
- **Niveau principal : les scénarios Playwright** par l'interface réelle, un par comportement des récits (premier lancement, création, lecture, modification, enregistrement, annulation avec et sans changement, sauvegardes, suppression, langue, apparence). Ils tournent sur Chromium, Firefox et WebKit, en taille ordinateur et en taille téléphone, et vérifient l'accessibilité (axe, WCAG 2.2 AA) sur chaque écran.
- **Niveau secondaire : les cas d'usage avec de faux adaptateurs en mémoire**, uniquement pour ce qu'un navigateur reproduit mal : stockage plein ou désactivé, page enregistrée corrompue, sauvegarde d'une version trop récente, migrations de version. Le domaine garde ses tests unitaires.
- **Tests basés sur des propriétés** (fast-check) pour le titre (espaces, vides, caractères spéciaux), le nom de fichier de sauvegarde et la lecture des sauvegardes.
- **Exemples existants** : les scénarios de la coquille de l'application (chargement sans erreur, refus des scripts en ligne, politique de sécurité des images, accessibilité) et les tests du domaine pour la page.
- **Seuils qui ne baissent pas** : couverture (100 % sur le domaine et l'application), tests de mutation Stryker (70 % au minimum, qui ne fait que monter), limites de complexité, taille du build.

## Out of Scope

- Plusieurs pages, plusieurs utilisatrices, comptes, connexion, partage entre personnes.
- Historique des versions, onglet **Discussion**, barre de recherche, liens internes `[[ ]]`, catégories, boîtes d'information.
- Import d'images depuis l'ordinateur et images dans la sauvegarde.
- Fonctionnement complet hors ligne.
- Choix de l'hébergeur et déploiement.
- Langues autres que le français et l'anglais, et leurs formes inclusives (à demander au moment de chaque ajout).
- Docker.
- Un éditeur riche (WYSIWYG) : l'édition se fait en Markdown.

## Further Notes

- Le vocabulaire est celui de `GLOSSARY.md` : utilisatrice, page, titre, corps, **Lire**, **Modifier**, **Enregistrer**, sauvegarde, date de dernière modification. Dans les documents et les échanges, on dit « l'utilisatrice » ; dans le français de l'interface, l'écriture est inclusive avec le point médian.
- Les noms de code sont en anglais et suivent la ligne _Code_ du glossaire (ADR 0007).
- À trancher à l'implémentation, sans changer la décision : le nom de fichier quand le titre ne contient aucun caractère utilisable après suppression des accents et des espaces ; le texte exact des messages d'erreur.
- La pile technique a été fixée dans les ADR 0001 à 0010 ; cette spec ne la change pas.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [ ] #1 Au premier lancement, l utilisatrice voit Créer ma page et Charger une sauvegarde ; créer sa page demande un titre non vide et ouvre Modifier avec un corps vide déjà enregistré
- [ ] #2 Lire affiche le corps en Markdown (HTML brut en texte, images https seulement), la date de dernière modification et une table des matières à partir de trois titres
- [ ] #3 Modifier permet de changer titre et corps ; Enregistrer refuse un titre vide, met à jour la date et revient à Lire ; Annuler ne demande confirmation que s il y a des changements
- [ ] #4 Télécharger une sauvegarde produit un fichier JSON versionné nommé titre-date.json sans accents ni espaces
- [ ] #5 Charger une sauvegarde remplace la page après confirmation ; un fichier invalide ou plus récent est refusé sans toucher à la page actuelle ; les anciennes versions sont migrées
- [ ] #6 Supprimer ma page demande confirmation, propose de télécharger une sauvegarde, avertit que les fichiers déjà téléchargés restent sur l ordinateur, efface le stockage et revient au premier lancement
- [ ] #7 Si le navigateur refuse d enregistrer, un message s affiche, le texte saisi est conservé et le téléchargement d une sauvegarde est proposé
- [ ] #8 L interface est en français (inclusif avec point médian) et en anglais, détecte la langue du navigateur, a un sélecteur toujours visible et ne stocke pas la langue dans la sauvegarde
- [ ] #9 L apparence est très proche de Wikipédia sans son logo ni sa marque, utilisable sur téléphone, sans violation d accessibilité WCAG 2.2 AA détectée par axe
- [ ] #10 Chaque comportement a un scénario Playwright (Chromium, Firefox, WebKit) écrit avant le code, et les seuils de couverture, de mutation et de taille ne baissent pas
<!-- AC:END -->
