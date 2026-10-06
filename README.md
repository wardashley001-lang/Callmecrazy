# Call Me Crazy — Online Store

A simple online clothing store. No coding needed for everyday changes.

## See it on your computer
1. Install Node.js (free): https://nodejs.org (choose "LTS").
2. Open a terminal in this folder and run: `npm start`
3. Open http://localhost:3000 in your browser.

## Everyday changes (no coding)

**Add or change clothing:** open `data/products.json`. Each item looks like this — copy one, change the words:
- `name`, `price` (in cents: `8800` = $88.00), `description`
- `category` (Dresses, Tops, Bottoms, Outerwear, Accessories)
- `colors` and `sizes` (the choices shoppers see)
- `"featured": true` shows it on the home page

**Add real photos:** put image files in `public/images/`, then add this line to the item:
`"image": "/images/my-dress.jpg"`

**Change the store name / words:** `public/index.html` (header, footer) and `public/app.js` (home page, "Our Story", contact, shipping).

**Change colors:** top of `public/styles.css` — `--accent` is the pink highlight color.

**See orders:** go to http://localhost:3000/admin (any username, password = `ADMIN_PASSWORD`).
Set your own password: `ADMIN_PASSWORD=mysecret npm start`

## Before going live
- [ ] Real photos and product info
- [ ] Your own "Our Story", contact email and return policy
- [ ] Turn on card payments (currently orders are saved as "pending_payment" — see the TODO in `server.js`)
- [ ] Pick a host (Render, Railway, or Fly.io) and a domain name
- [ ] Change the admin password

Run `npm test` to check that pricing and checkout still work after edits.
