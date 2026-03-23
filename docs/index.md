---
title: "France-IOI knowledge base — documentation hub"
description: "Primary entry for France-IOI: scope of this corpus, links to curated topic pages, and pointers to canonical technical depth."
date: 2026-03-23
doc_type: reference
status: current
audience: agent-default
---

# France-IOI knowledge base — documentation hub

This page is the **primary entry** for curated Markdown in this repository—use it for **navigation** and **scope**. Human readers and automated agents both start here; topic pages assume you may land from this index first.

## What belongs here vs elsewhere

**In this knowledge base**

- **Governed business rules** and domain behavior as curated for **France-IOI** software (including **Algorea** as a major project slice and room for other initiatives).
- **Cross-boundary behavior** (for example how frontend, backend, and operations interact at the edges).
- **Operations essentials** when they belong in governed docs for this corpus (not a second home for full infra depth already covered in engineer-facing docs).

**Not default-path material for this repo**

- **Per-application architecture** (folder layouts, implementation detail): use the **application repositories**.
- **Backend depth, database, migrations, Lambda, propagation**: use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** (source: sibling repo `algorea-devdoc`).
- **API contracts and OpenAPI-published surfaces**: use official **OpenAPI** and DevDoc—this corpus does **not** duplicate full API reference material.

That split keeps **curated cross-cutting truth** here and **engineer-facing technical depth** in DevDoc and standard API artifacts.

## Curated pages

Every **default-path** topical page under `docs/` (excluding a future `docs/archive/` until it exists) is listed here. Link text describes what you get on the destination page.

| Page | What it covers |
|------|----------------|
| [Default path vs archive — how curated pages relate to optional archive material](./default-vs-archive-split.md) | Default consultation path versus opt-in archive; summary with link to full research |
| [Structure contract — Markdown and front matter rules for `docs/`](./structure-contract.md) | YAML front matter, heading ladder, and conventions so tools and agents parse pages consistently |
| [Algorea-linked repositories — map of related repositories](./algorea-linked-repositories.md) | How this knowledge base sits next to Algorea application and documentation repositories |
| [Algorea frontend — Angular app overview, routes, and folders](./algorea-frontend.md) | AlgoreaFrontend structure, routing, and how to navigate the codebase |

## Canonical technical documentation

- **Published:** [https://france-ioi.github.io/algorea-devdoc/](https://france-ioi.github.io/algorea-devdoc/)
- **Local clone:** `../algorea-devdoc` (Jekyll / Just the Docs). Example backend topics: [Lambda notes](https://france-ioi.github.io/algorea-devdoc/backend/lambda.html) (source: `backend/lambda.md`).

## Layout on disk

Paths below are relative to the **parent directory** of this repo (`knowledge-base`): `../` from `docs/` is the `France-IOI` workspace root on a typical developer machine.

## Keeping this index current

When you add a **new topical Markdown page** under `docs/` that should be part of the **default, discoverable** consultation path, include **in the same pull request** an update to **this file** (`docs/index.md`)—usually a new row in **Curated pages**—so the entry path stays complete as the information architecture grows.

If a page is intentionally **not** listed here (for example **draft** material or a **non-default** audience), state that in the page’s YAML front matter (for example `status: draft` or `audience:` values per [structure contract](./structure-contract.md)) and **do not** present it as default-path truth. Do not leave **discoverable** curated pages off this index without that rationale.

---

**Contributing:** A full contribution guide is planned as **`CONTRIBUTING.md`** or **`docs/contributing.md`**. Until it is published, follow [structure contract](./structure-contract.md) when adding or editing curated documentation.
