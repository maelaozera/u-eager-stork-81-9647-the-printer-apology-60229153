// The Printer Apology
// An office printer apologises for a paper jam, with its own gripe:
// nobody warned it that lunch would be a staple.
// 
// The entry is written exactly as-is, with no trailing newline, so the
// file holds one line of exactly MESSAGE.length characters. It is written
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MESSAGE =
  "Sorry about the paper jam — I choked on a staple, and frankly nobody warned me lunch was metal.";

const MAX_LENGTH = 120;

if (MESSAGE.length < 1 || MESSAGE.length > MAX_LENGTH) {
  throw new Error(
    `Entry must be 1 to ${MAX_LENGTH} characters, got ${MESSAGE.length}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), MESSAGE);
