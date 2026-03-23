# Contributing to the France-IOI knowledge base

This file is the **single canonical guide** for adding or changing documentation in this repository. Follow it so curated material stays consistent and discoverable.

## What belongs here (in scope)

Put material in **`docs/`** when it is **governed curated documentation** for France-IOI software:

- **Business rules** and domain behavior written for cross-project use.
- **Cross-boundary behavior** (for example how frontend, backend, and operations interact at the edges).
- **Operations essentials** when they belong in this corpus’s governed docs—not a second home for full operational depth already owned elsewhere.

That matches the hub’s **[What belongs here vs elsewhere](docs/index.md#what-belongs-here-vs-elsewhere)**; this guide is the **normative** wording for contributors.

## What does not belong here (out of scope)

- **Per-application implementation detail** (folder layouts, framework specifics, local runbooks): use the **relevant application repositories**.
- **Authoritative HTTP/OpenAPI contracts** and generated API reference: use **[algorea-devdoc](https://france-ioi.github.io/algorea-devdoc/)**, published OpenAPI-sourced surfaces, and sibling engineer-facing docs. **Do not** paste schemas, OpenAPI fragments, or path/method catalogs into this repo—**link** to those sources instead.
- **Duplicate hosting** of generated API reference or contract dumps: this knowledge base describes behavior and cross-boundary rules **by reference** only.
- **`_bmad-output/`**: planning artifacts and BMAD workflow output—not curated product documentation. See [Planning and workflow output vs curated product docs](#planning-and-workflow-output-vs-curated-product-docs) for the distinction.

For default-path versus optional archive material, see **[Default path vs archive](docs/default-vs-archive-split.md)**.

## Planning and workflow output vs curated product docs

**`_bmad-output/`** holds **planning artifacts, BMAD workflow output, and sprint or research files**. It is **not** the default-path **curated product narrative** for readers or agents.

**Curated** rules and topic pages that should ground day-to-day consultation live under **`docs/`** (with **[docs/index.md](docs/index.md)** as the primary entry). Optional **`docs/archive/`** may appear later for superseded or non-default material; until then, follow the index and structure contract for what counts as default path.

This separation matches the architecture intent documented in [_bmad-output/planning-artifacts/architecture.md](_bmad-output/planning-artifacts/architecture.md) (see **Structure Patterns** and **Project Structure & Boundaries**).

## Structure and front matter

Curated Markdown under **`docs/`** **must** follow **[docs/structure-contract.md](docs/structure-contract.md)**. That file is **normative** for how new and substantially revised pages are written so the corpus stays **machine-reliable** and consistent.

**You must apply the contract to:**

- **Titles and headings:** **One** logical title per page and a **heading ladder** that does not skip levels—use `#` then `##` then `###` then `####` in order (see **[One logical title per page](docs/structure-contract.md#one-logical-title-per-page)** and **[Heading ladder](docs/structure-contract.md#heading-ladder)** under **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**).
- **YAML front matter:** required and recommended keys, types, and examples for pages in the curated knowledge base—see **[YAML front matter](docs/structure-contract.md#yaml-front-matter)**. **New** and **substantially revised** `docs/*.md` pages **must** include front matter that matches the contract.
- **Link style:** use standard Markdown links with **descriptive** link text for **intra-repo** destinations (avoid bare URLs or vague phrases like “click here” when a short label can name the destination). CommonMark-aligned lists and fenced code blocks with **language tags** are part of the same expectations—still **[Markdown syntax](docs/structure-contract.md#markdown-syntax)**.
- **Default vs archive:** how default-path pages relate to optional archive material and audience—see **[Default vs archive](docs/structure-contract.md#default-vs-archive)** and, for narrative context, **[Default path vs archive](docs/default-vs-archive-split.md)**.

Until automated checks exist, the contract’s **Linting and CI** section still expects **human review** in PRs; this guide and the contract are what reviewers use.

### Front matter and schema drift

The architecture’s **Naming Patterns** state that **front matter keys** are defined in **`docs/structure-contract.md`** and that **synonym keys** for the same concept (for example mixing `owner` and `maintainer`) are **not** allowed without updating the contract. **Enforcement Guidelines** add that **drift** is handled in lockstep: if you **introduce a new key**, **rename** the meaning of an existing key, or **split** one concept across multiple keys, you **must** update **`docs/structure-contract.md`** in the **same pull request** (or the same merged change set). Do not land new normative conventions in prose or YAML alone while the contract still describes an older schema.

## Keeping the hub complete

When you add a **new topical page** under `docs/` that should be part of the discoverable corpus, update **`docs/index.md`** in the **same pull request** (usually a new row under **Curated pages**), as described in that file’s **Keeping this index current** section. If the index update cannot ship in the same PR, open a follow-up issue immediately and do not merge the page without a tracking reference.

## Reviewing new and revised doc pages

**For reviewers**—when a PR adds or materially changes pages under **`docs/`**, you can verify **structure** against the contract without extra undocumented rules. Use **[docs/structure-contract.md](docs/structure-contract.md)** as the checklist’s authority.

- **Front matter:** **[Required keys](docs/structure-contract.md#yaml-front-matter)** (`title`, `description`, `date`) present; YAML valid; optional keys consistent with the **Recommended keys** table when used.
- **Heading ladder:** no skipped levels between `#` / `##` / `###` / `####`—**[Heading ladder](docs/structure-contract.md#heading-ladder)**.
- **Title:** a single logical top-level title pattern—**[One logical title per page](docs/structure-contract.md#one-logical-title-per-page)**.
- **Links:** meaningful **intra-repo** link text; code fences have **language tags** where applicable—**[Markdown syntax](docs/structure-contract.md#markdown-syntax)** (CommonMark expectations above those subsections).
- **Index:** new **default-path** topical pages update **`docs/index.md`** in the same PR—see **[Keeping the hub complete](#keeping-the-hub-complete)** and **[Keeping this index current](docs/index.md#keeping-this-index-current)** in the hub.

**Epic 3** (**Story 3.1**) will add a fuller **substantive** PR checklist (accuracy, tone, provenance, and similar). This section stays scoped to **structure, front matter, and link style** so review stays aligned with **`docs/structure-contract.md`** today.

---

**Primary documentation hub:** [docs/index.md](docs/index.md)
