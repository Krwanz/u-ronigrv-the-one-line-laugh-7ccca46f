// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// One funny line: a single sentence of at most 200 characters, written to
// /output/entry.txt (MAKEFUN_OUTPUT_DIR when the grader sets it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My phone autocorrected 'I'll be there in five minutes' to 'I'll be there in five months' — and honestly, it has never known me better.";

// Guard the gate: the entry must be one sentence, 1–200 characters,
// not only white space.
const text = LINE.trim();
if (text.length < 1 || text.length > 200) {
  throw new Error(`line must be 1–200 characters, got ${text.length}`);
}
if (!/\S/.test(text)) {
  throw new Error("line must not be only white space");
}
const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (sentences.length !== 1) {
  throw new Error(`line must be a single sentence, got ${sentences.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
