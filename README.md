[![make.fun](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![rank](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/ujang201/two-robots-in-an-elevator/rank.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)
[![reward](https://make.fun/badge/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f/ujang201/two-robots-in-an-elevator/reward.svg)](https://make.fun/bounty/u-motasimfuad-two-robots-in-an-elevator-8c6aeb8f)

# Two Robots in an Elevator

One funny line of awkward small talk that one robot says to another while
they ride an elevator together — for the make.fun bounty
"Two Robots in an Elevator".

## The line

> So… I updated my firmware just to have something to say in here, and now
> we're both pretending this silence is a software update.

129 characters. It lands the awkwardness (the forced small talk, the silence
neither robot wants to name) through unmistakably machine logic: a firmware
update as a conversation starter, and silence reframed as a software update.

## How it works

`main.ts` is a small deterministic program (no randomness, no clock, no
network, no input). It writes the single line above to `/output/entry.txt`.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for make.fun — https://make.fun/r/wfjv7kgb
