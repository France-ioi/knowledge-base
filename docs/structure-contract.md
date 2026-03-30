---
title: "Structure contract"
description: "YAML front matter, heading rules, and scope for agent-first docs under docs/."
date: 2026-03-23
last_reviewed: 2026-03-23
doc_type: reference
status: current
audience: agent-default
---

# Structure contract

Machine-reliable Markdown for **agent-first** docs: tools and models should parse pages **predictably**. Humans remain first-class readers. Follow this contract for **new and substantially revised** pages under `docs/` (and for org-level markdown elsewhere in this repo unless a narrower rule overrides it).

## What belongs in this corpus

- **Business rules**, domain behavior, and **cross-boundary** interactions (e.g. frontend ↔ backend flows, invariants).
- **Pointers** to authoritative sources: OpenAPI-generated API docs (for Algorea, the published **[Backend API (generated)](https://france-ioi.github.io/algorea-devdoc/api/)** on DevDoc), **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)** overall, and app READMEs — **not** a second copy of request/response schemas or path catalogs.

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

### Optional corpus keys

These keys are **never required** unless governance explicitly adopts them. **Omission is the default.**

| Key | Type | Allowed values | Purpose |
|-----|------|----------------|---------|
| `origin` | string | `migrated`, `net-new` | Optional **corpus-entry** signal: **`migrated`** = first publication in this repo traced to a **legacy** source per the [Legacy migration playbook](./migration.md); **`net-new`** = authored for this corpus without that lineage. Full semantics and team opt-in: **[Corpus provenance (optional)](../CONTRIBUTING.md#corpus-provenance-optional)** in the contribution guide. |

**`origin` is additive only:** it does **not** replace or redefine **`date`**, **`owner`**, **`last_updated`**, **`last_reviewed`**, or any other key in this contract. It does **not** change **[Applicable curated pages](#applicable-curated-pages)**—pages that must carry **`owner`** / **`last_updated`** still do when they fall under that section.

When YAML front matter is **unavailable**, the same two values may appear in the **prose-only `Corpus origin:` footer** defined in **[Corpus provenance (optional)](../CONTRIBUTING.md#corpus-provenance-optional)** (use YAML when the page already has front matter).

Use **multi-line YAML lists** for arrays (e.g. `tags:`) and **quote** strings that contain `:` or special characters.

### Provenance and ownership

These keys make **curation** and **freshness** visible on substantive default-path pages. Do **not** introduce parallel synonyms (for example `maintainer` for `owner`) without updating this contract in the same pull request—see **[CONTRIBUTING.md — Front matter and schema drift](../CONTRIBUTING.md#front-matter-and-schema-drift)**.

#### `date` (required — unchanged meaning)

- **`YYYY-MM-DD`** — page **creation** or last **substantive** update (same meaning as before this section existed).
- **Migration note for contributors:** if you only change typos or formatting, **do not** bump `date`. If you change meaning, scope, or cross-boundary rules, **do** bump `date` per the required-keys table above. This document does **not** redefine `date`.

#### `last_reviewed` (recommended — distinct from `last_updated`)

- **`YYYY-MM-DD`** — when factual claims on the page were **checked** against **source code** or **canonical** outbound documentation (DevDoc, OpenAPI-sourced references, app READMEs).
- Use it for **verification** passes that may **not** coincide with a substantive narrative rewrite. It answers “when were the **facts** validated?”—not “when did a curator **reaffirm** the page for readers?”

#### `owner` (required on [applicable curated pages](#applicable-curated-pages))

- A **single line** identifying who **owns curation** or **field questions** about the page’s governed claims.
- **Canonical style for this repository:** **Slack channel or team label** — prefix with `#` for Slack (e.g. `#algorea-platform-docs`), or use a short **team / area** name if Slack does not apply (e.g. `Algorea platform documentation`). **Examples:**
  - `#algorea-platform-docs` — default corpus curators for cross-cutting Algorea KB pages.
  - `#algorea-frontend` — frontend implementers for SPA-heavy boundary pages.
  - `Algorea platform documentation` — human-readable team label when no channel is listed.
- Do **not** mix multiple unrelated styles on the same page; pick the label that best matches **who merges and defends** the page’s content.

#### `last_updated` (required on [applicable curated pages](#applicable-curated-pages))

- **`YYYY-MM-DD`** — last time curators **affirmed** this page as **current** for the **default path** (reader-facing “how fresh is this guidance?”).
- **Semantics:** on a **substantive** edit, set `last_updated` to the **same** `YYYY-MM-DD` as `date` (both advance together). On a **verification-only** pass (facts checked, narrative meaning unchanged), you may advance **`last_reviewed`** **without** changing `date`; advance **`last_updated`** only when the PR or review thread **explicitly reaffirms** the page as still the default-path truth (optional). **Never** use `last_updated` as a substitute for `last_reviewed`—verification dates belong in `last_reviewed`.

### Applicable curated pages

Pages that **must** include both `owner` and `last_updated` (in addition to required keys):

- Default-path **`docs/*.md`** pages **listed** under **[Curated pages](./index.md#curated-pages)** in the hub **when** they carry **cross-boundary**, **governed**, or **business-rule** narrative—typically with `doc_type` one of `reference`, `how-to`, `tutorial`, or `explanation` on the default consultation path (`status: current`, `audience: agent-default`).

**Explicitly exempt** (do **not** require `owner` / `last_updated` here):

- **Hub:** [`docs/index.md`](./index.md) — navigation and corpus map, not a single owned topic.
- **Meta / governance shells:** this file [`docs/structure-contract.md`](./structure-contract.md), [`docs/default-vs-archive-split.md`](./default-vs-archive-split.md) — they define rules for the corpus rather than product cross-boundary claims.
- **Templates:** files under `docs/templates/` — scaffolds; **published** pages copied from them **must** satisfy this section when they fall under “must include” above.

Archive-path pages (`audience: archive`, typically under `docs/archive/`) follow the same keys only if governance promotes them to a **curated** surface; default is **no extra requirement** beyond the required keys unless explicitly listed in the hub.

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

- **Default consultation path:** pages linked from [index.md](./index.md) and written for ongoing truth (`status: current`, `audience: agent-default`).
- **Archive / deliberation:** pages under **`docs/archive/`** are marked with `audience: archive` (and often `status: archived`) so agents can exclude them unless explicitly asked — see **[Archive (docs/archive/)](../CONTRIBUTING.md#archive-docsarchive)** in the contribution guide.

## Optional: `llms.txt`

A root or `docs/` [llms.txt](https://www.llmstxt.org/)-style manifest may list **curated** URLs/paths for bundled context. Not required for day-one editing; add when you want a single machine-discoverable entry map.

## Linting and CI

Automated checks run in **Circle CI** and locally via **`npm run docs:check`** — see **[CI and local documentation checks](../CONTRIBUTING.md#ci-and-local-documentation-checks)** in **`CONTRIBUTING.md`** (link check on scoped markdown, **markdownlint-cli2**, and optional **`.cursor/rules/*.mdc`** structure). They **do not** replace this contract: reviewers still enforce anything outside tool scope and **substantive** correctness in PRs.

---

**Background (structure for tools and agents):** This contract aligns with common practice for **machine-reliable** Markdown: **CommonMark**-aligned syntax so parsers agree on structure; **YAML front matter** for a thin metadata layer (title, description, doc type); **Diátaxis**-style `doc_type` values so intent per page is predictable; a **single heading ladder** under one logical title so chunking and retrieval stay stable; and optional **llms.txt**-style manifests when the team wants a bundled index. The goal is the same as the rest of this repo: **governed curated prose** plus **explicit boundaries** to outbound technical truth (DevDoc, OpenAPI)—not duplicating contracts here.
