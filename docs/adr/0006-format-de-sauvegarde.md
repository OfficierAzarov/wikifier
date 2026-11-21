# Format de sauvegarde versionné, lu par Zod dans un adaptateur

Une sauvegarde est un fichier JSON nommé `<titre>-<date>.json` qui contient un numéro de version, le titre, le corps et la date de dernière modification. Chaque version du format a son schéma Zod ; au chargement, l'adaptateur valide le fichier puis applique les migrations dans l'ordre (v1 → v2 → …) jusqu'à la version actuelle. Un fichier invalide, ou venant d'une version plus récente que l'application, est refusé sans toucher à la page actuelle. Le même mécanisme s'applique à la page enregistrée dans le navigateur.

Zod plutôt qu'une validation écrite à la main : le format va s'enrichir, et un schéma déclaratif produit le type TypeScript, ce qui empêche le type et les vérifications de diverger. Le format JSON est un détail technique : Zod vit dans l'adaptateur, et le domaine reste sans dépendance.
