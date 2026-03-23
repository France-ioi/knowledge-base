---
title: "Structure contract"
description: "YAML front matter, heading rules, and scope for agent-first docs under docs/."
date: 2026-03-22
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

**Example**

```yaml
---
title: "Algorea frontend — routing overview"
description: "Top-level Angular routes and lazy-loaded areas for AlgoreaFrontend."
date: 2026-03-22
last_reviewed: 2026-03-22
doc_type: reference
status: current
audience: agent-default
---
```

Use **multi-line YAML lists** for arrays (e.g. `tags:`) and **quote** strings that contain `:` or special characters.

## Default vs archive

- **Default consultation path:** pages linked from [index.md](./index.md) and written for ongoing truth (`status: current`, `audience: agent-default`).
- **Archive / deliberation:** if the product brief’s decision archive lives in this repo, mark those pages with `audience: archive` (or a dedicated path convention agreed separately) so agents can exclude them unless explicitly asked.

## Optional: `llms.txt`

A root or `docs/` [llms.txt](https://www.llmstxt.org/)-style manifest may list **curated** URLs/paths for bundled context. Not required for day-one editing; add when you want a single machine-discoverable entry map.

## Linting and CI

When governance matures, prefer automated checks: valid YAML front matter, link checking, and markdown style rules. Until then, **reviewers enforce this contract** in PRs.

---

**Related research:** [_bmad-output/planning-artifacts/research/technical-machine-reliable-doc-structure-research-2026-03-22.md](../_bmad-output/planning-artifacts/research/technical-machine-reliable-doc-structure-research-2026-03-22.md)
