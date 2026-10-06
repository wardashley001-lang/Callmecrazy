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
Create/edit the color scheme so it reads black + hot pink:
| Setting | Color |
|---|---|
| Background | `#000000` |
| Text | `#FFFFFF` |
| Solid button background | `#FF007F` |
| Solid button label | `#FFFFFF` |
| Outline button / links | `#FFFFFF` |
| Accent / highlights | `#FF007F` |
| Secondary background (cards, panels) | `#111111` |
| Denim section background | `#2B547E` |
| Silver details | `#C0C0C0` |

## 3. Fonts  (Theme settings → Typography)
- **Body:** Montserrat (in the font picker).
- **Headings:** pick the boldest handwritten/script option available. Your exact brush font isn't in Shopify's picker.
- Best match for the preview: Permanent Marker (Google font). If Shopify's picker doesn't have it, paste this into **Theme settings → Custom CSS** (try it; if it doesn't load, tell me and I'll give you another way):
```css
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
h1, h2, h3, .h0, .h1, .h2 { font-family: 'Permanent Marker', cursive; letter-spacing: .01em; }
```
- Use the **logo image** for the biggest brand moments; it already has your brush lettering.

## 4. Logo & header  (Header section)
- Upload the logo (`public/images/logo.png` in the project; transparent background so it sits on black).
- Logo width about 160–200px. Logo position: left. Menu: Shop All, Skirts, Jackets, Jeans, Accessories, Our Story.
- Turn **on** the announcement bar: `OWN YOUR CRAZY · FREE SHIPPING OVER $100` (pink background, white text).

## 5. Homepage sections (top to bottom)
1. **Image banner** (hero): black background or a dark photo of a piece; big heading **"Own Your Crazy."**, subtext "Handcrafted denim. One of one.", buttons **Shop the drop** (pink) and **Our story** (outline).
2. **Marquee / rich text strip** (pink bar): `NO RULES. JUST CRAZY. ✦ ONE OF ONE ✦ HANDCRAFTED DENIM ✦ OWN YOUR CRAZY`
3. **Collection list:** Skirts, Jackets, Jeans, Vests, Accessories.
4. **Featured collection**, titled "Fresh off the sewing machine", 4 products.
5. **Image with text** (denim-blue background): heading **"Why fit in when you were born to stand out?"**, text "Every piece is handcrafted from reclaimed denim, patched, painted and studded by hand. No two are alike, and neither are you.", button **Read our story**.
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
