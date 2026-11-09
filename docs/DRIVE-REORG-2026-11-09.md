# Drive reorganization, Nov 9, 2026

Done by Claude Code at Ashley's request ("simplify the tasks for Mom, link the trackers to each other, number the photo folders to match the piece numbers, make the tables easy to read, hyperlink the links"). This file is for the OpenClaw / Brand Manager agent. **This supersedes** `CURRENT-HANDOFF.md`'s document map and the Drive docs "CURRENT - Mom Handoff" and "Mom Task Batch 1" (both now archived).

## What Mom sees (top level of Website folder, id `1BK_JgNpazbzpVzh3f1WZLQfy2kaIsgxz`)
All three are Google Docs with formatted tables and real hyperlinks.

| File | Doc id | Purpose |
|---|---|---|
| 1 MOM - START HERE | `1xfzPWOAnnFDkra02NdJI7RqSB2W1gUxIx-wSosBrjcA` | Her five jobs, with links and a Done? column |
| 2 MOM - Piece Info | `1wysN6q9DDn2bZzZvvqrnLxVONByXV8bkfsoTFDle9sA` | Table: new name, price, size, waist, chest/hip, length, denim source for pieces 1-7 |
| 3 MOM - Photo Checklist | `1BC78pbBmO3hnOD4Ll2f8b3i5_J5GF1lJtbdPcQjaMyg` | Table of photos to take per piece, with upload-folder links |

Plus folders: `1_Photos (web-ready)` (`1Nk1zXO1PXDNuhnqtfhvKZkYpvDh4mgp4`), `2_Videos` (`1H9L8jUf454pAZEtGf3LQ_ZnNlq46W_yA`), `3_Graphics and Logos`.

## What Ashley sees
- **A ASHLEY - Master Tracker (with links)**: doc id `1AjCiNzIhjWZrDtTVcGJOZoe6jH0qbHAHzbTdqWDTO0w`. Files at a glance, the piece-number table, and a 17-row to-do list, each row linked to the file it needs.
- **ARCHIVE and reference (not for Mom)**: folder `1sgi0hofu9_uIsWNNE5TrA4wxtFFSNxnw`. Everything old or reference-only lives here.

## Piece numbers (same in every file, matching the site's "no. 00X")
| No. | Piece | Photo folder (renamed) | Folder id | Batch 1 |
|---|---|---|---|---|
| 1 | Stay Wild Cowgirl Patchwork Skirt | 01_Stay Wild Cowgirl Skirt (new) | `1keJzb-OXO6VONdV6miW3D549SXXYMGpC` | yes |
| 2 | Howdy Patch Jacket | 02_Howdy Patch Jacket | `1afHOqq7e4qgnAePnIxHEE_06CARKvMaR` | yes |
| 3 | Tie-Dye Studded Jacket | 03_Tie-Dye Studded Jacket | `1ibU5tIaZ2HSOO8BLX9lTCUMI7oV8D7ve` | later |
| 4 | Ride or Die Vest | 04_Ride or Die Vest | `1wmywC5ZC1JljDsvzPd0TzwXm2Eh2uQOv` | yes |
| 5 | Studded Patch Jacket | 05_Studded Patch Jacket | `1vuFcgI-9VFN9SyggJ8Gs83HMwBlkcPoM` | later |
| 6 | Long Patch Jacket | 06_Long Patch Jacket | `1_4oZeN_kVTqkVHH_VbDjGRLlb-42cXss` | later |
| 7 | Black Skirt with Stars | 07_Black Skirt with Stars (new, empty) | `1Mg4065Xhr_xAgC48YL53ubZLh3IB00B8` | later |

- Making-of folder was renamed "Making-of (process shots)" (`1SgjT7FWXs1cquYjBftuolNXRQI5kVR4n`).
- **Batch 1 = pieces 1, 2 and 4 (skirt, jacket, vest)** is Claude's proposal (one of each type, to match "pack one jacket/vest/skirt"). Ashley still needs to confirm. Earlier docs said "first 3 pieces" without naming them.
- Old photos from earlier work are in those folders as HEIC; the black skirt photos/video still live in `Skirt 1 - Blk w/stars` (`1-9XvHOHh2Y7M9Z6-OPwLteBa-ADsoQDs`, under 2_Inventory_Review) and were not moved into folder 07.

## What was archived (moved to the ARCHIVE folder, renamed "OLD - ..." where replaced)
- OLD - 2 MOM'S LIST, OLD - 4 PHOTO TRACKER, OLD - Inventory Intake, OLD - START HERE v2, OLD - 1 MASTER Launch Tracker v2, OLD - FOR MOM checklist doc, OLD - CURRENT Mom Handoff 2026-11-09, OLD - Mom Task Batch 1.
- Reference (kept at original names): Launch Checklist (working), Launch To-Do List (Oct 2026), README - Photo shot list, SHIPPING PLAN (`1gdAfQPXYVvVD2lbvWKO0DRRnL8HD_lxCU8TLNp3wwK0`), PACKAGING OPTIONS (`1vqVn19AAxjF0jkpZEt4wYn_eTboc6GpMmuzXCisClR4`), PROJECT NOTES (`1X3O6JbOGv0BubIQIFqS-UafXQZhW_1wr6nBFRr025SY`), Shipping & Packaging decisions doc.
- Nothing was deleted. Four intermediate drafts Claude created minutes earlier (plain-text/CSV versions of files 1, 2, 3 and the tracker) were moved to the Drive trash (recoverable for 30 days). The old Inventory Intake sheet was empty of Mom's data, so nothing was lost; it is in the archive.

## Changes that affect the other agent
- Use the **new** Mom files above. The old Inventory Intake and Photo Tracker sheets are archived; do not point Mom or scripts at them.
- The Inventory Intake data model changed: it is now a **Google Doc table** ("2 MOM - Piece Info"), keyed by piece number 1-7, not a spreadsheet. The old sheet also carried the Master Inventory List cross-reference ($315-$850 jacket prices) and quips; those are only in the archived sheet.
- Photo folders are numbered 01-07 to match piece numbers; match photos to products by folder number.
- The Drive connector cannot edit file contents, so new versions were created and old ones archived. Docs were built from HTML (tables, colors, hyperlinks).
- Still unverified: whether Mom's access is set to edit on these files (Ashley shares the Website folder with her).
- No theme or Shopify changes were made in this pass.
