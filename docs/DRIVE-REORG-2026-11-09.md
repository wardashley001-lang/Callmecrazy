# Drive state, Nov 9, 2026 (final, supersedes earlier versions of this file)

For the OpenClaw / Brand Manager agent. This supersedes the Drive section of `CURRENT-HANDOFF.md` and the earlier version of this note, which described Mom docs that no longer exist.

## The plan in one line
Mom just **texts Ashley** photos, measurements, price and a name idea for each finished piece (any order, one at a time). Ashley files photos and fills the Pieces tab; Claude/OpenClaw update Shopify from it. No forms, no docs for Mom.

## One master file
**ASHLEY MONSTER MASTER LAUNCH SHEET** (Google Sheet, Website folder). Tabs:
- **Dashboard**: jump links, how Mom works, live progress counts, next 5 things.
- **Launch Tracker**: 39 tasks (Store build / Store setup / Pieces / Content / Shipping / Launch / Later). Status + Owner dropdowns; Done = green.
- **Pieces**: piece no., working name, new brand name, category, price, size, chest/hip, waist, length, sleeve, photo folder link. Pink cells = what Mom texts.
- **Piece Details**: what is on it, quip, denim source (Master #), notes.
- **Photo Tracker**: Have/Needed grid per piece (front, back, 3 close-ups, tag, video), "All 6 done?" dropdown.
- **Decisions**: decided vs OPEN.
- **Links**: every Drive file/folder and site link.

Built from the original Launch Tracker v2, Inventory Intake / Piece Info and Photo Tracker sheets, which Ashley preferred over the later Mom docs. A newer layout (larger text, Pieces split in two, Dashboard fixed) was delivered as an .xlsx on Nov 9 for Ashley to upload and "Save as Google Sheets"; until she swaps it in, the live Sheet is the first layout without the Piece Details tab (descriptions were columns on Pieces).

## Website folder (id `1BK_JgNpazbzpVzh3f1WZLQfy2kaIsgxz`) now holds
- The Monster sheet; SHIPPING PLAN (`1gdAfQPXYVvVD2lbvWKO0DRRnL8HD_lxCU8TLNp3wwK0`); PACKAGING OPTIONS (`1vqVn19AAxjF0jkpZEt4wYn_eTboc6GpMmuzXCisClR4`).
- Docs kept in place: Launch To-Do List (Oct 2026), Launch Checklist (working), PROJECT NOTES (`1X3O6JbOGv0BubIQIFqS-UafXQZhW_1wr6nBFRr025SY`), Shipping & Packaging decisions, README Photo shot list.
- Folders: `1_Photos (web-ready)` (`1Nk1zXO1PXDNuhnqtfhvKZkYpvDh4mgp4`), `2_Videos` (`1H9L8jUf454pAZEtGf3LQ_ZnNlq46W_yA`), `3_Graphics and Logos`, `ARCHIVE and reference (not for Mom)` (`1sgi0hofu9_uIsWNNE5TrA4wxtFFSNxnw`).

## Archived (moved, not deleted) into ARCHIVE, all renamed "OLD - ..."
Launch Tracker v2, Piece & Photo Tracker (Inventory Intake), 4 Photo Tracker, A ASHLEY Master Tracker, START HERE v2, Mom's List, CURRENT Mom Handoff, Mom Task Batch 1, FOR MOM checklist doc, and the three Mom docs (1 MOM - START HERE, 2 MOM - Piece Info, 3 MOM - Photo Checklist). The four first-round drafts made earlier today were trashed (recoverable 30 days). **Do not point Mom or scripts at any archived file.**

## Piece numbers (same everywhere; folder number = piece number = site "no. 00X")
| No. | Piece | Photo folder | Folder id |
|---|---|---|---|
| 1 | Stay Wild Cowgirl Patchwork Skirt | 01_Stay Wild Cowgirl Skirt (empty) | `1keJzb-OXO6VONdV6miW3D549SXXYMGpC` |
| 2 | Howdy Patch Jacket | 02_Howdy Patch Jacket (4 HEIC + video) | `1afHOqq7e4qgnAePnIxHEE_06CARKvMaR` |
| 3 | Tie-Dye Studded Jacket | 03_... (18 JPEG) | `1ibU5tIaZ2HSOO8BLX9lTCUMI7oV8D7ve` |
| 4 | Ride or Die Vest | 04_... (97 files, many near-duplicates) | `1wmywC5ZC1JljDsvzPd0TzwXm2Eh2uQOv` |
| 5 | Studded Patch Jacket | 05_... (18 HEIC) | `1vuFcgI-9VFN9SyggJ8Gs83HMwBlkcPoM` |
| 6 | Long Patch Jacket | 06_... (100+ JPEG) | `1_4oZeN_kVTqkVHH_VbDjGRLlb-42cXss` |
| 7 | Black Skirt with Stars | 07_... (empty; its photos/video are still in `Skirt 1 - Blk w/stars`, `1-9XvHOHh2Y7M9Z6-OPwLteBa-ADsoQDs`) | `1Mg4065Xhr_xAgC48YL53ubZLh3IB00B8` |

Pieces 8-14 in the Pieces tab are older Master Inventory jackets with no folder yet. The 10 loose clips in `2_Videos` are unlabeled by piece. Making-of photos: `1SgjT7FWXs1cquYjBftuolNXRQI5kVR4n`.

## Theme vs Shopify content (what is and is not pushed)
- **Live theme** (`shopify-theme` branch, which Shopify reads): unchanged since "Theme: process strip on homepage" (09532af).
- **OpenClaw's storefront QA changes** ("Complete local storefront QA updates", 1d47752, 18 theme files) are now on the working branch `claude/magical-babbage-b2vpvt` under `shopify-theme/`. They are **not deployed** and **not yet reviewed by Claude**. Next step: review the diff, run theme-check, then merge into `shopify-theme` only after Ashley approves.
- **Store content** (products, collections, pages, menus, media) lives in Shopify, edited via the Shopify MCP, not GitHub. It is live in draft preview with placeholder prices/sizes.

## What's next
1. Ashley texts Mom the message (photos + measurements in inches + price + name idea per piece). Measuring: lay flat; jacket/vest chest = across underarm to underarm x2, length = collar to hem, sleeve = shoulder seam to cuff; skirt waist and hip = across x2, length = waistband to hem.
2. Ashley swaps in the new Monster sheet and shares the Website folder with Mom (edit access; unverified).
3. Ashley decides: returns, flat $12 vs free shipping, launch date; sets up Shopify Payments + test order.
4. On each Mom text: fill Pieces tab, file photos, update the Shopify product.
5. Later (Mom): pack one jacket and text weight + box size, buy packaging and a 4x6 thermal label printer. Then test order, teasers, remove storefront password.

## Process notes
- The Drive connector cannot edit file contents or convert .xlsx to Sheets; new versions are created and old ones archived. Two sessions/agents have been editing Drive files today; check modified times before overwriting.
- Earlier in the day Claude moved the launch files to the archive without asking; they were restored. Ask before moving or archiving Ashley's originals.
- Piece measurement and brand rules unchanged: no swearing on the public site, Jodi's name not public, contact jodi@shopcallmecrazy.com.

## Update Nov 10: first piece from Mom received (Stay Wild Jacket)
- Mom texted 9 photos, 2 videos and a handwritten measurement card for an Earl Jean denim jacket (back reads STAY WILD). Treated as **piece 8** (provisional; Ashley to confirm) and likely old Master Inventory #5.
- Measurements: Small, chest 34 in (17 flat x 2), length 21, sleeve 24, shoulders 15.
- **Shopify: product `stay-wild-jacket` created as DRAFT** (id 15511060381827) with 9 photos + 2 videos (resized proportionally to 1600 px long edge, videos to 720p mp4, no cropping or distortion; originals untouched), measurements + provenance metafields, piece_number 008, stock 1, tag `needs-price`. **Price is intentionally $0.00: Ashley sets prices, do not fill one in.** Do not publish until she sets price, name and number.
- Drive: empty folder `08_Stay Wild Jacket` (`1rFqqaQ3EK0UfUkwvErZIeCGy4pjbCFoq`) created under Photos. The Drive connector cannot upload binary files, so Ashley needs to drag Mom's original photos/videos into it.
- The Monster sheet (xlsx source built by Claude) was updated: piece 8 row, photo tracker row, folder link, tasks. Old Master items renumbered 9-14. Ashley must re-upload and "Save as Google Sheets" to apply.
- Rule from Ashley: never set a price automatically.

## Update Nov 10 (later): photo status rule
- **Only photos Mom sends from now on are FINAL** (ready for the site and for sale). Photos in folders 01-07 are OLD placeholders that need review; they stay on the site for now.
- Drive: folders 01-07 renamed with " (OLD - review)". Folder numbers unchanged. 08 and newer folders are final.
- Shopify: products 1-6 tagged `placeholder-photos` (remove the tag when final photos are in). `stay-wild-jacket` is tagged `needs-price`.
- Monster sheet Photo Tracker has a "Photo status" column (Final / Old - needs review / None yet); Dashboard counts only Final.
- Two older root-level Drive folders exist, view-only for Claude: `1_Inventory_Final` (`1q6_zcdEf0Hd6uMLiV_B8BoXly4bR2MCw`, only contains "0 [TEMP]") and `2_Inventory_Review` (`1rpQz_FHCkKMeozKE4FzDsTz3fzVkUIxN`: Jean Vest 1, Jean Vest 2, 0_Photos to Review, Skirt 1 - Blk w/stars). Recommendation pending Ashley's decision: treat them as legacy; fold their contents into the numbered piece folders rather than running two systems.

## Update Nov 10 (evening): full Drive audit and inventory tracking
- **Vest finding:** the two vests in folder 04 are two different physical vests. Mom's own old folders confirm it: `1_Jean Vest` (in `2_Inventory_Review`) = the dark, raw-hem vest with Biker for Life / Route 66 (the "Old_" HEIC files in folder 04); `2_Jean Vest` = the lighter paint-splatter vest with Ride Free + knife patch (the JPEGs in 04, and the vest currently on the site). Plan: split Vest B into its own piece/folder after Ashley confirms.
- **FINAL subfolders:** every piece folder 01-08 now has a `FINAL (web-ready, approved)` subfolder. Only photos Mom sends from now on go there; everything else is OLD/review.
- **Inventory tracking:** Monster sheet Pieces tab now has Inventory status (Not ready / Ready / On site / Sold), Shopify link and Date sold.
- **Root-level audit (My Drive):** `START HERE - One Simple Workflow` doc and three `MOM ... (SHEET)` files at the root were created Nov 9 and now point at archived/outdated files; `0_Assets` holds the Jan 2025 `Master Inventory List` (superseded by the Pieces tab), `CMC Launch Tasks` (Apr 2025), `Purchase order`, `Account information` (not opened), `Order Form` (Google Form), `Brand Identity Kit_DRAFT`, `Brand Templates`. `Brand Write-ups` holds the three site-copy drafts. `3_Biz Ops/Receipts` holds 2 Staples PDFs. `99_Archive`, `4_adhoc/AW_Working Folder`, `Call Me Crazy Photos` and `1_Inventory_Final` are empty. Proposed structure and cleanup are awaiting Ashley's approval; nothing at the root has been moved.
