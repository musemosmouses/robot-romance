import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line pickup line for Robot Romance: a human proving they're human
// just to get closer to the machine that checks.
const line =
  "Are you a CAPTCHA? Because I keep proving I'm human just to get closer to you.";
const limit = 200;

function checkLength(text: string): void {
  if (text.length < 1 || text.length > limit) {
    throw new Error(`entry must be 1-${limit} chars, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

checkLength(line);

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), line, "utf8");
