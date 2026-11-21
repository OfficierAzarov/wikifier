# Pas de Docker pour l'instant

Le produit est un dossier de fichiers statiques : Docker ne sert ni en production ni pour le développement (Node et Vite suffisent), et la CI fournit déjà un environnement propre. La reproductibilité vient de la version de Node fixée (`.nvmrc`, `engines`) et de `package-lock.json`.

À reconsidérer si l'on ajoute des tests de captures d'écran, dont le rendu des polices varie selon le système : on utiliserait alors l'image officielle de Playwright pour ces tests seulement.
