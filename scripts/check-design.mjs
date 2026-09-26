/**
 * Design-rule check. Fails when source code drifts from DESIGN.md.
 *
 *   npm run check:design
 *
 * Scans src/ line by line with plain regexes. Each rule lists the files it
 * exempts (by path fragment). A clean run prints one line and exits 0.
 */

import { readdirSync, readFileSync, statSync } from "fs";
import { join, relative, resolve, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "src");

// Class-position prefix: start of a token, then any variants (md:, hover:, …).
const AT = String.raw`(?<![\w-])(?:[a-z0-9-]+:)*`;

const ARTWORK = ["components/art/", "components/layout/Wordmark.tsx"];

const RULES = [
  {
    id: "type-size",
    why: "use a type role (text-display, text-h1…h3, text-lead, text-body, text-meta, text-label)",
    re: new RegExp(`${AT}text-(?:xs|sm|base|lg|xl|[2-9]xl|\\[\\d)`),
    allow: ARTWORK,
  },
  {
    id: "type-breakpoint",
    why: "type roles are fluid; never add a breakpoint prefix",
    re: /(?:sm|md|lg|xl|2xl):text-(?:display|h[1-3]|lead|body|meta|label)\b/,
  },
  {
    id: "type-tracking",
    why: "tracking and leading come with the type role",
    re: new RegExp(`${AT}(?:tracking|leading)-`),
    allow: ARTWORK,
  },
  {
    id: "type-weight",
    why: "weights are 400, 500 and 600 only",
    re: /\bfont-(?:thin|extralight|light|bold|extrabold|black)\b/,
    allow: ARTWORK,
  },
  {
    id: "type-mono",
    why: "no monospace on this site",
    re: /\bfont-mono\b/,
  },
  {
    id: "spacing",
    why: "spacing steps are 1/2/3/4/6/8/12/16/24/32 (4px unit)",
    re: new RegExp(
      `${AT}-?(?:p[xytrbl]?|m[xytrbl]?|gap(?:-[xy])?|space-[xy])-(?:0\\.5|1\\.5|2\\.5|3\\.5|5|7|9|10|11|14|20|28|36|40|44|48|52|56|60|64|72|80|96|\\[)`,
    ),
    allow: ARTWORK,
  },
  {
    id: "radius",
    why: "one corner: rounded-box",
    re: new RegExp(`${AT}rounded(?:-(?:none|xs|sm|md|lg|xl|[234]xl|full|\\[)|(?![\\w-]))`),
    allow: ARTWORK,
  },
  {
    id: "shadow",
    why: "no shadows in UI chrome",
    re: new RegExp(`${AT}shadow(?:-|(?![\\w-]))`),
    allow: ARTWORK,
  },
  {
    id: "legacy-token",
    why: "retired token; see DESIGN.md color roles",
    re: /text-tertiary|border-hover|accent-emerald|accent-gold|accent-dim|bg-overlay|\binteractive\b|\[var\(--/,
  },
  {
    id: "raw-color",
    why: "colors come from tokens only",
    re: /#[0-9a-fA-F]{3,8}\b|rgba?\(/,
    allow: ARTWORK,
  },
  {
    id: "accent-scope",
    why: "oxblood is for results only: case-study outcomes and diagrams",
    re: new RegExp(`${AT}(?:text|bg|border|fill|stroke|decoration|ring|outline)-accent\\b`),
    allow: ["sections/CaseStudies.tsx", "components/diagrams/"],
  },
  {
    id: "mark-scope",
    why: "gold is for the Tick and the Doctrine numerals only",
    re: new RegExp(`${AT}(?:text|bg|border|fill|stroke|decoration)-mark\\b`),
    allow: ["ui/Tick.tsx", "sections/Doctrine.tsx", "app/doctrine/page.tsx"],
  },
  {
    id: "container",
    why: "use Section or site-container; never re-center inside it",
    re: /max-w-(?:5xl|6xl|7xl)|\bmx-auto\b/,
    only: ["components/"],
  },
  {
    id: "motion",
    why: "one quiet fade: no translate or scale on entrance",
    re: /(?:initial|animate|exit|hidden|visible)\b[^\n]*\b(?:x|y|scale)\s*:\s*-?\d/,
  },
  {
    id: "code-comment-ui",
    why: "no // code-comment styling in visible text",
    re: /(?:>|["'`])\s*\/\/\s*\w/,
  },
  {
    id: "dash",
    why: "STYLE.md bans em and en dashes; use the Tick or plain punctuation",
    re: /[—–]/,
    css: true,
  },
];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const files = walk(SRC).filter((f) => /\.(tsx?|css)$/.test(f));
const problems = [];

for (const file of files) {
  const rel = relative(ROOT, file);
  const isCss = file.endsWith(".css");
  const lines = readFileSync(file, "utf8").split("\n");

  for (const rule of RULES) {
    if (isCss && !rule.css) continue;
    if (rule.allow?.some((a) => rel.includes(a))) continue;
    if (rule.only && !rule.only.some((o) => rel.includes(o))) continue;

    lines.forEach((line, i) => {
      const m = line.match(rule.re);
      if (m) problems.push(`${rel}:${i + 1}  [${rule.id}] "${m[0]}"  ${rule.why}`);
    });
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n✖ ${problems.length} design-rule problem(s). Rules: DESIGN.md`);
  process.exit(1);
}
console.log(`✓ design rules: ${files.length} files clean`);
