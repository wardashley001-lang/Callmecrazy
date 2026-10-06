// Call Me Crazy storefront: hash-routed SPA, cart in localStorage.
const $app = document.getElementById('app');
const state = { products: [], cart: loadCart() };

const money = (c) => '$' + (c / 100).toFixed(2);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function loadCart() { try { return JSON.parse(localStorage.getItem('cmc-cart')) || []; } catch { return []; } }
function saveCart() {
  try { localStorage.setItem('cmc-cart', JSON.stringify(state.cart)); } catch {}
  document.getElementById('cart-count').textContent = state.cart.reduce((n, i) => n + i.qty, 0);
}
function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove('show'), 2200);
}

// Placeholder product art (swap for real photos by adding an `image` field to products.json).
function photo(src, alt) {
  return `<img class="photo" src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
}

function art(p, hex) {
  const src = p.images?.[0] || p.image;
  if (src) return photo(src, p.name);
  return `<svg viewBox="0 0 300 400" role="img" aria-label="${esc(p.name)}" preserveAspectRatio="xMidYMid slice">
    <rect width="300" height="400" fill="#f2f1ef"/><path d="M0 400 L300 0" stroke="#FF007F" stroke-width="1" opacity=".6"/>
    <text x="20" y="380" font-family="Inter,sans-serif" font-size="9" letter-spacing="3" fill="#00000066">PHOTO COMING</text></svg>`;
}

const num = (p) => String(state.products.findIndex((x) => x.id === p.id) + 1).padStart(3, '0');
function card(p) {
  return `<a class="card" href="#/product/${p.id}">
    <div class="img">${art(p)}${p.badge ? `<span class="badge">${esc(p.badge)}</span>` : ''}</div>
    <div class="row"><div><div class="no">NO. ${num(p)}</div><h3>${esc(p.name)}</h3></div><div class="meta">${money(p.price)}</div></div></a>`;
}

const CATEGORIES = () => [...new Set(state.products.map((p) => p.category))];

const views = {
  home() {
    const hero = state.products[0];
    const feat = state.products.slice(0, 4);
    const t = 'ONE OF ONE <b>/</b> HANDCRAFTED DENIM <b>/</b> NO RESTOCKS <b>/</b> OWN YOUR CRAZY <b>/</b> ';
    return `<section class="hero"><div class="l"><div class="tiny">Drop 01 · Handcrafted denim</div>
      <div><h1>own your<br><em>crazy.</em></h1><p class="sub">Reclaimed denim, patched, painted and studded by hand. One of one. No restocks.</p>
      <a class="btn pink" href="#/shop">Shop the drop</a> <a class="btn ghost" href="#/about">Our story</a></div>
      <div class="tiny">Scroll</div></div>
      <a class="r" href="#/product/${hero.id}" style="text-decoration:none">${hero.images ? `<img src="${esc(hero.images[0])}" alt="${esc(hero.name)}">` : ''}
      <span class="cap">No. ${num(hero)} — ${esc(hero.name)} — ${money(hero.price)}</span></a></section>
      <div class="ticker"><span>${t.repeat(6)}</span></div>
      <div class="wrap"><div class="sechead"><h2>the drop</h2><a class="tiny" href="#/shop">View all →</a></div>
      <div class="grid">${feat.map(card).join('')}</div></div>
      <section class="statement"><div class="tiny" style="margin-bottom:1.5rem">By Jodi</div>
      <h2>no two alike. <em>neither are you.</em></h2>
      <a class="btn ghost" href="#/about">Read the story</a>
      <form class="signup" onsubmit="event.preventDefault();toast('Noted.')"><input type="email" placeholder="email, for the next drop" required aria-label="Email"><button class="btn pink">Join</button></form></section>`;
  },

  shop(cat) {
    const q = new URLSearchParams(location.hash.split('?')[1] || '');
    const sort = q.get('sort') || 'featured';
    let list = state.products.filter((p) => !cat || p.category === cat);
    if (sort === 'low') list.sort((a, b) => a.price - b.price);
    if (sort === 'high') list.sort((a, b) => b.price - a.price);
    if (sort === 'featured') list.sort((a, b) => !!b.featured - !!a.featured);
    return `<div class="wrap"><h2>${esc((cat || 'everything').toLowerCase())}</h2>
      <div class="toolbar"><div class="chips">
        <a class="chip ${!cat ? 'on' : ''}" href="#/shop">All</a>
        ${CATEGORIES().map((c) => `<a class="chip ${c === cat ? 'on' : ''}" href="#/shop/${c}">${esc(c)}</a>`).join('')}</div>
        <select id="sort" aria-label="Sort">
          <option value="featured"${sort === 'featured' ? ' selected' : ''}>Newest</option>
          <option value="low"${sort === 'low' ? ' selected' : ''}>Price: low to high</option>
          <option value="high"${sort === 'high' ? ' selected' : ''}>Price: high to low</option></select></div>
      <div class="grid">${list.map(card).join('') || '<p>No products found.</p>'}</div></div>`;
  },

  product(id) {
    const p = state.products.find((x) => x.id === id);
    if (!p) return `<div class="wrap"><h2>Product not found</h2><a href="#/shop">Back to shop</a></div>`;
    return `<div class="wrap"><div class="product">
      <div><div class="pimg" id="pimg">${art(p)}</div>${p.images && p.images.length > 1 ? `<div class="thumbs" id="thumbs">${p.images.map((s, i) => `<button class="${i ? '' : 'on'}" data-src="${esc(s)}" aria-label="Photo ${i + 1}">${photo(s, p.name + ' photo ' + (i + 1))}</button>`).join('')}</div>` : ''}</div>
      <div><div class="tiny" style="color:var(--pink)">No. ${num(p)} · One of one</div><h2>${esc(p.name)}</h2><div class="price">${money(p.price)}</div><p>${esc(p.description)}</p>
        <div class="opt"><span class="t" style="font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)">Color: <b id="cname">${esc(p.colors[0].name)}</b></span>
          <div class="opts" id="colors" style="margin-top:.4rem">${p.colors.map((c, i) => `<button class="color ${i ? '' : 'on'}" data-v="${esc(c.name)}" data-hex="${c.hex}"><span class="sw" style="background:${c.hex}"></span>${esc(c.name)}</button>`).join('')}</div></div>
        <div class="opt"><span style="font-size:.8rem;text-transform:uppercase;letter-spacing:.08em;color:var(--muted)">Size</span>
          <div class="opts" id="sizes" style="margin-top:.4rem">${p.sizes.map((s, i) => `<button class="${p.sizes.length === 1 && !i ? 'on' : ''}" data-v="${esc(s)}">${esc(s)}</button>`).join('')}</div></div>
        <button class="btn pink block" id="add">Add to bag</button>
        <p style="color:var(--muted);font-size:.85rem;margin-top:1rem">Ships in 5–7 days · Free over $100 · One of one, no restocks</p></div></div></div>`;
  },

  cart() {
    if (!state.cart.length) return `<div class="wrap center"><h2>empty.</h2><p><a class="btn" href="#/shop">Shop the drop</a></p></div>`;
    const rows = state.cart.map((i, idx) => {
      const p = state.products.find((x) => x.id === i.id);
      return `<tr><td><div class="thumb">${art(p, p.colors.find((c) => c.name === i.color)?.hex)}</div></td>
        <td><a href="#/product/${p.id}"><b>${esc(p.name)}</b></a><br><small>${esc(i.color)} / ${esc(i.size)}</small><br><button class="link" data-rm="${idx}">Remove</button></td>
        <td><div class="qty"><button data-dec="${idx}" aria-label="Decrease">−</button><span style="min-width:24px;text-align:center">${i.qty}</span><button data-inc="${idx}" aria-label="Increase">+</button></div></td>
        <td>${money(p.price * i.qty)}</td></tr>`;
    }).join('');
    return `<div class="wrap"><h2>bag</h2><div class="cols"><table class="table">${rows}</table>
      <div class="summary" id="summary">${summaryHtml()}<a class="btn block" href="#/checkout" style="margin-top:1rem">Checkout</a></div></div></div>`;
  },

  checkout() {
    if (!state.cart.length) { location.hash = '#/cart'; return ''; }
    const f = (n, label, extra = '') => `<div class="${extra}"><label for="${n}">${label}</label><input id="${n}" name="${n}" required autocomplete="${n}"></div>`;
    return `<div class="wrap"><h2>checkout</h2><div class="cols">
      <form id="checkout" class="form">
        ${f('name', 'Full name', 'full')}${f('email', 'Email', 'full')}${f('address', 'Address', 'full')}
        ${f('city', 'City')}${f('state', 'State / Region')}${f('zip', 'ZIP / Postal code')}
        <div><label for="country">Country</label><input id="country" name="country" value="US"></div>
        <div class="full" id="err"></div>
        <div class="full"><p style="color:var(--muted);font-size:.85rem">Payment is collected after your order is placed — we'll email an invoice link. (Card processing can be switched on in <code>server.js</code>.)</p>
        <button class="btn block" id="place">Place order</button></div></form>
      <div class="summary" id="summary">${summaryHtml()}</div></div></div>`;
  },

  confirmation(id) {
    return `<div class="wrap center"><h2>it's yours.</h2><p>Order <b>${esc(id)}</b> received. We'll email you.</p>
      <a class="btn" href="#/shop">Keep shopping</a></div>`;
  },

  about() {
    return `<div class="wrap prose"><div class="tiny" style="color:var(--pink)">Our story</div><h2 style="margin-top:.6rem">handmade.<br>one of one.</h2>
      <p>Call Me Crazy is Jodi. Reclaimed denim, cut up and rebuilt by hand with patches, paint, studs and rhinestones.</p>
      <p>Every piece is made once. When it's gone, it's gone.</p></div>`;
  },

  contact() {
    return `<div class="wrap prose"><h2>contact</h2><p>Questions about an order or sizing? Email <a href="mailto:jodi@shopcallmecrazy.com">jodi@shopcallmecrazy.com</a> or DM us on <a href="https://instagram.com/shopcallmecrazy" target="_blank" rel="noopener">Instagram @shopcallmecrazy</a>.</p></div>`;
  },

  shipping() {
    return `<div class="wrap prose"><h2>shipping &amp; returns</h2>
      <p><b>Shipping:</b> Flat $8 rate, free on orders over $100. Handmade pieces ship within 5–7 business days.</p>
      <p><b>Returns:</b> Unworn items with tags may be returned within 30 days for a full refund.</p></div>`;
  },
};

function totals() {
  const sub = state.cart.reduce((s, i) => s + state.products.find((p) => p.id === i.id).price * i.qty, 0);
  const cfg = state.config || { freeShippingMin: 10000, shipping: 800, taxRate: 0 };
  const ship = sub >= cfg.freeShippingMin ? 0 : cfg.shipping;
  const tax = Math.round(sub * cfg.taxRate);
  return { sub, ship, tax, total: sub + ship + tax };
}
function summaryHtml() {
  const t = totals();
  return `<h3 style="margin-top:0">Order summary</h3>
    <div class="row"><span>Subtotal</span><span>${money(t.sub)}</span></div>
    <div class="row"><span>Shipping</span><span>${t.ship ? money(t.ship) : 'Free'}</span></div>
    ${t.tax ? `<div class="row"><span>Tax</span><span>${money(t.tax)}</span></div>` : ''}
    <div class="row total"><span>Total</span><span>${money(t.total)}</span></div>`;
}

function bind(route, arg) {
  if (route === 'shop') {
    document.getElementById('sort').onchange = (e) => {
      location.hash = `#/shop${arg ? '/' + arg : ''}?sort=${e.target.value}`;
    };
  }
  if (route === 'product') {
    const p = state.products.find((x) => x.id === arg);
    if (!p) return;
    let color = p.colors[0].name, size = p.sizes.length === 1 ? p.sizes[0] : null;
    const pick = (box, cb) => box.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      box.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on'); cb(b);
    });
    pick(document.getElementById('colors'), (b) => {
      color = b.dataset.v; document.getElementById('cname').textContent = color;
      if (!p.images && !p.image) document.getElementById('pimg').innerHTML = art(p, b.dataset.hex);
    });
    const th = document.getElementById('thumbs');
    if (th) th.addEventListener('click', (e) => {
      const b = e.target.closest('button'); if (!b) return;
      th.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on');
      document.getElementById('pimg').innerHTML = photo(b.dataset.src, p.name);
    });
    pick(document.getElementById('sizes'), (b) => { size = b.dataset.v; });
    document.getElementById('add').onclick = () => {
      if (!size) return toast('Please select a size');
      const ex = state.cart.find((i) => i.id === p.id && i.size === size && i.color === color);
      if (ex) ex.qty = Math.min(20, ex.qty + 1); else state.cart.push({ id: p.id, size, color, qty: 1 });
      saveCart(); toast('Added to bag');
    };
  }
  if (route === 'cart') {
    $app.onclick = (e) => {
      const d = e.target.dataset;
      if (d.rm !== undefined) state.cart.splice(+d.rm, 1);
      else if (d.inc !== undefined) state.cart[+d.inc].qty = Math.min(20, state.cart[+d.inc].qty + 1);
      else if (d.dec !== undefined) { const i = state.cart[+d.dec]; if (--i.qty < 1) state.cart.splice(+d.dec, 1); }
      else return;
      saveCart(); render();
    };
  } else $app.onclick = null;
  if (route === 'checkout') {
    document.getElementById('checkout').onsubmit = async (e) => {
      e.preventDefault();
      const btn = document.getElementById('place'), err = document.getElementById('err');
      btn.disabled = true; err.innerHTML = '';
      const customer = Object.fromEntries(new FormData(e.target));
      try {
        const r = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ customer, items: state.cart }) });
        const data = await r.json();
        if (!r.ok) throw new Error(data.error || 'Checkout failed');
        state.cart = []; saveCart(); location.hash = '#/confirmation/' + data.orderId;
      } catch (ex) { err.innerHTML = `<div class="error">${esc(ex.message)}</div>`; btn.disabled = false; }
    };
  }
}

function render() {
  const [route = '', arg] = location.hash.replace(/^#\//, '').split('?')[0].split('/');
  const name = route || 'home';
  const view = views[name] || views.home;
  $app.innerHTML = view(arg ? decodeURIComponent(arg) : undefined);
  document.querySelectorAll('#nav a').forEach((a) => a.classList.toggle('active', a.getAttribute('href') === location.hash.split('?')[0]));
  bind(name, arg && decodeURIComponent(arg));
  window.scrollTo(0, 0);
}

(async function init() {
  document.getElementById('year').textContent = new Date().getFullYear();
  try {
    const [products, config] = await Promise.all([fetch('/api/products').then((r) => r.json()), fetch('/api/config').then((r) => r.json())]);
    state.products = products; state.config = config;
  } catch { $app.innerHTML = '<div class="wrap"><h2>Store unavailable</h2><p>Please try again shortly.</p></div>'; return; }
  // drop cart lines for products that no longer exist
  state.cart = state.cart.filter((i) => state.products.some((p) => p.id === i.id));
  saveCart();
  window.addEventListener('hashchange', render);
  render();
})();
