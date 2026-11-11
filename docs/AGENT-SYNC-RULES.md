# Agent sync rules (Claude + OpenClaw)

Two agents work on Call Me Crazy. The repo is the shared memory. Follow these so we never drift.

## Where things live
- Repo `wardashley001-lang/callmecrazy`, working branch `claude/magical-babbage-b2vpvt`.
- Latest handoff: `docs/OPENCLAW-UPDATE-*.md` (newest date wins). Running log: `docs/DRIVE-REORG-2026-11-09.md`.
- Theme code: `shopify-theme/`. Live theme deploys from the `shopify-theme` branch.
- Live tracker: Google Sheet "ASHLEY MONSTER MASTER LAUNCH SHEET" (id in the handoff). Edit in place, never send copies.

## Every session
1. **Start:** `git pull` the working branch and read the newest handoff doc before doing anything.
2. **During:** after any meaningful change (Drive, Shopify, theme, tracker) add a short dated entry to `docs/CHANGELOG-AGENTS.md`: who (Claude/OpenClaw), what changed, ids/links, what is still open.
3. **End:** commit and push to the working branch. If the handoff doc is stale, write a new dated `docs/OPENCLAW-UPDATE-YYYY-MM-DD.md`.
4. Never leave a change only in chat, Drive, or Shopify. If it is not in the repo, the other agent does not know it happened.

## Changes that must be logged
Drive moves/renames, new or changed Shopify products/collections/metafields, theme edits and deploys, tracker structure changes, new decisions from Ashley, new rules.

## Conflicts
- Do not both edit the same theme file at once: note "working on <file>" in the changelog first.
- Theme changes go to the working branch first, then deploy to `shopify-theme` only after Ashley OK or a clean theme-check.
- If notes disagree with reality, trust reality, then fix the notes and log it.

## Hard rules (never break)
- Never set or auto-fill a price. Ashley decides.
- No Jodi's name on the public site. No swearing on the site.
- Photos Mom sends later are FINAL; folders 01-07 are OLD until reviewed.
- Drive cleanup needs no permission; destructive deletes do (archive, don't delete).
- Update the live Sheet in place.
