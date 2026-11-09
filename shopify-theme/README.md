# Call Me Crazy Shopify theme

Online Store 2.0 theme that matches the mock. Upload `call-me-crazy-theme.zip` (repo root) in Shopify admin: Online Store → Themes → Add theme → Upload zip file. It uploads unpublished.

## After uploading
1. Customize → Home: pick the hero video/photo and piece, add the close-up photos/videos to the Up close tiles, choose the collection for The drop.
2. Create two pages in Online Store → Pages: "Gone Wall" (handle gone-wall, template page.gone-wall) and "Next drop" (handle next-drop, template page.next-drop).
3. Menus: main-menu (Shop All, Jackets, Vests, Skirts, The Gone Wall, Our Story) and footer (Shop, Our Story, Contact, Shipping & Returns).
4. Create the product metafields below in Settings → Custom data → Products. Use namespace `custom`.
   - `piece_number` — single line text. Required before launch; product cards and homepage close-up tiles omit the number when it is blank rather than inventing one from collection order or theme settings.
   - `quip` — single line text. Optional; hidden when blank.
   - `provenance` — single line text. Optional; hidden when blank.
   - `measurements` — multi-line text. Required before launch; hidden when blank until verified measurements are entered.
5. Before launch, replace placeholder product names and prices and confirm each product's size/variant, description, piece number, measurements, provenance, and media against the approved inventory record. Do not infer missing values from collection order or placeholder products.
6. Cart quantities are intentionally fixed at one because every piece is one of one. Inventory still needs to be set to one and tested in Shopify Admin before launch.
7. Checkout styling is set in Settings → Checkout → Customize (Shopify controls checkout).

Product gallery thumbnails update the main image, its alternative text, and the selected thumbnail state together. Add specific alt text to each product image in Shopify Admin before launch; when it is blank, the product title is used as the fallback.
