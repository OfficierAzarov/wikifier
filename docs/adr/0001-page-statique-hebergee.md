# Page statique hébergée, sans serveur applicatif

Wiki3 est un site statique (HTML, CSS, JavaScript) servi par un hébergeur. Il n'y a ni serveur applicatif, ni compte, ni base de données : la page est enregistrée dans le navigateur de l'utilisatrice et les sauvegardes sont des fichiers JSON qu'elle charge depuis son disque. Le fonctionnement complet hors ligne n'est pas un objectif.

L'hébergeur n'est pas choisi : le build produit un dossier `dist/` déployable partout, et le déploiement reste une étape séparée de la CI. Critères pour choisir plus tard : en-têtes HTTP personnalisés, prévisualisation par pull request, nom de domaine.

## Considered Options

- Un fichier HTML unique ouvert en `file://` : écarté, car les modules JavaScript y sont bloqués et le comportement du stockage local varie selon les navigateurs.
