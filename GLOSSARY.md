# Wiki3

Un clone très léger de Wikipédia : chaque utilisatrice a une seule page, à son nom, qu'elle peut modifier. La page reste dans le navigateur de l'utilisatrice, sans compte ni serveur.

Le code est en anglais : la ligne _Code_ donne le nom à utiliser pour chaque terme (voir `docs/adr/0007-code-en-anglais.md`).

## Language

**Utilisatrice**:
La personne qui ouvre l'application. Elle n'a pas de compte : elle est identifiée uniquement par la page qu'elle charge ou crée.
_Code_: `user` (aucune entité dans le code)
_Avoid_: Utilisateur, user, compte, membre, éditeur

**Page**:
Le contenu unique d'une utilisatrice : un titre et un corps en Markdown. Une utilisatrice n'a accès qu'à sa propre page.
_Code_: `Page`
_Avoid_: Article, fiche, profil

**Titre**:
Le nom de l'utilisatrice, qui est aussi le nom de sa page. Obligatoire et modifiable à tout moment.
_Code_: `title`
_Avoid_: Nom d'utilisateur, pseudo

**Corps**:
Le texte de la page, écrit en Markdown. Il peut être vide.
_Code_: `body`
_Avoid_: Contenu, texte, article

**Lire**:
Le mode où la page s'affiche mise en forme, sans pouvoir la changer. C'est le mode par défaut.
_Code_: `read` (mode)
_Avoid_: Afficher, consulter, aperçu

**Modifier**:
Le mode où l'utilisatrice change le titre et le corps de sa page. Elle en sort en enregistrant ou en annulant.
_Code_: `edit` (mode)
_Avoid_: Éditer, éditeur

**Date de dernière modification**:
Le moment du dernier enregistrement de la page, affiché en bas de la page et conservé dans la sauvegarde.
_Code_: `lastModified`
_Avoid_: Date de mise à jour, horodatage

**Enregistrer**:
Valider les modifications de la page dans le navigateur de l'utilisatrice. Seule la dernière version enregistrée est conservée (pas d'historique).
_Code_: `save`
_Avoid_: Sauvegarder, publier, valider

**Sauvegarde**:
Un fichier JSON téléchargé qui contient la page enregistrée à un instant donné. L'utilisatrice peut en avoir plusieurs et en charger une, ce qui remplace sa page actuelle après confirmation.
_Code_: `Backup` (télécharger : `downloadBackup`, charger : `loadBackup`)
_Avoid_: Version, révision, export
