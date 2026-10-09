# Call Me Crazy: project notes (single source of truth)

Last updated: Oct 9, 2026. Keep this file current. Everything decided in chat lives here.

## Who and what
- Brand: **Call Me Crazy**, handmade one-of-one denim. No "by Jodi" and no name on the site (Jodi stays behind the scenes). Public contact email: jodi@shopcallmecrazy.com (final). Instagram: @shopcallmecrazy. Domain: shopcallmecrazy.com (GoDaddy).
- The user does the tech and launch; Jodi (their mom) makes the pieces, supplies names, prices, photos, measurements. They are not in the same place.
- Ships from Arizona. Processing time: 2 business days (decided). US only at launch (recommended).

## Brand voice and lines
- Look: poster/collage, paper + hot pink + black, ransom-note "crazy" (hero only), hanging pink phone (the only graphic used). Not cutesy, not gothic, not black background.
- Voice: bold, unfiltered, sexy and loud but feminine and relatable. **No swearing on the site.** Short lines. Aim sass at norms, never at women or bodies. "Crazy" never refers to mental illness.
- Hero: "Own your crazy" + "One of one. We dare you." Our Story opens "They called me crazy. I made it a business."
- Dropped lines (team dislikes): "Zero chill", "Beige is a choice. So is this." (as hero banner).
- Full slogan list: BRAND-LINES.md. Favorites: Not a phase / Behave? Never heard of her / Dressed for trouble / Crazy looks good on you / Certified crazy / Member of the Too Much Club / Normal is overrated / Made once. Worn loud.
- Signup button text: "join the crazy". Placeholder: "email for the next drop".
- Brand kit zip from Claude Chat was reviewed; adopted: Gone Wall, numbered pieces, "Admit One" order ticket, drop waitlist, honest scarcity, banned words. Declined: "by jodi", clean-only tone.

## Shopify store (79605891203, shopcallmecrazy.com, Basic plan, USD)
- Still to change by owner: store name is "My Store" (must be Call Me Crazy).
- Collections (smart by product type): Jackets (512032178307), Vests (512032211075), Skirts (512032243843). Old starter collections (Dresses, Tops, Bottoms, Outerwear, Accessories) still exist.
- Products (ACTIVE, qty 1 each, placeholder names/prices, tag "placeholder"): Stay Wild Cowgirl Patchwork Skirt $148, Howdy Patch Jacket $198, Tie-Dye Studded Jacket $218, Ride or Die Vest $168, Studded Patch Jacket $208, Long Patch Jacket $248. REAL prices likely higher: old Master Inventory List shows $315 to $850 for jean jackets.
- Pages: gone-wall (template page.gone-wall), next-drop (page.next-drop), our-story, how-its-made, care, shipping-returns, contact (default). Menus: main-menu and footer updated.
- Files uploaded to Shopify Files: close-ups (skirt, howdy, tiedye, vest, desert, long) and videos sparkle-studs.mp4, sparkle-back.mp4.

## Theme and deploy workflow
- Theme source: `shopify-theme/` on branch `claude/magical-babbage-b2vpvt`. Shopify's GitHub connection reads branch **`shopify-theme`** (theme files at root).
- To deploy: commit theme changes, then `git subtree split --prefix=shopify-theme -b st-new`, `git branch -f shopify-theme st-new`, `git push origin refs/heads/shopify-theme:refs/heads/shopify-theme`, delete st-new. Check for editor commits from Shopify first (git fetch origin shopify-theme).
- A zip is also kept at call-me-crazy-theme.zip.
- Template settings (hero product/video, up-close tiles, drop collection) live in shopify-theme/templates/index.json. Media is referenced as shopify://shop_images/<file> and shopify://files/videos/<file>.
- Uploading media from here works: stagedUploadsCreate, curl the file to the returned target, then fileCreate / productCreateMedia. Staged targets expire after about a day.
- Theme check: Shopify theme-check-node (installed in a temp dir) reports no errors, only RemoteAsset warnings for Google Fonts.
- Product metafields the theme reads (namespace custom): piece_number, quip, provenance, measurements.
- Mocks (design previews, Claude artifacts): Mock A https://claude.ai/artifact/NsFvqzKuzSAvysxjVKbSb3, Mock B https://claude.ai/artifact/9F1UEUyWTsvzBMVEEkG4rb.
- Telemetry from the Shopify toolkit scripts was opted out (empty file at ~/.config/shopify-ai-toolkit/opt-out).

## Google Drive (jodi@shopcallmecrazy.com)
- Website folder 1BK_JgNpazbzpVzh3f1WZLQfy2kaIsgxz: 1_Photos (tie-dye jacket, vest, long patch jacket, making-of, 5_Howdy Patch Jacket, 6_Studded Patch Jacket), 2_Videos, 3_Graphics and Logos.
- Docs/sheets created: Launch Checklist, Launch To-Do List, FOR MOM checklist, Inventory Intake sheet, 1 MASTER Launch Tracker, 2 MOM'S LIST, 4 PHOTO TRACKER, START HERE (v2), SHIPPING PLAN, Shipping & Packaging doc, Packaging Options, this notes file.
- Brand Write-ups folder (1-h0im5eWfUvq-8vBqmFoz5Jxg8qIeFaE): design process, care instructions, thank-you note (written by Jodi, drafts).
- The Drive connector cannot edit file contents. To change a sheet, create a new version and rename the old one "OLD - ...".
- Original HEIC photos in the Drive are not yet web-ready; "Old_" prefixed copies were added to the vest folder.

## Care and process facts (from Jodi's drafts)
- Care: spot clean only. Do not wash, soak, dry clean. No heat (no iron, steam, dryer).
- Process: wash first; bleach soak or hand-painted bleach then peroxide soak and air dry; fabric paint mixed with medium and water, dried 24-48 h then heat-set; foil with transfer gel and heat press; dye painted on and cured 24-48 h before rinsing; raw edges cut, tweezed, washed; hotfix studs/rhinestones held 12-15 seconds each.

## Shipping research (estimates; confirm with a test label in Shopify)
- USPS Ground Advantage, 2-4 lb package: about $9 to $15 depending on distance; Priority Mail about $9 to $19. Peak surcharge about +$0.40 to +$0.55 until Jan 17, 2027.
- Insurance: Ground Advantage includes $100. USPS extra: about $4.50 for $200, $7.55 for $500, about $12 for $800 (calculated). Shopify insurance about $0.89 per $100 (domestic), cheaper; availability on Basic plan not confirmed.
- Recommendation: flat $12 shipping (or free shipping built into prices), ship Ground Advantage with insurance, signature on pieces $400+, photograph every piece before packing, tissue or garment bag around studded pieces.
- Per-order cost estimate: $9-15 postage + $2-8 insurance + $2-4 packaging.

## Packaging research
See Packaging Options doc in Drive. Summary: start with stock boxes or poly mailers + hot pink tissue + custom stickers, thank-you card and care card; custom boxes only after volume. Prices are from reviews and guides, not vendor quotes.

## Open decisions and to-dos
- Return policy (final sale, exchange only, or returns), shipping price (flat $12 or free), real piece names/prices/sizes/measurements, packed weights, public photos, cowgirl skirt video, art rights check on the phone graphic, thank-you note placement and signature, launch date.
- Payments (Shopify Payments), taxes, policies, domain, checkout branding, store name: owner does these in Shopify admin.
- Rename Drive folders and reorganize Drive later (owner said to do later).
