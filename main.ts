// The Printer Apology
// An office printer apologises for a paper jam, with its own gripe:
// nobody warned it that lunch would be a staple.
//
// The entry is written exactly as-is, with no trailing newline, so the
// file holds one line of exactly the message's length. It is written
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LENGTH = 120;
const DEFAULT_OUTPUT_DIR = "/output";
const ENTRY_FILENAME = "entry.txt";

const APOLOGY_SEGMENTS = [
  "Sorry about the paper jam — I choked on a staple,",
  "and frankly nobody warned me lunch was metal.",
];

function composeApology(segments: string[]): string {
  return segments.join(" ");
}

function checkLength(text: string, max: number): void {
  if (text.length < 1 || text.length > max) {
    throw new Error(
      `Entry must be 1 to ${max} characters, got ${text.length}.`,
    );
  }
}

function resolveOutputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? DEFAULT_OUTPUT_DIR;
}

function writeEntry(text: string): void {
  const dir = resolveOutputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, ENTRY_FILENAME), text);
}

function publish(text: string): void {
  checkLength(text, MAX_LENGTH);
  writeEntry(text);
}

const apology = composeApology(APOLOGY_SEGMENTS);
publish(apology);
