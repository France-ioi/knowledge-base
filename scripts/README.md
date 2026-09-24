# Maintenance scripts

## Documentation quality

From the repository root, after `npm ci`:

| Command | Purpose |
|--------|---------|
| `npm run docs:linkcheck` | Validates **repo-relative** links in `docs/**/*.md` (except **`docs/algorea/`**), `README.md`, and `CONTRIBUTING.md` via `markdown-link-check`. External `http(s)://` URLs and Liquid `{{ … }}` hrefs are **skipped** — see **`.markdown-link-check.json`**. Imported Algorea pages use Jekyll pretty-URL links; they are excluded from file-based checking. |
| `npm run docs:lint` | Markdownlint (**`markdownlint-cli2`**) on the same curated paths; config **`.markdownlint-cli2.jsonc`** (ignores **`docs/algorea/**`**). |
| `npm run docs:rules` | Structural checks on root **`AGENTS.md`** (non-empty body + required section headings). **Commit** **`AGENTS.md`** so **Circle CI** sees it after checkout. |
| `npm run docs:check` | Runs all three in sequence (matches the Circle CI job intent). |

### Agent instructions (`AGENTS.md`)

Link checking does **not** include **`AGENTS.md`** unless you extend scope. Structure is covered by `npm run docs:rules` and the **`docs:rules`** step in Circle CI.

**Why validate:** Agent instructions should stay **short** and **point** to curated docs (`docs/`, `docs/meta/`) instead of duplicating the full corpus. CI checks that **`AGENTS.md`** exists, is non-empty, and keeps the expected section headings—so an empty or gutted file does not ship unnoticed.
