---
type: C4 Component
title: Rendu Markdown
description: 'Prévu : adaptateur qui transforme le Markdown en HTML sûr'
status: draft
groma:
  id: markdown-renderer
  parent: wiki3-web-app
  technology: TypeScript, markdown-it
---

Adaptateur sortant (adapters/driven), pas encore écrit. Il implémente le port MarkdownRenderer avec markdown-it configuré sans HTML brut ; seules les images en https sont acceptées (ADR 0004). L'application n'importe jamais markdown-it.
