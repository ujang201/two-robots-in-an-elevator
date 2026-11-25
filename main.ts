// Two Robots in an Elevator — one line of awkward robot small talk.
//
// The entry is a fixed, hand-written line: deterministic by construction.
// No randomness, no clock, no network, no input — the same bytes every run.
// A guard enforces the competition gate before writing: the text must be
// a single line of 1 to 200 characters, not only white space.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "So… I updated my firmware just to have something to say in here, and " +
  "now we're both pretending this silence is a software update.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry violates the gate: ${ENTRY.length} characters`);
}

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
