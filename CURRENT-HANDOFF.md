# Call Me Crazy — Current Handoff

**Updated:** November 9, 2026  
**Audience:** Claude Code / next implementation agent  
**Repo:** `wardashley001-lang/Callmecrazy`

## Current state

- The Shopify theme is being prepared locally; the storefront is still password-protected.
- The live storefront currently needs an authorized Shopify preview/admin review before any production decision.
- Google Drive is the source of truth for brand assets, product intake, photos, and launch coordination.
- Canonical Mom handoff document: [CURRENT - Mom Handoff - Call Me Crazy](https://docs.google.com/document/d/1AcfL-DBIWZw9GGq8acM883-VsRihx0YZjs0xs9XGvkI/edit)
- Mom’s current assignment is limited to the first three pieces plus one packed-jacket measurement.

## Current workflow

1. **Ashley:** send Mom the website link/password and canonical handoff document.
2. **Mom:** review the site; complete facts for the first three pieces in Inventory Intake; take six photos per piece; take one short sparkle video; pack one jacket and send packed weight/dimensions.
3. **Ashley + Brand Manager:** review the facts/assets, match every asset to the correct piece, and resolve gaps before Shopify product entry.
4. **Ashley decisions still required:** returns policy, customer shipping price, launch date, and Shopify Payments/settings.
5. Packaging purchases, printer decisions, remaining pieces, and broader shipping work are later steps—not current Mom tasks.

## Drive source files

- **Start Here:** current ownership and sequence.
- **Mom’s List:** current six-step task list.
- **Inventory Intake:** product facts only.
- **Photo Tracker:** photo checklist only.
- **Master Tracker:** overall launch status.

Do not delete the older launch documents; they remain historical/reference material.

## Theme work completed locally (not yet pushed)

The local theme draft includes QA improvements for:

- one-of-one cart quantity behavior;
- visible and announced form/password errors and success states;
- product gallery thumbnail state and image alt-text synchronization;
- product-card and cart image alt-text fallbacks;
- keyboard skip link and high-contrast focus states;
- accessible cart table headers;
- removal of unapproved shipping/timing claims;
- non-operational approved brand language and product truth.

Latest local QA result: **Theme Check 0 errors / 6 RemoteAsset warnings**.

The following theme files have local changes and are intentionally **not included in this handoff commit**:

```text
shopify-theme/README.md
shopify-theme/assets/theme.css
shopify-theme/assets/theme.js
shopify-theme/layout/password.liquid
shopify-theme/layout/theme.liquid
shopify-theme/sections/announcement.liquid
shopify-theme/sections/featured-drop.liquid
shopify-theme/sections/gone-wall.liquid
shopify-theme/sections/header.liquid
shopify-theme/sections/main-cart.liquid
shopify-theme/sections/main-collection.liquid
shopify-theme/sections/main-password.liquid
shopify-theme/sections/main-product.liquid
shopify-theme/sections/next-drop.liquid
shopify-theme/sections/up-close.liquid
shopify-theme/snippets/product-card.liquid
shopify-theme/snippets/signup.liquid
shopify-theme/templates/index.json
```

## Open launch gates

- Ashley review/approval of the local theme changes before merge or deployment.
- Authorized Shopify preview testing, including password page, homepage, collection, product gallery, signup errors, cart behavior, and keyboard navigation.
- Product facts, photos, and video from Mom for the first three pieces.
- Correct image-to-product matching and product-specific alt text in Shopify Admin.
- Inventory quantity set to one for each one-of-one product.
- Ashley’s decisions on returns, shipping price, launch date, and Shopify settings.
- Final packaging/shipping test using one fully packed jacket; do not buy supplies yet.

## Agent instructions

- Treat this file as a current handoff, not proof that anything is live.
- Do not push theme changes, deploy, publish, alter Shopify settings, or send external messages without Ashley’s explicit approval for that exact action.
- Preserve the one-of-one product model: cart quantity is fixed at one and Shopify inventory must be one.
- Keep Drive as the asset/source-file home; do not recreate or move Drive documents into the repo.
- Before changing code, inspect the current working tree because the QA files above may still be uncommitted local work.

## Recommended next actions

1. Ashley sends Mom the canonical handoff and access details.
2. Wait for Mom’s first-three-piece facts/assets/measurement.
3. Review and reconcile those assets against Inventory Intake and Photo Tracker.
4. Have Ashley review the local theme diff.
5. Run authorized Shopify preview checks, then separately decide whether to merge/deploy.

