# Sécurité du contenu : HTML brut en texte, images https, CSP

Le corps est rendu par markdown-it avec `html: false` : le HTML brut écrit par l'utilisatrice est affiché comme du texte, jamais interprété. Les images ne sont acceptées que depuis une adresse `https:` (markdown-it accepte par défaut certaines images `data:`, ce qu'on désactive).

En deuxième ligne de défense, une Content Security Policy est déclarée dans une balise `<meta>` du HTML construit (pas en en-tête HTTP, pour ne dépendre d'aucun hébergeur). Elle n'est pas appliquée au serveur de développement, dont le rechargement à chaud a besoin de connexions et de scripts que la politique interdit.
