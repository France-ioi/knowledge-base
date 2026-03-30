---
title: "France-IOI knowledge base — documentation hub"
description: "Primary entry for France-IOI: scope of this corpus, links to curated topic pages, and pointers to canonical technical depth."
date: 2026-03-25
doc_type: reference
status: current
audience: agent-default
permalink: /
nav_order: 1
---

# France-IOI knowledge base — documentation hub

This page is the **primary entry** for curated Markdown in this repository—use it for **navigation** and **scope**. Human readers and automated agents both start here; topic pages assume you may land from this index first.

## What belongs here vs elsewhere

**In this knowledge base**

- **Governed business rules** and domain behavior as curated for **France-IOI** software (including **Algorea** as a major project slice and room for other initiatives).
- **Cross-boundary behavior** (for example how frontend, backend, and operations interact at the edges).
- **Operations essentials** when they belong in governed docs for this corpus (not a second home for full infra depth already covered in engineer-facing docs).

### Operations and deployment (Algorea)

For **Algorea** MVP-scoped operations topics, deployment pointers, and an honest map of what is **in** this corpus versus **elsewhere**, use the curated hub **[Operations essentials](./algorea-ops.md)** (under the **[Algorea](./algorea.md)** section). It does **not** replace secret stores, cloud consoles, DevDoc, or per-repo pipelines.

**Not default-path material for this repo**

- **Per-application architecture** (folder layouts, implementation detail): use the **application repositories**.
- **Backend depth, database, migrations, Lambda, propagation**: use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** (source: sibling repo `algorea-devdoc`).
- **API contracts and OpenAPI-published surfaces**: use official **OpenAPI** and DevDoc—this corpus does **not** duplicate full API reference material.

That split keeps **curated cross-cutting truth** here and **engineer-facing technical depth** in DevDoc and standard API artifacts.

## Where API and backend depth live

Use this section when you need **contract-level HTTP detail**, **generated API reference**, or **backend implementation depth**—follow the links below instead of expecting that material in this repository.

- **Engineer-facing platform documentation:** **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** (published site; source in sibling repo `algorea-devdoc`)—backend structure, Lambda, database, auth, and related topics. Example: [Lambda notes](https://france-ioi.github.io/algorea-devdoc/backend/lambda/).
- **Generated HTTP API (OpenAPI-sourced):** **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)** on DevDoc is the **stable published** entry point for path/method-level contract documentation. **Source** Swagger/OpenAPI inputs and codegen are maintained in **application repositories** (for example **[AlgoreaFrontend](https://github.com/France-ioi/AlgoreaFrontend)** — `mocks/` tooling and `npm run generate-types-from-swagger` live with that codebase; see its README on GitHub). For how this knowledge base relates to that app and to DevDoc, see [Frontend](./algorea-frontend.md) (under [Algorea](./algorea.md)).

**This knowledge base is not the source of truth for generated HTTP or OpenAPI contracts.** Describe behavior and cross-boundary rules here; consume **authoritative** contracts and backend depth **by reference only**—link to DevDoc and published API docs, and do not paste schemas, OpenAPI fragments, or path/method catalogs into this repo.

## If you are not a developer every day

This hub is written primarily for **software developers** and **automated agents** that answer technical questions **with this repository as context** (for example IDE-integrated assistants).

If you need **stable, factual orientation** without owning implementation detail, use these parts of **this same page**:

- **[What belongs here vs elsewhere](#what-belongs-here-vs-elsewhere)** — what this repository is meant to cover, and what lives in **application repos** or **linked engineer documentation** instead.
- **[Where API and backend depth live](#where-api-and-backend-depth-live)** — where **HTTP contracts** and **backend depth** are **authoritatively** documented (outside this repo); this corpus only **points** there.
- **[Curated pages](#curated-pages)** — a table of **short, governed** topic pages; each row **summarizes** what you get on the destination, in plain English when the topic allows.

**Governed** factual material for this corpus lives under **`docs/`** and in **canonical outbound documentation** we link to (for example DevDoc). There is **no separate unofficial wiki** shipped beside this repository—if something is **not** here and **not** in those linked sources, do **not** assume this repo holds it.

## Curated pages

Every **default-path** topical page under `docs/` (outside **`docs/archive/`**) that belongs in routine navigation is listed here. **`docs/archive/`** exists for **opt-in** history and deliberation—see **[Archive (opt-in)](./archive/README.md)**; archive pages are **not** treated as default-path truth. Link text in the table describes what you get on the destination page.

| Page | What it covers |
|------|----------------|
| [Default path vs archive — how curated pages relate to optional archive material](./default-vs-archive-split.md) | Default consultation path versus opt-in archive; short policy summary |
| [Structure contract — Markdown and front matter rules for `docs/`](./structure-contract.md) | YAML front matter, heading ladder, and conventions so tools and agents parse pages consistently |
| [Page templates — scaffolds for new curated `docs/` pages](./templates/README.md) | Copy-paste `topic-page.md` starter aligned with the structure contract; see contributing guide for required use |
| [Legacy migration playbook — moving legacy material into `docs/`](./migration.md) | Maintainer-oriented steps: choose slice, map paths, rewrite for the contract, fix links, update this hub in the same PR |
| **[Algorea](./algorea.md)** (section) | |
| [Linked repositories — map of related repositories](./algorea-linked-repositories.md) | How this knowledge base sits next to Algorea application and documentation repositories |
| [Frontend — canonical repo link and UI↔API expectations](./algorea-frontend.md) | GitHub as source of truth for app code; cross-boundary intent between the SPA and HTTP APIs; pointers to DevDoc |
| [Operations essentials — hub](./algorea-ops.md) | Algorea MVP-scoped ops hub: topic index, deployment pointers, boundaries to DevDoc, app repos, and external systems |

### Archive (opt-in)

Historical and deliberative Markdown lives under **`docs/archive/`**—separate from the default consultation path. **Purpose, browsing norms, and when to use the archive** are documented in **[Archive (opt-in history)](./archive/README.md)**. Contributors: classification and naming rules are in **[CONTRIBUTING.md](../CONTRIBUTING.md#archive-docsarchive)**.

## Canonical technical documentation

Use **[Where API and backend depth live](#where-api-and-backend-depth-live)** for the **published Backend API (OpenAPI-sourced)** link and the rule that this KB does not host generated HTTP contracts.

- **Published site:** [https://france-ioi.github.io/algorea-devdoc/](https://france-ioi.github.io/algorea-devdoc/)
- **Local clone:** `../algorea-devdoc` (Jekyll / Just the Docs). Example: `backend/lambda.md` → [Lambda notes](https://france-ioi.github.io/algorea-devdoc/backend/lambda/).

## Layout on disk

Paths below are relative to the **parent directory** of this repo (`knowledge-base`): `../` from `docs/` is the `France-IOI` workspace root on a typical developer machine.

## Keeping this index current

When you add a **new topical Markdown page** under `docs/` that should be part of the **default, discoverable** consultation path, include **in the same pull request** an update to **this file** (`docs/index.md`)—usually a new row in **Curated pages**—so the entry path stays complete as the information architecture grows.

If a page is intentionally **not** listed here (for example **draft** material or a **non-default** audience), state that in the page’s YAML front matter (for example `status: draft` or `audience:` values per [structure contract](./structure-contract.md)) and **do not** present it as default-path truth. Do not leave **discoverable** curated pages off this index without that rationale.

---

**Contributing:** For how to add or change documentation—scope, inclusion rules, and where curated truth lives—see the **[contribution guide](../CONTRIBUTING.md)**. Technical structure for `docs/` pages (YAML front matter, headings) remains in the [structure contract](./structure-contract.md).
