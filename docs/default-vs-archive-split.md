---
title: "Default path vs archive"
description: "Summary of default curated path versus opt-in archive for this knowledge base."
date: 2026-03-23
last_reviewed: 2026-03-23
doc_type: explanation
status: current
audience: agent-default
---

# Default path vs archive

**Who this is for:** Anyone who needs a **short, factual** read on which Markdown here counts as **current default guidance** versus **optional history** in the archive—including **support-adjacent** readers who want to know when **`docs/archive/`** is the right place to look.

**What this page answers:** How the **default consultation path** relates to the **archive**, and where **contributor placement rules** live.

**What this page does not cover:** Product support playbooks, **HTTP or OpenAPI contract detail**, or **per-application runbooks**. For those boundaries use the **[documentation hub](./index.md#where-api-and-backend-depth-live)**, **[Linked repositories](./algorea-linked-repositories.md)** for repo maps, and **[CONTRIBUTING.md — API documentation and OpenAPI boundary](../CONTRIBUTING.md#api-documentation-and-openapi-boundary)**.

> **Note on prior guidance:** This page is the **default-path policy summary**. Deliberative and superseded write-ups belong under **[docs/archive/](archive/README.md)** (placement rules in **[CONTRIBUTING.md](../CONTRIBUTING.md#archive-docsarchive)**).

This page summarizes how we split **curated “current truth”** (default consultation) from **historical deliberation** (archive, opt-in). It applies to this repository as an **agent-first** knowledge base: routine answers and agent context should lean on the **default** layer; the **archive** holds the full story when someone explicitly needs it.

**Background:** The split is grounded in the same ideas cited under [Patterns from outside this repo](#patterns-from-outside-this-repo) below—**context budgets** (agents and humans do better with a small default set), **trust** (the default layer should read consistent for a given moment), and **traceability** (supersession and archive instead of silent deletion). Optional **MCP**-style retrieval, if added later, should treat default vs archive as an explicit **policy** for what enters routine context.

## Definitions

| Layer | Purpose | Typical content |
|--------|---------|-----------------|
| **Default** | What is true *now* and what to do | Curated rules, interaction notes, indexes, how-to aligned with current behavior |
| **Archive** | How we got here; what we used to believe | Decision threads, superseded write-ups, long “why” narratives, ADR-style history |

The archive is **not** deleted when ideas change; **curated** pages are updated (or replaced) while **history** stays discoverable for traceability.

## Why split

- **Context limits:** Agents and humans work better with a **small, high-signal** default set; dumping all deliberation into every session adds noise and stale claims.
- **Trust:** The default layer should read as **internally consistent** for a given moment; disagreements belong in archive or explicit supersession notes.
- **Traceability:** When rules change, history remains recoverable (archive entries, “superseded by …” links).

## Patterns from outside this repo

These are **reference patterns**, not mandatory tooling:

- **[llms.txt](https://llmstxt.org/index.html)** — A `## Optional` section marks links that consumers **may skip** for shorter context; same idea as “default bundle vs full corpus.”
- **[Diátaxis](https://diataxis.fr/)** — **Reference** (austere, factual) fits the default path well; long **explanation** often belongs in curated form or in archive when it is mainly historical.
- **[ADRs](https://adr.github.io/)** — Accepted records stay **immutable**; later changes use **superseded** links to new records instead of silent deletion.
- **[Cursor rules](https://cursor.com/docs/context/rules)** — “Always apply” vs “manual @” mirrors **always-on default docs** vs **opt-in archive**.

## Practical guidance for contributors

1. **Add or update curated facts** in the normal doc tree and keep **`docs/index.md`** (and any future hub pages) pointing at **default** entry points.
2. **When meaning changes** (not just typos), avoid silent rewrites: add an **archive note**, **changelog line**, or **supersession** pointer as agreed in contribution rules.
3. **Put long deliberation** (meeting notes, rejected options, full rationale) under **`docs/archive/`** when it is curated Markdown for readers—see **[docs/archive/README.md](archive/README.md)** and **[Archive rules in CONTRIBUTING.md](../CONTRIBUTING.md#archive-docsarchive)**—do not rely on chat history as the archive.

## Related

- Doc structure rules: [structure-contract.md](./structure-contract.md)
