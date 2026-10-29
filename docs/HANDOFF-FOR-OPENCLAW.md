# Call Me Crazy: full handoff for another agent

Written Oct 29, 2026 from a long working session. Last verified state of the store and Drive is Oct 9, 2026; re-check anything marked "verify" before acting. This file is meant to be read cold by a new agent. Companion file: `docs/PROJECT-NOTES.md` (shorter, technical). Slogans: `BRAND-LINES.md`.

## 1. The project in one paragraph
The user's mother ("Jodi" internally; **her name must not appear on the public site**) is launching a one-of-one handmade/upcycled denim line called **Call Me Crazy** (domain shopcallmecrazy.com on GoDaddy, Instagram @shopcallmecrazy, public contact email jodi@shopcallmecrazy.com). The user handles the technology and launch; the mother makes the pieces and must supply names, prices, sizes, measurements, photos and videos. They live apart, so everything that needs her has to be dead simple. The user has little web experience and little time: keep asks small, give exact click paths, and do the work yourself wherever your tools allow.

## 2. What "done" looks like
A Shopify store at shopcallmecrazy.com with a custom theme matching the approved design, real products (name, price, size, measurements, photos, video), payments, shipping, policies, and a defined launch date. Pieces are **one of one** (quantity 1); sold pieces show "Gone." and appear on a "Gone Wall".

## 3. Brand and voice (decisions made)
- Look: poster/collage. Paper (#F4F1EA-ish), hot pink (#F33283 / brand kit #FF007F), black ink, denim blue accents. Cut-paper "ransom note" lettering used **once** (the word "crazy" in the hero). One graphic only: the hanging pink telephone, top-left of the hero. Real photos and videos, no cartoons, not cutesy/"Limited Too", not black-background, not gothic/blackletter, no "CMC" initials.
- Fonts used: Anton (headlines), Courier Prime (labels), Playfair Display/Kaushan Script (accents), several fonts for the ransom letters.
- Voice: bold, unfiltered, loud, sexy but feminine and relatable. **No swearing on the website.** Short lines, one joke per screen, sass aimed at norms not people. "Crazy" is never about mental illness. Don't build on borrowed slang ("slay", "cunty").
- Hero: headline "own your **crazy**", subline "One of one. We dare you." Our Story opener: "They called me crazy. I made it a business."
- Banner lines: Crazy is a compliment / One of one / Well behaved is boring / Not a phase / Behave? Never heard of her / Crazy since birth / Made once. Worn loud. / No restocks. No apologies. / Too much? Good.
- Signup: "Call me?" label, field "email for the next drop", button "join the crazy".
- Dropped (team dislikes): "Zero chill", "Beige is a choice. So is this." as hero banner, too many repeats of "crazy".
- Favorite slogan list lives in `BRAND-LINES.md`.
- An outside brand kit (from Claude Chat) was reviewed. Adopted: Gone Wall, numbered pieces ("No. 001"), shareable "Admit One" order ticket, waitlist/drop page, honest scarcity (never fake timers), banned-word list, specificity in product copy. Declined: "by Jodi", clean-only friendly tone.
- Original draft Brand Identity Kit exists in Drive (older direction: black/white/pink, brushstroke type). The poster/collage direction superseded it.

## 4. Design previews (Claude artifacts, private)
- Mock A (original direction): https://claude.ai/artifact/NsFvqzKuzSAvysxjVKbSb3
- Mock B (brand-kit voice + Gone Wall + drop page + ticket): https://claude.ai/artifact/9F1UEUyWTsvzBMVEEkG4rb
- The mocks are static (vanilla JS SPA) and are not the live site.

## 5. Repository and theme
- Repo: github.com/wardashley001-lang/Callmecrazy. Work branch: `claude/magical-babbage-b2vpvt` (no `main` exists). The Shopify GitHub connection reads branch **`shopify-theme`**, which holds the theme files at the repo root.
- Folders: `shopify-theme/` (the theme), `public/` + `server.js` + `data/` (original Node mock site, not used for production), `design-assets/` (saved cutout art for future use), `docs/`, `call-me-crazy-theme.zip` (upload fallback).
- **Deploy the theme:** edit `shopify-theme/...`, commit on the work branch, then `git subtree split --prefix=shopify-theme -b st-new`, `git branch -f shopify-theme st-new`, `git branch -D st-new`, `git push origin refs/heads/shopify-theme:refs/heads/shopify-theme`. First `git fetch origin shopify-theme` and check for commits Shopify made from the theme editor (editor changes are committed back); merge, don't clobber.
- Theme: Online Store 2.0, custom, "Call Me Crazy". Sections: announcement, header (boxed Bag button with icon + count), hero (cut-paper word via `assets/ransom.js`, video or image, featured product), ticker, up-close (tiles with video/photo linking to product), trio ("one woman / one number / one shot"), featured-drop, process-strip, gone-strip, wall (statement + signup), main-collection, main-product (care + process notes, provenance/measurements from metafields, "Gone." state), main-cart (item thumbnails), gone-wall (lists unavailable products), next-drop (waitlist), main-page, main-404, main-password. Templates include `page.gone-wall` and `page.next-drop`.
- Product metafields the theme reads (namespace `custom`): `piece_number`, `quip`, `provenance`, `measurements`. Not yet created in Shopify admin.
- Homepage settings (hero product/video, tile images/videos, drop collection) are set in `shopify-theme/templates/index.json` using `shopify://shop_images/<file>` and `shopify://files/videos/<file>`.
- Linting: Shopify `theme-check-node` shows no errors (only RemoteAsset warnings for Google Fonts). The Shopify AI Toolkit scripts send prompts to Shopify telemetry; telemetry was opted out via an empty `~/.config/shopify-ai-toolkit/opt-out`. shopify.dev was blocked from the sandbox.
- Known unverified: the agent never saw the live preview; the user reported and the agent fixed (a) "crazy" rendering too small, (b) distorted hero picture (video markup, image heights), (c) Bag button visibility and cart item images. Ask the user to confirm these look right.

## 6. Shopify store (verify live state)
- Store id 79605891203, domain shopcallmecrazy.com, plan Basic, currency **USD** (changed by user). Store name was still "My Store" (user must change to "Call Me Crazy" in Settings > Store details).
- Collections (smart, by product type): Jackets, Vests, Skirts. Starter collections still exist: Home page, Dresses, Tops, Bottoms, Outerwear, Accessories.
- Six products created ACTIVE with quantity 1, placeholder names and prices, one photo each, tags `placeholder`, `one-of-one`: Stay Wild Cowgirl Patchwork Skirt $148, Howdy Patch Jacket $198, Tie-Dye Studded Jacket $218, Ride or Die Vest $168, Studded Patch Jacket $208, Long Patch Jacket $248. **Real prices are probably higher**: the Master Inventory List (Drive) lists jean jackets at $315 to $850.
- Pages created: The Gone Wall (`gone-wall`, template gone-wall), Next drop (`next-drop`), Our Story, How it's made, Care, Shipping & Returns (policy text is a stub: "Policy coming before launch"). Default Contact page exists (uses jodi@shopcallmecrazy.com). Menus: main-menu = Shop All, Jackets, Vests, Skirts, The Gone Wall, Our Story; footer = Shop, The Gone Wall, Our Story, How it's made, Care, Contact, Shipping & Returns.
- Files uploaded to Shopify Files: closeup-skirt/howdy/tiedye/vest/desert/long (jpg), videos sparkle-studs.mp4 and sparkle-back.mp4.
- **How media upload works from an agent:** `stagedUploadsCreate` → curl the file (multipart form with returned parameters) to the returned URL → `fileCreate` or `productCreateMedia` with the `resourceUrl`. Staged targets expire in about a day. Local files cannot be passed directly to product tools; they need public HTTPS or this staged flow.
- The Shopify MCP/GraphQL tool blocks theme publishing/deletion and live-theme writes; theme changes go through GitHub.
- Not done by anyone yet: store name, Shopify Payments, taxes, shipping profile, policies, domain primary check, checkout branding, notification emails, test order, removing the storefront password (do on launch day).

## 7. Google Drive (jodi@shopcallmecrazy.com)
- Website folder id `1BK_JgNpazbzpVzh3f1WZLQfy2kaIsgxz`: `1_Photos` (subfolders for tie-dye jacket, denim vest, long patch jacket, making-of, 5_Howdy Patch Jacket, 6_Studded Patch Jacket (desert)), `2_Videos`, `3_Graphics and Logos`.
- ~198 iPhone photos were organized into those folders. Older inventory photos (HEIC) were **copied** (originals untouched) into the Howdy, Studded Patch Jacket and vest folders (vest copies prefixed "Old_"). Duplicates ("Copy of …"), two screenshots and a zip were skipped. HEIC files are not yet web-ready; the agent decoded samples locally with pillow-heif.
- Folder "Skirt 1 - Blk w/stars" in 2_Inventory_Review (id `1-9XvHOHh2Y7M9Z6-OPwLteBa-ADsoQDs`) has a video of a black studded skirt (compressed copy saved as `public/video/black-skirt.mp4`). The pink cowgirl patchwork skirt video has **not** been found.
- Brand Write-ups folder id `1-h0im5eWfUvq-8vBqmFoz5Jxg8qIeFaE` (mom's drafts): Design Process, Care Instructions, Customer Thank-You Note. Facts from them are on the site (How it's made, Care). "Master Inventory List" and "Account information" spreadsheets exist in 0_Assets/2_Inventory_Review; the "Account information" sheet was deliberately not opened.
- Documents created by the agent (all in Website folder): Launch Checklist (working), Launch To-Do List (Oct 2026), FOR MOM checklist doc, Inventory Intake (fill in), 1 MASTER Launch Tracker (v2), 2 MOM'S LIST, 4 PHOTO TRACKER, START HERE - This week only (v2), SHIPPING PLAN - Recommended answers (Arizona), Shipping & Packaging - Decisions and To-Do, PACKAGING OPTIONS, PROJECT NOTES. Older versions were renamed with an "OLD -" prefix.
- **Connector limit:** the Drive tool can create files, move/rename, but **cannot edit existing file contents**. To "edit," create a new version and rename the old one.
- The user once called the Drive "OneDrive"; it is Google Drive.

## 8. Decisions made so far
- Name is "Call Me Crazy" with no "by Jodi"; no personal name anywhere on the site.
- Public email: jodi@shopcallmecrazy.com (final).
- Ships from **Arizona**; processing time **2 business days**; US only recommended.
- No swearing on the site.
- Hero keeps "own your crazy"; subline "One of one. We dare you."
- Skip the "model's face in long jacket photos" question (the user said to ignore it). Note the photos do show a woman's face; revisit before using them publicly.
- Care and process pages published from mom's drafts (reworded, no name). Care: spot clean only, no wash/soak/dry clean, no heat.
- Piece names, prices, sizes are placeholders until the mother fills in the Inventory Intake sheet.
- Active products exist while the store is presumably password-protected (verify).

## 9. Research findings (estimates; confirm before acting)
- **Postage from Arizona:** USPS Ground Advantage, 2 to 4 lb jacket: about $9 to $15; Priority Mail about $9 to $19. Peak surcharge about +$0.40 to +$0.55 per package, Oct 4, 2026 to Jan 17, 2027. Sources disagree and no verified Arizona zone table was found. Use a Shopify test label for real numbers.
- **Insurance:** Ground Advantage includes $100. USPS extra: about $4.50 ($200 value), $7.55 ($500), about $12 ($800, calculated). Shopify Shipping insurance about $0.89 per $100 domestic (cheaper); availability on Basic plan unconfirmed. Signature fee not found.
- **Recommendation made:** flat $12 shipping (or free shipping baked into prices), Ground Advantage with insurance, signature on pieces $400+, photograph every piece before packing, wrap studded pieces in tissue/garment bag. Approx. per-order cost: $9-15 postage + $2-8 insurance + $2-4 packaging.
- **Packaging:** budget start: stock boxes (better than mailers for studs) or poly mailers (~$11-19 per 100), hot pink tissue + logo sticker seal, ticket-style thank-you card with care note (~$11 per 100 at GotPrint; Moo costlier), hang tags with piece number, rhinestone stickers. Custom pink mailer boxes ~$1-3.50 each at 250+ (Packlane, noissue, Arka). Prices came from guides, not vendor quotes.
- **Label printer:** needs a 4x6 thermal label printer: Rollo (about $90-200) or budget MUNBYN (about $65-130); generic 4x6 direct-thermal rolls about $0.01-0.04 per label; avoid DYMO/Brother (proprietary rolls). Until then print on regular paper.
- **Market/viral references used for voice:** Mirror Palais, Enfants Riches Déprimés, Miaou, Marine Serre, EB Denim, E.L.V. Denim; trends: maximalism over quiet luxury, scarcity/drops, founder-led content, group-chat tone.

## 10. Open items (priority order)
1. User: change store name; set up Shopify Payments; enter shipping (Arizona), taxes, policies, domain, checkout branding, notification emails; remove password at launch.
2. Mother: fill the Inventory Intake sheet (name, price, size, measurements, denim origin, what's on it) for the first 3 pieces, then all; photos (front, back, 3 close-ups, tag) and 5-10 second sparkle videos; pack one jacket/vest/skirt and weigh/measure; decide return policy, shipping price (flat $12 vs free), thank-you note signature.
3. Agent: update Shopify products from the sheet (names, prices, descriptions, sizes, measurements via metafields), add more photos/videos per piece, edit photos (straighten, clean backgrounds, color), convert HEIC to web-ready JPEGs, compress/loop videos, rename Drive folders to final names, reorganize Drive (user said "later").
4. Both: returns policy; art-rights check on the hanging-phone graphic (some earlier cutout art looked third-party; only the phone is in use); thank-you note placement; launch date (real date, no fake countdowns); Instagram bio link; teaser posts 7-10 days before; email list tool (Shopify Email is free to start).
5. Buy: thermal label printer + labels, packaging, stickers, cards, hang tags (see PACKAGING OPTIONS).
6. Theme follow-ups: confirm live preview matches (hero video, tile images, cart thumbnails, Bag button); long jacket close-up not yet on the homepage (strip has 5 tiles); black skirt video not yet on the site; create metafields; 404/other pages polish; optional Gone Wall sold data.

## 11. How the user likes to work
- Very simple, step-by-step instructions; minimal reading. "Make it super simple for me and her." Prefers one short list over many documents. Dislikes cheesy/try-hard copy, repeated "crazy", and anything that looks "cutesy".
- Wants things done directly in Shopify/Drive where tools allow rather than being told to do them; wants key information stored in files, not lost in chat.
- Is OK with the agent creating drafts/placeholder products and iterating later ("everything is very rough draft right now").
- Confirm before outward or hard-to-reverse actions (publishing, sending, deleting). Moves/renames in Drive were reversible and nothing was deleted.

## 12. Environment gotchas for the next agent
- Sandbox egress is policy-limited: iCloud and Pinterest were blocked; shopify.dev was blocked; Google/Shopify upload hosts worked.
- MCP connectors (Shopify, Google Drive, GitHub) disconnected and reconnected repeatedly; retry via ToolSearch.
- Large Drive downloads come back as huge base64 JSON saved to a file; decode with Python.
- No customer accounts, orders or payments exist yet; nothing has been sold.
