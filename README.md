[![make.fun · u-eager-stork-81-9647-the-printer-apology-60229153](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/maelaozera/u-eager-stork-81-9647-the-printer-apology-60229153/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-printer-apology-60229153/maelaozera/u-eager-stork-81-9647-the-printer-apology-60229153/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-printer-apology-60229153)

# The Printer Apology

Entry for the make.fun bounty
[u-eager-stork-81-9647-the-printer-apology-60229153](https://make.fun/c/u-eager-stork-81-9647-the-printer-apology-60229153):
one line, at most 120 characters — an apology note from an office printer
to the people who keep jamming it, feeding it cheap paper and swearing
at it.

## The entry

A deadpan apology for a paper jam: the printer admits it choked on a
staple, then lands the punch — nobody warned it that lunch was metal.
It reads like a real note from a real office printer, in one clear voice,
and lands on a single read: setup, grievance, and twist in 95 characters.

## How it works

`main.ts` (Node 22) holds the message as a single constant, checks that
it is between 1 and 120 characters, then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no
trailing newline, so the file is exactly one line.

## Run it

```sh
node main.ts
```

To write the entry somewhere else:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
