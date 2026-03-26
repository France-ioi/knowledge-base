#!/usr/bin/env node
/**
 * Runs markdown-link-check on the same paths as CI (Story 7.1).
 * Repo-relative links only — see `.markdown-link-check.json` ignorePatterns.
 */
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const mlc = join(root, "node_modules", ".bin", "markdown-link-check");

const rootFiles = ["README.md", "CONTRIBUTING.md"].filter((f) => existsSync(join(root, f)));

function walkMarkdown(dir, acc) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    if (name.isDirectory()) walkMarkdown(full, acc);
    else if (name.isFile() && name.name.endsWith(".md")) acc.push(full);
  }
}

const docsDir = join(root, "docs");
const docFiles = [];
if (existsSync(docsDir) && statSync(docsDir).isDirectory()) walkMarkdown(docsDir, docFiles);

const files = [...rootFiles.map((f) => join(root, f)), ...docFiles].sort();
if (files.length === 0) {
  console.error("docs-linkcheck: no markdown files found");
  process.exit(1);
}

let failed = 0;
for (const file of files) {
  const rel = relative(root, file) || file;
  const r = spawnSync(mlc, [file, "-c", join(root, ".markdown-link-check.json"), "-q"], {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
  if (r.status !== 0) {
    failed += 1;
    console.error(`\n--- ${rel} ---`);
    if (r.stderr) process.stderr.write(r.stderr);
    if (r.stdout) process.stdout.write(r.stdout);
  }
}

if (failed > 0) {
  console.error(`\nmarkdown-link-check: ${failed} file(s) failed`);
  process.exit(1);
}
