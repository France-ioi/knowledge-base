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
- Prefer CommonMark: lists, **language-tagged** fenced code blocks, **descriptive** link text.
- Keep each heading’s body immediately under it.

## Front matter

Put YAML between `---` at the top of curated `docs/*.md` pages.

**Required:** `title`.

**Just the Docs (as needed):** `parent`, `nav_order`, `has_children`, `permalink`, and other theme keys the site needs for navigation.

For a new page, copy a similar existing page and adapt.
