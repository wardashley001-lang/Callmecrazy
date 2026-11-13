# Decision: sold pieces on the Gone Wall (Nov 13, 2026)

Decided by Ashley (voice, Nov 13, 00:05 CST). Recorded here so the Claude agent can carry it out.

## Decision
Sold pieces 10-14, 17, and 18 should appear on the Gone Wall as sold-out Shopify products.

## How (from the Nov 11 handoff, section 3)
- Create each product as ACTIVE.
- Price stays $0.00 (never set a price; Ashley decides). The theme hides the $0.00 price and shows "gone."
- Inventory 0 at the location gid://shopify/Location/94722064515.
- Add the tag `needs-price` if it's not already set, and the metafields from the handoff (piece_number, measurements, provenance, quip).
- Photos come from each piece's Drive folder (FINAL subfolder if present, otherwise the piece folder). Use the upload recipe in the handoff.

## Preconditions (not yet verified)
- Shopify Admin access for the agent. The Brand Manager agent has no authenticated Shopify session as of Nov 13; the Claude agent should confirm its own access first.
- Whether the live store runs the "gone." theme (`b331c42`). Not verifiable from outside the password page. Check the active theme version in Shopify Admin before publishing products.

## Still open
- Public rename of "Rare AF Jeans" (piece 14) before it goes live.
- Ashley to confirm which content to make from the sold items.

## Owner
Claude agent carries out the Shopify work and logs it in docs/CHANGELOG-AGENTS.md.
