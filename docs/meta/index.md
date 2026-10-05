---
title: "Meta (about this doc)"
nav_order: 5
---

# Meta (about this doc)

How this knowledge base is **structured and maintained**. Files live under **`docs/meta/`**. Governance scaffolding, not product documentation.

## Collaboration workflow

Commit and push directly to **`master`** when you can land the change yourself.

If someone else must review (for example a small documentation update tied to an API change), open a **GitHub pull request**, assign them as **reviewer**, and discuss before merging.

## Scope

Follow the hub’s **[What belongs here vs elsewhere](../index.md#what-belongs-here-vs-elsewhere)**.

This site is **public**. Do not put credentials, secrets, private keys, access tokens, or other critical/sensitive operational details here.

## Markdown

Conventions for pages under **`docs/`**:

- One `#` title per page (or rely on front-matter `title`).
- Headings in order: `##` then `###` then `####` (do not skip levels).
- Prefer CommonMark: lists, **language-tagged** fenced code blocks, **descriptive** link text (no bare URLs).
- For workflows and diagrams, **Mermaid** is enabled (fenced blocks tagged `mermaid`).
- Keep each heading’s body immediately under it.

After editing Markdown (outside **`docs/algorea/`**), run **`npm run docs:lint`** and fix failures before considering the change done.

## Front matter

Put YAML between `---` at the top of curated `docs/*.md` pages.

**Required:** `title`.

**Just the Docs (as needed):** `parent`, `nav_order`, `has_children`, `permalink`, and other theme keys the site needs for navigation.

For a new page, copy a similar existing page and adapt.

## File placement

By default, a page that belongs under existing content lives in a **subdirectory of that parent**, not as a sibling of other topics in the same folder.

- Keep the parent page at its current path (for example `docs/task/bebras-api.md`) and set `has_children: true` when it has children.
- Put child pages under a directory named after the parent file without `.md` (for example `docs/task/bebras-api/appendix.md`).
- Set front-matter `parent` to the parent’s `title`.

Do not add a child as `docs/task/<child>.md` next to other Task section pages; that mixes Bebras API subpages with future pages under Task.
