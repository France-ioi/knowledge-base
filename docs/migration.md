---
title: "Legacy migration playbook"
description: "Step-by-step workflow for moving Algorea-relevant material from legacy sources into docs/ with governed IA, working links, and hub updates."
date: 2026-03-23
last_updated: 2026-03-23
last_reviewed: 2026-03-23
owner: "#algorea-platform-docs"
doc_type: reference
status: current
audience: agent-default
---

# Legacy migration playbook

**Who this is for:** **Maintainers** bringing **in-scope** material from **legacy** homes (wikis, other repositories, chat or meeting exports, ad-hoc docs) into this knowledge base under **`docs/`**.

**What this page is:** An ordered **procedure** so migrated content lands on the **right path** (default vs archive), matches the **structure contract**, keeps **relative links** valid, and updates **navigation** in the **same change set** as new or promoted default-path pages.

**What this page is not:** A catalog of legacy URLs, a mandate to migrate everything at once, or the full specification of **optional** “migrated vs net-new” labeling—that normative detail lives in the contribution guide under **[Corpus provenance (optional)](../CONTRIBUTING.md#corpus-provenance-optional)** (with **`origin`** in YAML front matter and the **[structure contract](./structure-contract.md#optional-corpus-keys)** as the shape authority).

## Before you start

Skim these—they are **normative** for how pages must read and where they belong:

- **[Structure contract](./structure-contract.md)** — YAML front matter, heading ladder, link style, default vs archive in front matter.
- **[Page templates](./templates/README.md)** and **[topic-page.md](./templates/topic-page.md)** — default scaffold for **net-new** topic files.
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** — scope, **[Archive (`docs/archive/`)](../CONTRIBUTING.md#archive-docsarchive)**, **[Starting from a template](../CONTRIBUTING.md#starting-from-a-template)**, **[Substantive documentation PRs](../CONTRIBUTING.md#substantive-documentation-prs)** / **[Reviewing new and revised doc pages](../CONTRIBUTING.md#reviewing-new-and-revised-doc-pages)**, and **[API documentation and OpenAPI boundary](../CONTRIBUTING.md#api-documentation-and-openapi-boundary)** (migrated pages must **not** become OpenAPI or path/method dumps).
- **[Default path vs archive](./default-vs-archive-split.md)** — **policy summary** for **current** default-path truth vs **`docs/archive/`** for history and deliberation.

## Default path vs archive (placement)

Every migration PR should **decide explicitly**:

| Destination | Use when |
|-------------|----------|
| **Default path** (`docs/*.md` outside **`archive/`**) | Material is **current governed guidance** readers and agents should treat as **routine truth**. |
| **`docs/archive/`** | Material is **historical**, **superseded**, or **deliberative**—see **[Archive (`docs/archive/`)](../CONTRIBUTING.md#archive-docsarchive)** for naming, **`audience: archive`**, and when to use the archive **README** and supersession patterns. |

If unsure, read **[Default path vs archive](./default-vs-archive-split.md)** and the archive table in **[CONTRIBUTING.md](../CONTRIBUTING.md#archive-docsarchive)** before choosing a path.

## NFR-SC1 — index and hub stay in sync

Do **not** add or promote a **discoverable** default-path topical page **without** updating **`docs/index.md`** (usually a new row under **[Curated pages](./index.md#curated-pages)**) and any **hub** section that should list the topic—**in the same pull request** as the new or moved page. Same rule as **[Keeping this index current](./index.md#keeping-this-index-current)** and **[Keeping the hub complete](../CONTRIBUTING.md#keeping-the-hub-complete)**.

## Migration phases (do in order)

### 1. Select the slice

- Define **one** coherent **batch** (one topic, one epic-sized chapter, or one superseded narrative) so the PR stays reviewable.
- Confirm the content is **in scope** for this corpus per **[What belongs here (in scope)](../CONTRIBUTING.md#what-belongs-here-in-scope)** and **[What belongs here vs elsewhere](./index.md#what-belongs-here-vs-elsewhere)**—defer **per-app implementation detail** and **authoritative API contracts** to the right repos and DevDoc.

### 2. Map to target paths and hub titles

- Choose **filenames** (`lowercase-hyphenated.md`) and **directory** (default **`docs/`** vs **`docs/archive/...`**).
- Align the **page title** and **hub listing** text with how **[Curated pages](./index.md#curated-pages)** should describe the destination.
- If the material **replaces** older default-path guidance, plan **[Supersession on the default path](../CONTRIBUTING.md#supersession-on-the-default-path)** and provenance per **[Provenance for substantive meaning changes](../CONTRIBUTING.md#provenance-for-substantive-meaning-changes)**.

### 3. Move or rewrite for the structure contract

- **Net-new** default-path topic pages: start from **[topic-page.md](./templates/topic-page.md)** per **[Starting from a template](../CONTRIBUTING.md#starting-from-a-template)**.
- Fill or adjust **YAML front matter** to match **[YAML front matter](./structure-contract.md#yaml-front-matter)**; respect **[Provenance and ownership](./structure-contract.md#provenance-and-ownership)** where **`owner`** / **`last_updated`** apply.
- Trim **spec-style** API content; **link out** per **[API documentation and OpenAPI boundary](../CONTRIBUTING.md#api-documentation-and-openapi-boundary)**.

### 4. Fix internal **relative** links

- After files move, **update every intra-repo relative link** (including links from other **`docs/`** pages that pointed at old paths).
- Prefer **stable, descriptive** link text—**[Markdown syntax](./structure-contract.md#markdown-syntax)**.

### 5. Same PR — update `docs/index.md` and hubs

- Add or adjust **Curated pages** rows for each new **default-path** navigable page.
- Update any **topic hub** or index section that must mention the new destination.
- If you **cannot** ship the index update in the same PR, treat that as an exception: follow **[Keeping the hub complete](../CONTRIBUTING.md#keeping-the-hub-complete)** (follow-up issue and no silent orphan pages).

## Verify before merge

- From **`docs/index.md`**, open each **Curated pages** link (including new rows)—confirm **targets exist** and render as intended (**manual** pass; automated **`markdown-link-check`** is optional **Epic 7** tooling—do not add a **Node** toolchain here only for this playbook).
- For **playbook-only** PRs: confirm new links to **`docs/migration.md`** and any **CONTRIBUTING** cross-links resolve.
- For PRs that **move** real content: repeat the index **smoke check** and spot-check **inbound** links from **touched** pages.

## References

| Topic | Where |
|-------|--------|
| Structure and front matter | [Structure contract](./structure-contract.md) |
| Scaffolds | [Page templates](./templates/README.md) |
| Contribution rules, archive, substantive PRs, API boundary | [CONTRIBUTING.md](../CONTRIBUTING.md) |
| Default vs archive policy | [Default path vs archive](./default-vs-archive-split.md) |
| Archive browsing and classification | [Archive README](./archive/README.md) |
| Hub and curated list | [Documentation hub](./index.md) |
