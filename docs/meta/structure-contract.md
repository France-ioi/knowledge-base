---
title: "Structure contract"
description: "YAML front matter, heading rules, and scope for agent-first docs under docs/."
date: 2026-03-23
last_reviewed: 2026-09-24
doc_type: reference
status: current
audience: agent-default
parent: "Meta (about this doc)"
nav_order: 2
---

# Structure contract

Machine-reliable Markdown for **agent-first** docs: tools and models should parse pages predictably. Humans remain first-class readers. Follow this contract for **new and substantially revised** pages under `docs/` (and for org-level markdown elsewhere in this repo unless a narrower rule overrides it).

## What belongs in this corpus

Scope is defined on the hub: **[What belongs here vs elsewhere](../index.md#what-belongs-here-vs-elsewhere)**. Link out to OpenAPI-generated API docs and app READMEs—do not paste request/response schemas or path catalogs here. For Algorea: **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** and **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)**.

## Markdown syntax

Prefer **CommonMark-aligned** Markdown: standard headings, lists, fenced code blocks with **language tags**, links.

Keep each **heading attached to its body**: the prose and lists that answer “what is this section?” stay **immediately under** that heading.

### One logical title per page

Either a single `#` heading or a `title` in front matter (see below); do not use multiple competing top-level titles without reason.

### Heading ladder

Use `##` then `###` then `####` in order; do not skip a level (e.g. `#` → `###`) unless fixing legacy content in a dedicated edit.

### Descriptive link text

Use **descriptive** link text for intra-repo and external destinations (avoid bare URLs or vague phrases like “click here” when a short label can name the destination).

## YAML front matter

Use YAML between `---` lines at the **top** of the file when the page is part of the curated knowledge base (all new `docs/*.md` should include it).

**Required keys**

| Key | Type | Purpose |
|-----|------|---------|
| `title` | string | Stable title (can mirror or replace the in-body `#` title). |
| `description` | string | One line: what this page is for (used for skimming and retrieval snippets). |
| `date` | string | `YYYY-MM-DD` — creation or last **substantive** update. |

**Recommended keys**

| Key | Type | Purpose |
|-----|------|---------|
| `last_reviewed` | string | `YYYY-MM-DD` when facts were verified against code or canonical docs. |
| `doc_type` | string | One of: `tutorial`, `how-to`, `reference`, `explanation` (see [Diátaxis](https://diataxis.fr/)). |
| `status` | string | `current` (default), `draft`, or `archived`. |
| `audience` | string | `agent-default` (in default agent context) or `human-primary` / `archive` as you define in governance. |
| `owner` | string | Who **curates** the page or **answers questions** about its claims (see [Provenance and ownership](#provenance-and-ownership)). |
| `last_updated` | string | `YYYY-MM-DD` — reader-facing **curation freshness** signal (see [Provenance and ownership](#provenance-and-ownership)); **not** a synonym for `last_reviewed`. |

Use **multi-line YAML lists** for arrays (e.g. `tags:`) and **quote** strings that contain `:` or special characters.

### Provenance and ownership

These keys make **curation** and **freshness** visible on substantive default-path pages. Do **not** introduce parallel synonyms (for example `maintainer` for `owner`) or new keys without updating this contract in the same pull request.

#### `date` (required — unchanged meaning)

- **`YYYY-MM-DD`** — page **creation** or last **substantive** update.
- If you only change typos or formatting, **do not** bump `date`. If you change meaning, scope, or cross-boundary rules, **do** bump `date`.

#### `last_reviewed` (recommended — distinct from `last_updated`)

- **`YYYY-MM-DD`** — when factual claims were **checked** against source code or canonical outbound documentation.
- Use for verification passes that may not coincide with a substantive narrative rewrite.

#### `owner` (required on [applicable curated pages](#applicable-curated-pages))

- A **single line** identifying who owns curation or field questions about the page’s governed claims.
- **Canonical style:** Slack channel or team label — prefix with `#` for Slack (e.g. `#algorea-platform-docs`), or a short team/area name if Slack does not apply.
- Do **not** mix multiple unrelated styles on the same page.

#### `last_updated` (required on [applicable curated pages](#applicable-curated-pages))

- **`YYYY-MM-DD`** — last time curators affirmed this page as current for the default path.
- On a **substantive** edit, set `last_updated` to the same date as `date`. On a verification-only pass, you may advance **`last_reviewed`** without changing `date`; advance **`last_updated`** only when the PR explicitly reaffirms the page as still default-path truth. Never use `last_updated` as a substitute for `last_reviewed`.

### Applicable curated pages

Pages that **must** include both `owner` and `last_updated` (in addition to required keys):

- Default-path **`docs/*.md`** pages **outside** **`docs/archive/`** when they carry **cross-boundary**, **governed**, or **business-rule** narrative—typically with `doc_type` one of `reference`, `how-to`, `tutorial`, or `explanation` (`status: current`, `audience: agent-default`).

**Explicitly exempt** (do **not** require `owner` / `last_updated` here):

- **Hub:** [`docs/index.md`](../index.md)
- **Meta / governance shells:** this file, [`docs/meta/index.md`](./index.md)

Archive-path pages follow the same keys only if governance promotes them to a curated surface; default is no extra requirement beyond the required keys.

**Example** (substantive reference page)

```yaml
---
title: "Frontend — routing overview"
description: "Top-level Angular routes and lazy-loaded areas for AlgoreaFrontend."
date: 2026-03-22
last_updated: 2026-03-22
last_reviewed: 2026-03-22
owner: "#algorea-frontend"
doc_type: reference
status: current
audience: agent-default
---
```

## Default vs archive

- **Default consultation path:** pages under **`docs/`** outside **`docs/archive/`**, written for ongoing truth (`status: current`, `audience: agent-default`), and discoverable via the site nav (Just the Docs front matter such as `parent` / `nav_order`).
- **Archive / deliberation:** pages under **`docs/archive/`** are marked with `audience: archive` (and often `status: archived`) so agents can exclude them unless explicitly asked — see **[Archive](../archive/index.md)**.

## Linting and CI

Automated checks run in **Circle CI** and locally via **`npm run docs:check`** — see **[scripts/README.md](../../scripts/README.md)**. They do not replace this contract: reviewers still enforce anything outside tool scope and substantive correctness in PRs.
