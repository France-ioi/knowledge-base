#!/usr/bin/env node
/**
 * Structural validation for root AGENTS.md (agent guardrails; replaces .cursor/rules/*.mdc).
 */
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const agentsPath = join(root, "AGENTS.md");

function fail(msg) {
  console.error(msg);
  process.exit(1);
}

if (!existsSync(agentsPath) || !statSync(agentsPath).isFile()) {
  fail(`check-agents-md: missing file ${agentsPath}`);
}

const raw = readFileSync(agentsPath, "utf8");
const content = raw.trim();
if (content === "") {
  fail("check-agents-md: AGENTS.md is empty");
}

const requiredHeadings = [
  "# Knowledge base corpus",
  "## Where to start",
  "## API and OpenAPI",
  "## Consistency",
];

let errors = 0;
for (const heading of requiredHeadings) {
  if (!content.includes(heading)) {
    console.error(`check-agents-md: expected heading containing "${heading}"`);
    errors += 1;
  }
}

if (errors > 0) {
  fail(`\ncheck-agents-md: ${errors} issue(s) in AGENTS.md`);
}
