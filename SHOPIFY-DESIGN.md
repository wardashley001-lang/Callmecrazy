# Making your Shopify store look like Call Me Crazy

Do these in order. Everything is in Shopify admin → **Online Store → Themes → Customize**.
Take your time; nothing goes live until you click **Save**, and your store stays private while it's password-protected.

## 0. Before you start
- Settings → Store details → set **Store currency** to **US Dollar**.
- Settings → Store details → change store name from "My Store" to **Call Me Crazy**.

## 1. Pick the theme
- Start with the free theme **Dawn** (already installed). It's fast, clean, and easy to restyle.
- Click **Customize** next to it.

## 2. Colors  (Theme settings → Colors)
White page, black text, hot pink used sparingly. Scheme 1 (main pages):
| Setting | Color |
|---|---|
| Background | `#FFFFFF` |
| Text | `#0A0A0A` |
| Solid button background | `#FF007F` (main buttons) |
| Solid button label | `#FFFFFF` |
| Outline button / links | `#0A0A0A` |
| Secondary background (empty photo boxes) | `#F2F1EF` |
Scheme 2 (the big statement band, "no two alike. neither are you."): background `#FF007F`, text `#000000`, accent words white.
Scheme 3 (announcement bar): background `#000000`, text `#BBBBBB`.
Keep the black version of the logo for the white header (`public/images/logo-dark.png` in the project).

## 3. Fonts  (Theme settings → Typography)
Look: huge, tight, lowercase headlines. Tiny spaced-out caps for details. Almost no decoration; the clothes and the logo do the talking.
- **Body:** Inter (in the font picker).
- **Headings:** Inter Tight, or Inter Bold / any heavy clean sans. Set heading tracking tight and text lowercase.
- If Inter Tight isn't in the picker, paste this into **Theme settings → Custom CSS** (if it doesn't load, tell me):
```css
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@800&display=swap');
h1, h2, h3, .h0, .h1, .h2 { font-family: 'Inter Tight', Inter, sans-serif; font-weight: 800; letter-spacing: -.045em; line-height: .95; text-transform: lowercase; }
```
- Small labels (menu, buttons, captions): uppercase, wide letter-spacing (.2em), small size.
- The brush-script **logo image** is the only decorative type on the site.

## 4. Logo & header  (Header section)
- Upload the logo (use `public/images/logo-dark.png` from the project: black "Call Me", pink "CRAZY", transparent background).
- Logo width about 160–200px. Logo position: left. Menu: Shop All, Skirts, Jackets, Jeans, Accessories, Our Story.
- Turn **on** the announcement bar: `OWN YOUR CRAZY · FREE SHIPPING OVER $100` (pink background, white text).

## 5. Homepage sections (top to bottom)
1. **Image banner** (hero): white page, headline on the left, big photo on the right; big heading **"own your crazy."** (the word crazy in pink), subtext "Reclaimed denim, patched, painted and studded by hand. One of one. No restocks." Put a big photo of the hero piece on one side (white background)., buttons **Shop the drop** (pink) and **Our story** (outline).
2. **Marquee / rich text strip** (pink bar): a thin ticker: `ONE OF ONE / HANDCRAFTED DENIM / NO RESTOCKS / OWN YOUR CRAZY` (tiny grey caps, pink slashes)
3. (Skip the category tiles for now; with a small catalog the drop grid is stronger.)
4. **Featured collection**, titled "the drop", 4 products. Under each: NO. 001 (pink, tiny caps), name in lowercase, price., 4 products.
5. **Image with text** (denim-blue background): heading **"no two alike. neither are you."**, small label "BY JODI" above it, button **Read the story**, and an email signup "email, for the next drop".
6. **Instagram / social** link in the footer: https://instagram.com/shopcallmecrazy
7. Optional: **Email signup**: "Get first dibs on every drop."

## 6. Product page settings
- Large photo gallery with thumbnails, **zoom on hover** (studs and patches are the selling point).
- Show a "One of one" badge (use a product tag + a short note under the title).

## 7. Footer
- Menu: Shop, Our Story, Contact, Shipping & Returns. Social: Instagram. Email: jodi@shopcallmecrazy.com.
- Tagline: "Handcrafted denim. One of one. Own your crazy."

## 8. Check on your phone
Most shoppers arrive from Instagram on a phone. In the theme editor click the phone icon at the top and scroll through every section.

When you've done a section, tell me and send a screenshot; I'll tell you what to adjust.
