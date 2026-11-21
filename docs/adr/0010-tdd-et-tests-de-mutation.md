# TDD et tests de mutation dès le départ

Tout le code est écrit en TDD : un test qui échoue, le minimum de code pour le faire passer, puis le nettoyage. Une fonctionnalité commence par un scénario Playwright, puis des tests unitaires sur les cas d'usage et le domaine.

Comme aucun outil ne prouve qu'un test a été écrit en premier, la solidité des tests est contrôlée par plusieurs couches : couverture des branches, règles de lint sur les tests (pas de test sans assertion), assertions obligatoires dans Vitest, tests basés sur des propriétés (fast-check), et tests de mutation avec Stryker sur `domain/` et `application/`, en mode incrémental. Le seuil de Stryker commence à 70 % et ne fait que monter.
