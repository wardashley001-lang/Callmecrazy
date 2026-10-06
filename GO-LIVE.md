# Putting shopcallmecrazy.com online (GoDaddy + Render)

Takes about 30 minutes. Do the steps in order.

## Part 1 — Put the site on Render
1. Go to https://render.com and click **Get Started**. Sign up with **GitHub** (same account that has this project).
2. Click **New +** → **Blueprint**.
3. Pick the **Callmecrazy** repository. If asked for a branch, choose `main` (or `claude/magical-babbage-b2vpvt` until it's merged).
4. Render reads `render.yaml`. It will ask for **ADMIN_PASSWORD** — type a long password only you know. Write it down.
5. Click **Apply**. Wait a few minutes until it says **Live**.
6. Click the address at the top (like `callmecrazy.onrender.com`). You should see the store.

> The "Starter" plan (about $7/month) is needed so your orders are saved on a disk and the site never sleeps.

## Part 2 — Connect your domain
1. In Render, open your service → **Settings** → **Custom Domains** → **Add Custom Domain**.
2. Add `shopcallmecrazy.com`, then add `www.shopcallmecrazy.com`. Render shows the records you need — **use the values Render shows you**. They are normally:
   - an **A** record for `@` → an IP address Render lists
   - a **CNAME** record for `www` → `callmecrazy.onrender.com` (your Render address)
3. Open GoDaddy: **My Products** → next to shopcallmecrazy.com click **DNS**.
4. **Delete** any existing **A** record named `@` (usually "WebsiteBuilder Site" / "Parked") and any existing **CNAME** named `www`.
5. Click **Add New Record** and add the two records from Render:
   - Type **A**, Name **@**, Value = the IP from Render, TTL default → Save
   - Type **CNAME**, Name **www**, Value = your `.onrender.com` address → Save
6. Back in Render click **Verify** next to each domain. DNS can take from a few minutes up to a few hours.
7. When both show **Verified**, Render turns on the free https lock automatically.

## Part 3 — Test before telling anyone
- Visit https://shopcallmecrazy.com and https://www.shopcallmecrazy.com
- Place a test order, then open https://shopcallmecrazy.com/admin (username: anything, password: your ADMIN_PASSWORD) and check it appears.

## Don't share the link publicly until…
- Real photos and products are added
- Card payments are turned on (right now orders are only saved, nobody is charged)
