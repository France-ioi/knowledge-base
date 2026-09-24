---
title: "Archive"
description: "Discussions, deliberation, and material for abandoned projects under docs/archive/."
date: 2026-03-23
doc_type: reference
status: current
audience: agent-default
has_children: true
nav_order: 90
---

# Archive

Material under **`docs/archive/`** is kept for **history and context**, not as day-to-day truth. Use it when you need discussions, deliberation, or records tied to **abandoned** work—without mixing that into the default path.

## What belongs here

- **Discussions** and long threads captured as Markdown for later readers.
- **Deliberation** — options considered, rejected approaches, meeting summaries, and the “why” behind past choices.
- **Abandoned projects** — relevant information worth keeping after a project or initiative is no longer active.

This tree is **not** a dumping ground for unvetted scratch notes. Place curated archive Markdown here following **[Archive (`docs/archive/`)](../meta/contributing.md#archive-docsarchive)** in the contribution guide.

## Relationship to the default path

- **Default-path** pages live under **`docs/`** outside **`docs/archive/`** (`status: current`, typically `audience: agent-default`) and appear in the site nav as current guidance.
- **Archive** pages should use **`audience: archive`** and often **`status: archived`** so tooling and readers treat them as **non-default**—see **[Default vs archive](../meta/structure-contract.md#default-vs-archive)** and **[Default path vs archive](../meta/default-vs-archive-split.md)**.
- New archive pages should set `parent: "Archive"` (matching the section title) so they nest under **Archive** in the left nav.

## Subfolder conventions

Optional topic subfolders are allowed (for example **`docs/archive/algorea/`**). When you introduce one, add a row here.

| Subfolder | Convention | Introduced |
|-----------|------------|------------|
| _(none yet)_ | — | — |

## Related

- [Contribution guide — Archive](../meta/contributing.md#archive-docsarchive)
- [Default path vs archive](../meta/default-vs-archive-split.md)
- [Structure contract — Default vs archive](../meta/structure-contract.md#default-vs-archive)
