# OpenClaw update: everything done Nov 10-11, 2026

Single source of truth for the brand manager agent. Supersedes older notes where they conflict (see also `docs/DRIVE-REORG-2026-11-09.md`, which is the longer running log).

## 0. Hard rules (always)
- **Never set or auto-fill a price.** Prices are Ashley's decision. New products stay at $0.00 with the `needs-price` tag.
- Jodi's name must **not** appear on the public site. Contact is jodi@shopcallmecrazy.com.
- No swearing on the site ("Rare AF Jeans" needs a public rename: suggested "Rare Jeans", Ashley to decide).
- Size wording: just "Small" (not "fitted").
- Photos Mom sends from now on are **FINAL**. Folders 01-07 hold OLD photos that still need review but stay on the site for now.
- Ashley does tech, Mom supplies photos/measurements by text/Drive. Ships from Arizona, 2 business days processing.
- Do Drive organization without asking permission (Ashley granted this).
- **The tracker Google Sheet is edited live in Drive. Never hand over xlsx copies.**
- Push repo updates to `claude/magical-babbage-b2vpvt` so this agent stays current.

## 1. Google Drive structure (final)
Root `0AEUOuIG5CALMUk9PVA`:
| Folder | Id |
|---|---|
| 1_Inventory & Photos | `1Nk1zXO1PXDNuhnqtfhvKZkYpvDh4mgp4` |
| 2_Videos | `1H9L8jUf454pAZEtGf3LQ_ZnNlq46W_yA` |
| 3_Brand | `1RNSHR7rRNXzCxPEgrkzXDp70W75q2cWJ` |
| 4_Business | `1A7C3dN0_PdKgeDLGj4BS17EIiIN6QCr9` (Shipping Plan, Packaging Options) |
| 99_Archive | `128yV2K4qOE2yH3TtBBoGTFdueXJvpX1y` (old docs, renamed "OLD - ...", nothing deleted) |

Inside 1_Inventory & Photos: one folder per piece, **folder number = piece number = site "no. 00X"**. Each new piece folder has a `FINAL` subfolder (web-ready, approved). Anything else in a piece folder counts as OLD. Pre-made empty template folder `00_New Piece` (was 20) for the next piece; 19 is also pre-made.

Piece folder ids: 01 `1keJzb-OXO6VONdV6miW3D549SXXYMGpC`, 02 `1afHOqq7e4qgnAePnIxHEE_06CARKvMaR`, 03 `1ibU5tIaZ2HSOO8BLX9lTCUMI7oV8D7ve`, 04 `1wmywC5ZC1JljDsvzPd0TzwXm2Eh2uQOv`, 05 `1vuFcgI-9VFN9SyggJ8Gs83HMwBlkcPoM`, 06 `1_4oZeN_kVTqkVHH_VbDjGRLlb-42cXss`, 07 `1Mg4065Xhr_xAgC48YL53ubZLh3IB00B8`, 08 `1rFqqaQ3EK0UfUkwvErZIeCGy4pjbCFoq`, 09 `1IKLABbt-2qRc-QFJ5Y9NZyRYX5rw2BVl` (FINAL `1u8Hg_3ufInEw_CehFfsDC_CF0LADA_rV`), 10 `1ZGiOuCeuUBACdwjJ2v29NX1_MbKaqIku`, 11 `1lbY8JTiS8vU37qV_avCTpFKLbUkO07Kn`, 12 `1fWq1Z4mR5xczCPm5jVLDmbLARPd7qmmF`, 13 `1GywYC1XJbQ-oDucDANCNPjfIGwbPDQo8`, 14 `1oCwlibiv1dxBQLrNXpBv03pqxZUTfuxD`, 15 `1VZnngGFN8Plsc6ZouZfC3RqILjIRPj-R`, 16 `1eG4BFwcuQHjw6hkMuK55wNntxZwyhHDg`, 17 `1sY1QLSSEyPo33i5UGe6NzNXAJnMn17hB`, 18 `1LozRZktVg4wAM63apsb7-cxvlAgkz4cx`, 19 `15fc8F0Un5dPcz7o_pzJcryy4sKt6SmBD`, 00_New Piece `1BnB1GY6dQHouyBZg10w1WpEGGdmkCpY5`.

### Drive audit and cleanup (done)
- Full audit of the drive; three duplicate/outdated Google Sheets and the old master inventory tracker moved to 99_Archive as "OLD - ...". Purchase-order and order forms were just templates.
- Launch files Ashley wanted were restored after an early over-eager archive; since then Ashley said stop asking.
- Mixed-up folders (two different garments in one folder) were found and split for **02 Howdy, 03 Tie-Dye, 04 Ride or Die Vest, 05 Studded Patch**. Folder **06 not yet checked** (100+ JPEGs, likely mixed).
- Drive connector limits: can create folders, move/rename/trash, read and download; **cannot upload binaries**. Mom's originals must be uploaded by Ashley into the FINAL folders.

## 2. Pieces
| No. | Piece | State |
|---|---|---|
| 1-6 | Cowgirl Skirt, Howdy, Tie-Dye, Ride or Die Vest, Studded Patch, Long Patch | On site with placeholder photos, placeholder prices ($148-$248) and tag `placeholder-photos` |
| 7 | Black Skirt with Stars | Not on site |
| 8 | Stay Wild Jacket | Draft in Shopify, Small, chest 34, length 21, sleeve 24, photos+videos FINAL, price blank (`needs-price`) |
| 9 | Graffiti Blazer (old Master #3, to confirm) | Draft in Shopify, Small, chest 36, length 23.5, sleeve 23, photos FINAL, **video missing** |
| 10-14, 17, 18 | Ride a Cowboy, Camo Pants, Lake Rockstar Jacket, Rock & Love Molly Jacket, Rare AF Jeans, Crazy Since 94 Jeans, POW Camo Jacket | **SOLD**: Gone Wall + content. Shopify products not created yet |
| 15, 16 | not reviewed | |
| 21-25 | old Master leftovers (Maggy London, Levi's trucker, Earl, Merona, Vintage America Blues) | No photos yet |

Shopify product ids: stay-wild-jacket `15511060381827` (variant `68301924335747`); graffiti-blazer `15511253352579` (variant `68303189540995`, inventory item `70142457675907`); older six: skirt `15411129843843`, howdy `15411130073219`, tie-dye `15411130204291`, vest `15411130400899`, studded `15411130531971`, long `15411130695811`.

## 3. Shopify / theme work
- Theme lives in `shopify-theme/`; deploy by `git subtree split --prefix=shopify-theme HEAD` then push the sha to `refs/heads/shopify-theme` (fast-forward). Current deployed head b331c42. Theme-check: 0 errors, 4 RemoteAsset warnings.
- **Sold items show "gone." instead of a price**: `snippets/product-card.liquid` and `sections/main-product.liquid`. The Gone Wall section lists products where `product.available` is false. Sold products must be created ACTIVE with inventory 0 and a $0.00 price (hidden by the theme).
- OpenClaw's earlier 18-file QA changes were reviewed and **deployed** together with the above (accessibility, OG tags, cart qty locked to 1, removed "Free over $100" and "Ships in 5-7 days" claims, piece-number fallback removed).
- Upload recipe for products: `stagedUploadsCreate` -> multipart curl to the returned URL -> `productCreate` with media (`IMAGE`/`VIDEO`, not `EXTERNAL_VIDEO`) -> `productVariantsBulkUpdate` -> `inventorySetQuantities` (needs `@idempotent(key: ...)`, `changeFromQuantity: null`, location `gid://shopify/Location/94722064515`) -> `metafieldsSet` (namespace `custom`: piece_number, measurements, provenance, quip) -> `tagsAdd`.
- Image handling: apply EXIF transpose, resize to 1600px long edge, JPEG q85, never distort aspect ratio; HEIC decoded with pillow-heif; videos to 720p mp4.

## 4. The tracker: "ASHLEY MONSTER MASTER LAUNCH SHEET"
Sheet id `1zdJvnI7GF-DQKwJ4aX0sEC03MJkiRJOtzkh8IEUIvwc` (tabs: Dashboard, Launch Tracker, Pieces, Photo Tracker, Decisions, Links). Update it **in place** with the Sheets tools.

**Pieces tab is now one clean table (row 4 header, data from row 5, columns A-S):** No. | Piece | Status | Photos | Price (Ashley) | Size | Chest/hip in | Waist in | Length in | Sleeve in | Category | What is on it | One-line quip | Shopify | Date sold | Photo folder | Denim source | Notes | Final brand name (later). Status is color coded (Sold gray, On site green, Draft yellow, Not ready red); filter on the header; two columns frozen.
- Photo Tracker has a Photo status column; Dashboard and Links refreshed.

## 5. Open decisions / waiting on Ashley
1. Rename "Rare AF Jeans" for the public site?
2. Prices for pieces 8 and 9 (and later ones). Never auto-fill.
3. Confirm Graffiti Blazer = old Master #3, and piece numbers 008/009.
4. Graffiti Blazer video is missing from Drive.
5. Upload Mom's originals into the FINAL folders (connector can't).
6. Which content to create from sold items (format unspecified).
7. Returns policy, flat $12 vs free shipping, Shopify Payments + test order (see Launch Tracker).

## 6. Next steps for the agent
- Create sold-out ACTIVE Shopify products for 10-14, 17, 18 from their Drive photos (no price, `gone.` shows).
- Check folder 06 for mixed jackets; audit live product photos against pieces; confirm the Howdy video belongs to the Howdy jacket.
- Keep the tracker, this repo, and Drive in sync after every change.
