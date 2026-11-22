---
type: C4 Component
title: 'Cas d''usage : Page'
description: 'Prévu : cas d''usage de la page, derrière des ports'
status: draft
groma:
  id: use-cases-page
  parent: wiki3-web-app
  technology: TypeScript
  group: Application
---

Couche application (ADR 0002), pas encore écrite. Elle porte les cas d'usage de la page : ouvrir l'application, créer, enregistrer, annuler, télécharger ou charger une sauvegarde, supprimer la page. Elle ne dépend que du domaine et passe par des ports (stockage de la page, horloge, fichiers de sauvegarde, rendu Markdown), testés avec de faux adaptateurs en mémoire. Le choix de la langue a déjà son propre cas d'usage (Choix de la langue).
