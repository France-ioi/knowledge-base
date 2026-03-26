# Maintenance scripts

## Documentation quality

From the repository root, after `npm ci`:

| Command | Purpose |
|--------|---------|
| `npm run docs:linkcheck` | Validates **repo-relative** links in `docs/**/*.md`, `README.md`, and `CONTRIBUTING.md` via `markdown-link-check`. External `http(s)://` URLs are **skipped** in CI by config — see **`.markdown-link-check.json`** and **[CONTRIBUTING.md](../CONTRIBUTING.md#ci-and-local-documentation-checks)**. |
| `npm run docs:lint` | Markdownlint (**`markdownlint-cli2`**) on the same paths; config **`.markdownlint-cli2.jsonc`**. |
| `npm run docs:rules` | Structural checks on **`.cursor/rules/*.mdc`** (YAML front matter + non-empty body + `description` + `alwaysApply` / `globs`). **Requires** **`.cursor/rules/`** with at least one **`.mdc`** in the tree—**commit** those files so **Circle CI** sees them after checkout. |
| `npm run docs:check` | Runs all three in sequence (matches the Circle CI job intent). |

### Cursor rule files (`.mdc`)

Link checking does **not** include `.mdc` unless you extend scope. Rule **structure** is covered by `npm run docs:rules` and the **`docs:rules`** step in Circle CI.

**Why validate rules:** Project rules should stay **short** and **point** to curated docs (`docs/`, `CONTRIBUTING.md`) instead of duplicating the full corpus. CI checks that each **`.cursor/rules/*.mdc`** file has parseable YAML front matter (`description`, and `alwaysApply` or `globs`), plus a non-empty body—so broken or empty rule files do not ship unnoticed.
