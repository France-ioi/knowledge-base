---
title: "Archive (opt-in history)"
description: "Purpose and browsing norms for docs/archive/; how it relates to the default curated path under docs/."
date: 2026-03-23
doc_type: reference
status: current
audience: agent-default
---

# Archive (opt-in history)

Material under **`docs/archive/`** is **opt-in history**: deliberation, superseded narratives, and deep background that should **not** pollute routine navigation or the **default agent consultation path** (see [Default path vs archive](../default-vs-archive-split.md) and [Default vs archive](../structure-contract.md#default-vs-archive) in the structure contract).

## Purpose

- **Preserve traceability** when curated guidance changes: old write-ups stay findable without presenting them as *current* truth.
- **Hold deliberation** captured as Markdown (long “why” threads, rejected options, meeting summaries) that would add noise on the default path.
- **Store superseded** policies or narratives for readers who need the historical record.

This tree is **not** a dumping ground for **unvetted** working notes. If you **copy** or **summarize** deliberation into the curated corpus for readers, **place** that Markdown here following [Archive (docs/archive/)](../../CONTRIBUTING.md#archive-docsarchive) in the contribution guide.

## Relationship to the default path

- **[Curated pages](../index.md#curated-pages)** in **`docs/index.md`** list **default-path** topical pages—ongoing, **`status: current`**, typically **`audience: agent-default`**—that agents and humans use for day-to-day truth.
- **This archive** is **separate**: pages here should use **`audience: archive`** and often **`status: archived`** (per the structure contract) so tooling and readers can treat them as **non-default**.
- **[Default path vs archive](../default-vs-archive-split.md)** is the **short policy summary** on the default path; it points here when you need the **archive entry** and norms.

## Browsing norms

- Expect **archive-oriented** front matter on files in this directory (**`audience: archive`**, and/or **`status: archived`**) unless a page is explicitly a **meta** explainer like this **`README`**.
- Prefer **descriptive titles and links**; treat claims in archive files as **historical context** unless a default-path page explicitly reaffirms them.
- For **classification, naming, and placement** rules when adding files, see **[Archive (docs/archive/)](../../CONTRIBUTING.md#archive-docsarchive)** in **`CONTRIBUTING.md`**.

## When content should move here (vs stay on the default path)

**Stay on the default path** (under **`docs/*.md`** outside **`archive/`**, listed from the hub when appropriate) when the page is **current** governed guidance: rules, cross-boundary behavior, and how-to that readers and agents should treat as **truth now**.

**Move or add under `docs/archive/`** when the material is **historical**, **superseded**, or **primarily deliberative**—content you want **discoverable** but **not** mixed into the default bundle. When default-path meaning **replaces** older guidance, the **living** page should carry a **supersession** note per **`CONTRIBUTING.md`** (see **[Supersession on the default path](../../CONTRIBUTING.md#supersession-on-the-default-path)**) and, when useful, point to a **specific** file or folder under **`docs/archive/`**.

## Subfolder conventions

No topic subfolders exist yet. When you introduce one (for example **`docs/archive/algorea/`**), add a row here so future contributors can follow the same pattern.

| Subfolder | Convention | Introduced |
|-----------|------------|------------|
| _(none yet)_ | — | — |

## Related

- [Contribution guide — Archive](../../CONTRIBUTING.md#archive-docsarchive)
- [Default path vs archive](../default-vs-archive-split.md)
- [Structure contract — Default vs archive](../structure-contract.md#default-vs-archive)
