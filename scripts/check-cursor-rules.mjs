#!/usr/bin/env node
/**
 * Structural validation for Cursor rule files under .cursor/rules/*.mdc (Story 7.3, FR22).
 */
import matter from "gray-matter";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const rulesDir = join(root, ".cursor", "rules");

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

if (!existsSync(rulesDir) || !statSync(rulesDir).isDirectory()) {
  console.error(`check-cursor-rules: missing directory ${rulesDir}`);
  process.exit(1);
}

const mdcs = readdirSync(rulesDir).filter((n) => n.endsWith(".mdc"));
if (mdcs.length === 0) {
  fail("check-cursor-rules: no .mdc files under .cursor/rules/");
}

let errors = 0;
for (const name of mdcs) {
  const path = join(rulesDir, name);
  const raw = readFileSync(path, "utf8");
  let data;
  let content;
  try {
    const parsed = matter(raw);
    data = parsed.data;
    content = (parsed.content || "").trim();
  } catch (e) {
    console.error(`${name}: invalid front matter — ${e.message}`);
    errors += 1;
    continue;
  }

  if (!data || typeof data !== "object") {
    console.error(`${name}: front matter must parse to an object`);
    errors += 1;
    continue;
  }

  const desc = data.description;
  if (typeof desc !== "string" || desc.trim() === "") {
    console.error(`${name}: missing or empty string field "description"`);
    errors += 1;
  }

  const alwaysOn = data.alwaysApply === true;
  const globs = data.globs;
  const hasGlobs =
    (typeof globs === "string" && globs.trim() !== "") ||
    (Array.isArray(globs) && globs.some((g) => typeof g === "string" && g.trim() !== ""));

  if (!alwaysOn && !hasGlobs) {
    console.error(
      `${name}: expected "alwaysApply": true and/or non-empty "globs" (string or string[]) per Cursor rule shape`
    );
    errors += 1;
  }

  if (content === "") {
    console.error(`${name}: rule body is empty after front matter`);
    errors += 1;
  }
}

if (errors > 0) {
  fail(`\ncheck-cursor-rules: ${errors} issue(s) in .cursor/rules/*.mdc`);
}
