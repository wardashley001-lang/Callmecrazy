// Call Me Crazy storefront: hash-routed SPA, cart in localStorage.
const $app = document.getElementById('app');
const state = { products: [], cart: loadCart() };

const money = (c) => '$' + (c / 100).toFixed(2);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));



// Ransom-note lettering (used for one word only): flat, bold paper scraps in black / white / hot pink / grey,
// a different font per letter, slightly ragged edges, tilted.
const RN_FONTS = ["'Playfair Display'", "'Abril Fatface'", "'Bebas Neue'", "'Special Elite'", "'Courier Prime'", "'Archivo Black'", "'Oswald'", "'DM Serif Display'", "'UnifrakturCook'"];
const RN_PAPER = [['#fdfdfb', '#111'], ['#fdfdfb', '#111'], ['#111', '#fdfdfb'], ['#111', '#fdfdfb'], ['#F33283', '#fff'], ['#F33283', '#111'], ['#d9d9d6', '#111'], ['#d9d9d6', '#111'], ['#fdfdfb', '#F33283']];
function rnd(seed) { const x = Math.sin(seed * 9301 + 49297) * 233280; return x - Math.floor(x); }
function ragged(s) {
  const j = (n) => (rnd(s + n) * 5).toFixed(1);
  return `polygon(${j(1)}% ${j(2)}%, ${100 - j(3)}% ${j(4)}%, ${100 - j(5)}% ${100 - j(6)}%, ${j(7)}% ${100 - j(8)}%)`;
}
function ransom(text, seed = 1) {
  return `<span class="rn" aria-label="${esc(text)}">` + [...text].map((ch, k) => {
    const s = seed * 100 + k + 1;
    const f = RN_FONTS[Math.floor(rnd(s) * RN_FONTS.length)];
    const [bg, fg] = RN_PAPER[Math.floor(rnd(s + 3) * RN_PAPER.length)];
    const c = rnd(s + 5) > 0.45 ? ch.toUpperCase() : ch.toLowerCase();
    const rot = (rnd(s + 7) * 8 - 4).toFixed(1), dy = (rnd(s + 9) * .2 - .1).toFixed(2), sz = (0.92 + rnd(s + 11) * 0.22).toFixed(2);
    return `<span class="lt" aria-hidden="true" style="font-family:${f},serif;background:${bg};color:${fg};transform:translateY(${dy}em) rotate(${rot}deg);font-size:${sz}em;clip-path:${ragged(s)}">${esc(c)}</span>`;
  }).join('') + '</span>';
}

// Real close-ups of her work (cx, cy = crop centre as a fraction of the photo; z = zoom).
const DETAILS = [
  { img: 'stay-wild-front', w: 1100, h: 1012, cx: .60, cy: .62, z: 4.2, label: 'gold heart / distressed' },
  { img: 'stay-wild-front', w: 1100, h: 1012, cx: .58, cy: .21, z: 4.6, label: 'studs + rhinestones' },
  { img: 'stay-wild-back', w: 1100, h: 1131, cx: .55, cy: .57, z: 4.2, label: 'pucker up', duo: true },
  { img: 'stay-wild-front', w: 1100, h: 1012, cx: .53, cy: .84, z: 4.2, label: 'sequin star' },
  { img: 'stay-wild-back', w: 1100, h: 1131, cx: .76, cy: .64, z: 4.2, label: 'patch no. 14' },
];
function cropHtml(d, cls = '') {
  const left = -(d.cx * d.z - 0.5) * 100, top = -(d.cy * d.z * (d.h / d.w) - 0.5) * 100;
  return `<div class="crop ${cls}"><img src="/images/${d.img}.jpg" alt="" style="width:${d.z * 100}%;left:${left}%;top:${top}%"></div>`;
}
const HEARTS = [
  { img: 'stay-wild-front', w: 1100, h: 1012, cx: .60, cy: .645, z: 3.4 },
  { img: 'stay-wild-back', w: 1100, h: 1131, cx: .325, cy: .47, z: 5.2 },
  { img: 'stay-wild-back', w: 1100, h: 1131, cx: .895, cy: .78, z: 5.2 },
];

function detailStrip() {
  const crop = (d) => {
    const left = -(d.cx * d.z - 0.5) * 100, top = -(d.cy * d.z * (d.h / d.w) - 0.5) * 100;
    return `<figure class="dt ${d.duo ? 'duo' : ''}"><span class="tp"></span><div class="crop"><img src="/images/${d.img}.jpg" alt="${esc(d.label)}" style="width:${d.z * 100}%;left:${left}%;top:${top}%"></div><figcaption>${esc(d.label)}</figcaption></figure>`;
  };
  return `<div class="strip">${DETAILS.map(crop).join('')}</div>`;
}

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

// Die-cut patch stickers cut from her photos (drop new transparent PNGs in /images/cutouts and use cutout('name')).
function cutout(name, style = '', cls = '') {
  return `<img class="cutout ${cls}" src="/images/cutouts/${name}.png" alt="" aria-hidden="true" style="${style}">`;
}
function pageHead(label, title, stickers = '') {
  return `<section class="pagehead"><div class="wrap ph"><div class="ph-l"><div class="lab">${esc(label)}</div><h1 class="ph-t">${esc(title)}</h1></div><div class="ph-stk" aria-hidden="true">${stickers}</div></div></section>`;
}

const views = {
  home() {
    const hero = state.products[0];
    const feat = state.products.slice(0, 4);
    const ph = (t) => `<span>${t}</span>`;
    const run = ['NO RULES. JUST CRAZY.', 'ONE OF ONE', 'HANDCRAFTED DENIM', 'NO RESTOCKS', 'OWN YOUR CRAZY'].map(ph).join('<i>✦</i>');
    return `<section class="h-hero"><div class="h-copy">
      <div class="lab">drop 01 — handcrafted denim — 1 of 1</div>
      <h1><span class="own">own your</span><span class="crz">${ransom("crazy", [7, 11, 12][Math.floor(Math.random() * 3)])}</span></h1>
      <p class="hl"><mark>Reclaimed denim. Patched, painted and studded by hand.</mark></p>
      <a class="btn" href="#/shop">shop the drop</a><a class="btn" href="#/about">our story</a></div>
      <a class="h-photo" href="#/product/${hero.id}"><div class="paper"><img src="${esc(hero.images[0])}" alt="${esc(hero.name)}"><span class="tp t1"></span><span class="tp t2"></span></div><span class="sp s1">✦</span><span class="sp s2">✦</span>
      <div class="tagl">no. ${num(hero)}<br>${money(hero.price)}</div></a></section>
      <div class="run"><div class="trk">${run}<i>✦</i>${run}<i>✦</i></div></div>
      <section class="up"><div class="wrap"><h2 class="big">up close<em> the work.</em></h2>${detailStrip()}</div></section>
      <div class="wrap"><div class="sechead"><h2 class="big">the drop</h2><a class="tiny" href="#/shop">View all →</a></div>
      <div class="grid">${feat.map(card).join('')}</div></div>
      <section class="blk wall"><div class="wall-grid"><div class="wall-text"><div class="wall-head"><span class="mega-black">no two<br>alike.</span></div>
      <div class="script-wall" aria-hidden="true">${'<span>neither are you.</span>'.repeat(5)}</div></div>
      <div class="wall-pics">${cutout('cowgirl', '', 'c1')}${cutout('sequin-star', '', 'c2')}${cutout('howdy', '', 'c3')}${cutout('gold-star', '', 'c4')}${cutout('silver-heart', '', 'c5')}</div></div>
      <p class="fine">Every piece is handmade from reclaimed denim. Patched, painted and studded by hand. When it's gone, it's gone. We don't restock. We don't apologize.</p>
      <form class="signup" onsubmit="event.preventDefault();toast('Noted.')"><span class="callme">Call me?</span><input type="email" placeholder="email, for the next drop" required aria-label="Email"><button class="btn">join</button></form></section>`;
  },

  shop(cat) {
    const q = new URLSearchParams(location.hash.split('?')[1] || '');
    const sort = q.get('sort') || 'featured';
    let list = state.products.filter((p) => !cat || p.category === cat);
    if (sort === 'low') list.sort((a, b) => a.price - b.price);
    if (sort === 'high') list.sort((a, b) => b.price - a.price);
    if (sort === 'featured') list.sort((a, b) => !!b.featured - !!a.featured);
    return pageHead('drop 01 — one of one', cat || 'The drop', cutout('gold-star', 'width:120px;transform:rotate(12deg)') + cutout('boot', 'width:64px;transform:rotate(-9deg)')) +
      `<div class="wrap"><div class="toolbar"><div class="chips">
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
    if (!p) return pageHead('not found', 'Gone.') + `<div class="wrap"><a class="btn" href="#/shop">Back to the drop</a></div>`;
    return `<div class="wrap crumbs"><a class="tiny" href="#/shop">← the drop</a></div>
      <div class="wrap product">
      <div class="gal"><div class="pimg" id="pimg">${art(p)}<span class="tp t1"></span><span class="tp t2"></span></div>${p.images && p.images.length > 1 ? `<div class="thumbs" id="thumbs">${p.images.map((s, i) => `<button class="${i ? '' : 'on'}" data-src="${esc(s)}" aria-label="Photo ${i + 1}">${photo(s, p.name + ' photo ' + (i + 1))}</button>`).join('')}</div>` : ''}</div>
      <div class="info">${cutout('sequin-star', 'width:96px;transform:rotate(14deg)', 'corner')}
        <div class="lab">no. ${num(p)} — one of one</div><h2 class="plain">${esc(p.name)}</h2><div class="price">${money(p.price)}</div><p class="desc">${esc(p.description)}</p>
        <div class="opt"><span class="ol">Color: <b id="cname">${esc(p.colors[0].name)}</b></span>
          <div class="opts" id="colors">${p.colors.map((c, i) => `<button class="color ${i ? '' : 'on'}" data-v="${esc(c.name)}" data-hex="${c.hex}"><span class="sw" style="background:${c.hex}"></span>${esc(c.name)}</button>`).join('')}</div></div>
        <div class="opt"><span class="ol">Size</span>
          <div class="opts" id="sizes">${p.sizes.map((s, i) => `<button class="${p.sizes.length === 1 && !i ? 'on' : ''}" data-v="${esc(s)}">${esc(s)}</button>`).join('')}</div></div>
        <button class="buy" id="add">Add to bag <span>→</span></button>
        <p class="fineprint">Ships in 5–7 days · Free over $100 · One of one, no restocks</p></div></div>`;
  },

  cart() {
    if (!state.cart.length) return pageHead('your bag', 'Empty.', cutout('boot', 'width:70px;transform:rotate(10deg)')) + `<div class="wrap"><p class="sub">Nothing yet.</p><a class="btn" href="#/shop">Shop the drop</a></div>`;
    const rows = state.cart.map((i, idx) => {
      const p = state.products.find((x) => x.id === i.id);
      return `<tr><td><div class="thumb">${art(p, p.colors.find((c) => c.name === i.color)?.hex)}</div></td>
        <td><a href="#/product/${p.id}"><b>${esc(p.name)}</b></a><br><small>${esc(i.color)} / ${esc(i.size)}</small><br><button class="link" data-rm="${idx}">Remove</button></td>
        <td><div class="qty"><button data-dec="${idx}" aria-label="Decrease">−</button><span style="min-width:24px;text-align:center">${i.qty}</span><button data-inc="${idx}" aria-label="Increase">+</button></div></td>
        <td>${money(p.price * i.qty)}</td></tr>`;
    }).join('');
    return pageHead('your bag', 'Bag', cutout('silver-heart', 'width:110px;transform:rotate(-10deg)')) +
      `<div class="wrap"><div class="cols"><table class="table">${rows}</table>
      <div class="summary receipt" id="summary">${summaryHtml()}<a class="buy" href="#/checkout" style="margin-top:1.2rem">Checkout <span>→</span></a></div></div></div>`;
  },

  checkout() {
    if (!state.cart.length) { location.hash = '#/cart'; return ''; }
    const f = (n, label, extra = '') => `<div class="${extra}"><label for="${n}">${label}</label><input id="${n}" name="${n}" required autocomplete="${n}"></div>`;
    return pageHead('almost yours', 'Checkout', cutout('cowgirl', 'width:120px;transform:rotate(8deg)')) + `<div class="wrap"><div class="cols">
      <form id="checkout" class="form">
        ${f('name', 'Full name', 'full')}${f('email', 'Email', 'full')}${f('address', 'Address', 'full')}
        ${f('city', 'City')}${f('state', 'State / Region')}${f('zip', 'ZIP / Postal code')}
        <div><label for="country">Country</label><input id="country" name="country" value="US"></div>
        <div class="full" id="err"></div>
        <div class="full"><p class="fineprint">You pay after you place your order. We'll email you a secure payment link.</p>
        <button class="buy" id="place">Place order <span>→</span></button></div></form>
      <div class="summary receipt" id="summary">${summaryHtml()}</div></div></div>`;
  },

  confirmation(id) {
    return pageHead(`order ${id}`, "It's yours.", cutout('cowgirl', 'width:150px;transform:rotate(7deg)') + cutout('gold-star', 'width:90px;transform:rotate(-12deg)')) +
      `<div class="wrap prose"><p class="sub">We got your order. A confirmation is on its way to your email.</p><a class="btn" href="#/shop">Keep shopping</a></div>`;
  },

  about() {
    return pageHead('our story', 'Handmade. One of one.', cutout('howdy', 'width:80px;transform:rotate(8deg)') + cutout('sequin-star', 'width:100px;transform:rotate(-12deg)')) +
      `<div class="wrap prose story-p"><p><mark>Call Me Crazy is one person, a lot of old denim and a sewing machine.</mark></p>
      <p>Every piece is cut up and rebuilt by hand with patches, paint, studs and rhinestones.</p>
      <p>Every piece is made once. When it's gone, it's gone.</p></div>`;
  },

  contact() {
    return pageHead('contact', 'Say hi.', cutout('bw-star', 'width:100px;transform:rotate(10deg)')) +
      `<div class="wrap prose story-p"><p>Questions about an order or sizing? Email <a href="mailto:jodi@shopcallmecrazy.com">jodi@shopcallmecrazy.com</a> or DM us on <a href="https://instagram.com/shopcallmecrazy" target="_blank" rel="noopener">Instagram @shopcallmecrazy</a>.</p></div>`;
  },

  shipping() {
    return pageHead('shipping & returns', 'The fine print.', cutout('boot', 'width:64px;transform:rotate(-8deg)')) +
      `<div class="wrap prose story-p"><p><b>Shipping.</b> Flat $8 rate, free on orders over $100. Handmade pieces ship within 5–7 business days.</p>
      <p><b>Returns.</b> Unworn items with tags may be returned within 30 days for a full refund.</p></div>`;
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
  return `<div class="rc-h">receipt — drop 01</div>
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
