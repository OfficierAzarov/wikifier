# Architecture hexagonale

Le code est découpé en `domain/` (règles métier pures), `application/` (cas d'usage et ports, c'est-à-dire des interfaces TypeScript) et `adapters/` (`driven/` pour le stockage, le Markdown, les fichiers, l'horloge ; `driving/` pour l'interface et l'internationalisation). `src/main.ts` est le seul endroit qui branche les adaptateurs sur les ports.

Ce découpage permet de tester les cas d'usage en TDD avec de faux adaptateurs en mémoire (par exemple un stockage qui échoue) et de remplacer une bibliothèque sans toucher au métier. Il reste léger : pas de conteneur d'injection, des fonctions et des interfaces plutôt que des classes.

## Consequences

- dependency-cruiser fait échouer la CI si `domain/` importe autre chose que `domain/`, si `application/` importe un adaptateur, ou si un adaptateur en importe un autre.
- ESLint interdit les objets du navigateur (`window`, `document`, `localStorage`…) dans `domain/` et `application/`.
- Le domaine renvoie des codes d'erreur (`title-required`) ; c'est l'interface qui les traduit.
