import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I meal-prepped on Sunday for the whole week, and by Wednesday my fridge was just a museum of good intentions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
