# Maintenance scripts

## Documentation quality (Epic 7)

From the repository root, after `npm ci`:

| Command | Purpose |
|--------|---------|
| `npm run docs:linkcheck` | Validates **repo-relative** links in `docs/**/*.md`, `README.md`, and `CONTRIBUTING.md` via `markdown-link-check`. External `http(s)://` URLs are **skipped** in CI by config — see **`.markdown-link-check.json`** and **[CONTRIBUTING.md](../CONTRIBUTING.md#ci-and-local-documentation-checks)**. |
| `npm run docs:lint` | Markdownlint (**`markdownlint-cli2`**) on the same paths; config **`.markdownlint-cli2.jsonc`**. |
| `npm run docs:rules` | Structural checks on **`.cursor/rules/*.mdc`** (YAML front matter + non-empty body + `description` + `alwaysApply` / `globs`). **Requires** **`.cursor/rules/`** with at least one **`.mdc`** in the tree—**commit** those files so **Circle CI** sees them after checkout. |
| `npm run docs:check` | Runs all three in sequence (matches the Circle CI job intent). |

### Cursor rule files (FR22)

Link checking does **not** include `.mdc` unless you extend scope. Rule **structure** is covered by `npm run docs:rules` and the **`docs:rules`** step in Circle CI.

Further background: [_bmad-output/planning-artifacts/research/ai-knowledge-base-and-agent-rules-ci-2026-03-22.md](../_bmad-output/planning-artifacts/research/ai-knowledge-base-and-agent-rules-ci-2026-03-22.md).
