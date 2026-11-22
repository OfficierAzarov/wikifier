---
name: harness-diagram
description: "Génère docs/harness.html, un schéma interactif du harnais du projet (guides, hooks, CI, contrôles), et la règle qui le tient à jour."
disable-model-invocation: true
---

Le **harnais** est tout ce qui guide le code avant qu'il soit écrit et tout ce qui le contrôle ensuite, de l'écriture à la CI. Ce skill produit `docs/harness.html` : une page autonome dont le schéma SVG explique chaque élément au clic.

La page est écrite dans la langue de la documentation du projet. Le gabarit [`template.html`](template.html) contient la mécanique (CSS, SVG, script) et une disposition complète avec des textes à remplacer.

## 1. Explorer

Lis la configuration réelle, sans rien supposer. Fin de l'étape : chaque catégorie ci-dessous est relevée, ou notée absente.

- **Guides** lus avant d'écrire : `CLAUDE.md` / `AGENTS.md`, glossaire, ADR, skills, backlog, carte d'architecture.
- **Garde-fous locaux** : hooks de l'agent (par exemple `Stop`), hooks git (lefthook, husky…).
- **Commandes de contrôle** : scripts du `package.json` (ou Makefile, etc.) et ce que chacune enchaîne (format, lint, types, architecture, tests, couverture, mutation, taille de build, code mort, e2e…), avec l'endroit où elle se déclenche (agent, commit, push, CI).
- **CI** : workflows, navigateurs ou environnements, caches, artefacts.
- **Seuils chiffrés** : couverture, complexité, taille, mutation. Relève leurs valeurs dans les configurations.

## 2. Demander le thème

Demande : thème sombre ou thème clair ? Utilise l'outil de questions s'il existe, sinon pose la question dans le chat. Attends la réponse avant d'écrire.

## 3. Écrire la page

Copie `template.html` vers `docs/harness.html`, puis adapte-le. Fin de l'étape : plus aucun « À rédiger », « chemin/du/fichier » ni libellé générique ne subsiste.

- **Contenu** : remplace chaque libellé, chaque texte (2 ou 3 phrases) et chaque `where` (fichiers concernés) par ce que tu as relevé. Les textes reprennent les valeurs réelles des seuils.
- **Disposition** : le gabarit montre 6 guides, 5 moments, 9 garde-fous, une commande complète qui contient une commande rapide de 5 contrôles, et 5 contrôles réservés à la CI. Supprime les nœuds sans équivalent dans le projet, ajoute-en si besoin, et ajuste en même temps les liens du SVG (flèches et lignes), les cadres de zone et le `viewBox`. Une commande de contrôle absente du projet se retire avec ses nœuds.
- **Catégories** (`kind`) : `guide` (règle ou document), `step` (moment du cycle), `local` (garde-fou local), `fast` (contrôle de la commande rapide), `ci` (réservé à la CI).
- **Titre** : remplace « Le harnais du projet » par le nom du projet (balises `<title>` et `<h1>`).
- **Thème** : le gabarit est sombre. Pour le thème clair, remplace dans `:root` `color-scheme: dark` par `light` et les variables par celles du tableau.

| Variable        | Sombre (Monokai Soda)  | Clair                  |
| --------------- | ---------------------- | ---------------------- |
| `--bg`          | `#1a1a1a`              | `#fbfbf9`              |
| `--ink`         | `#f6f6ef`              | `#1c1e21`              |
| `--muted`       | `#a3a398`              | `#5b616b`              |
| `--line`        | `#8f908a`              | `#aeb3ba`              |
| `--card`        | `#232323`              | `#ffffff`              |
| `--card-bd`     | `#3e3d32`              | `#d5d8dd`              |
| `--guide-bd`    | `#66d9ef`              | `#3b72c4`              |
| `--guide-bg`    | `#1f3438`              | `#e3eefc`              |
| `--step-bd`     | `#8f908a`              | `#6b7280`              |
| `--step-bg`     | `#2a2a28`              | `#eceef1`              |
| `--local-bd`    | `#fd971f`              | `#b7791f`              |
| `--local-bg`    | `#3c2d1b`              | `#fdf0d5`              |
| `--fast-bd`     | `#a6e22e`              | `#2f855a`              |
| `--fast-bg`     | `#2b3a26`              | `#def3e4`              |
| `--ci-bd`       | `#ae81ff`              | `#6b46c1`              |
| `--ci-bg`       | `#30293c`              | `#ece5fa`              |
| `--accent`      | `#f92672`              | `#c2255c`              |
| `--zone-guide`  | `rgba(102,217,239,.06)` | `rgba(59,114,196,.06)` |
| `--zone-fast`   | `rgba(166,226,46,.06)` | `rgba(47,133,90,.07)`  |
| `--zone-ci`     | `rgba(174,129,255,.07)` | `rgba(107,70,193,.06)` |

Pour le thème clair, remplace aussi l'ombre de `.card` (`rgba(0, 0, 0, 0.5)`) par `rgba(0, 0, 0, 0.14)` et le commentaire de palette en tête du CSS.

## 4. Vérifier

Fin de l'étape : la page s'affiche dans un navigateur, la console est sans erreur, et un clic sur chaque nœud affiche une explication sans texte à compléter. Sans navigateur, extrais le script et lance `node --check`. Puis lance le formateur du projet sur le fichier.

## 5. Tenir la page à jour

Ajoute dans le fichier d'instructions du projet (`CLAUDE.md` ou `AGENTS.md`) une règle de ce type, adaptée au projet :

> **Le schéma du harnais suit le harnais** : `docs/harness.html` représente tout ce qui guide et contrôle le code. Dès qu'on modifie un de ces éléments, on met à jour le schéma dans le même changement (nœuds, textes, seuils chiffrés, liens). Sont concernés : <liste précise des fichiers et dossiers du harnais de ce projet>. Les nœuds sont dans le tableau `NODES` du script de la page. Les textes de la page ne doivent pas contredire la configuration réelle.

La liste nomme les fichiers réels que tu as relevés à l'étape 1, pas des catégories génériques.

## 6. Commit

Respecte les règles du projet (TDD, format des messages de commit, etc.). Ne commite que la page et la règle ajoutée, sans les autres modifications en cours, et ne pousse rien.
