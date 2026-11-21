# Wiki3

Un clone très léger de Wikipédia : une page par utilisatrice, enregistrée dans son navigateur. Le vocabulaire est dans `GLOSSARY.md`, les décisions dans `docs/adr/`. Lis-les avant de commencer.

## Commandes

- `npm run dev` : serveur de développement.
- `npm run check:fast` : format, lint, types, architecture, tests unitaires et couverture. À lancer avant de rendre la main.
- `npm run check` : tout, y compris knip, build, taille, tests de bout en bout (5 navigateurs) et tests de mutation. C'est ce que lance la CI.
- `npm test`, `npm run test:e2e`, `npm run test:mutation` : chaque niveau de test séparément.

## Règles de travail

- **TDD, sans exception** : écrire le test, le lancer et montrer qu'il échoue pour la bonne raison, écrire le minimum de code, puis nettoyer. Une fonctionnalité commence par un scénario dans `e2e/`, puis des tests unitaires.
- **Architecture hexagonale** (`docs/adr/0002-architecture-hexagonale.md`) : `domain/` ne dépend de rien, `application/` ne dépend que de `domain/` et passe par des ports, un adaptateur n'en importe jamais un autre, `src/main.ts` branche tout. L'heure courante passe par un port `Clock`.
- **Les seuils ne baissent pas** : couverture, Stryker, taille du build, limites de complexité ESLint. Si l'un bloque, on simplifie le code ou on renforce les tests, et on ne désactive pas la règle sans le demander.
- **Nouvelle dépendance d'exécution** : seulement avec un ADR.
- **Décisions difficiles à défaire** : proposer un ADR dans `docs/adr/` (format court, en français).

## Langue

- Code, commentaires et messages de commit en anglais, avec les noms donnés par la ligne _Code_ de `GLOSSARY.md`.
- Documents du projet (glossaire, ADR) et échanges en français ; dire « l'utilisatrice ».
- Textes français de l'interface : écriture inclusive avec le point médian (« utilisateur·ice »). En cas de doute sur une forme, demander.
