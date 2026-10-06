// Zero-dependency server: static files + product/checkout/admin API.
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme';
const PUBLIC = path.join(__dirname, 'public');
const PRODUCTS_FILE = path.join(__dirname, 'data', 'products.json');
const ORDERS_FILE = path.join(__dirname, 'data', 'orders.json');

const FREE_SHIPPING_MIN = 10000; // cents
const SHIPPING_FLAT = 800;
const TAX_RATE = 0.0; // set per your state/jurisdiction

const MIME = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
};

const loadProducts = () => JSON.parse(fs.readFileSync(PRODUCTS_FILE, 'utf8'));
const loadOrders = () => {
  try { return JSON.parse(fs.readFileSync(ORDERS_FILE, 'utf8')); } catch { return []; }
};
const saveOrder = (order) => {
  const orders = loadOrders();
  orders.push(order);
  fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
};

function send(res, status, body, headers = {}) {
  const isObj = typeof body === 'object' && !Buffer.isBuffer(body);
  res.writeHead(status, { 'Content-Type': isObj ? 'application/json' : 'text/plain', ...headers });
  res.end(isObj ? JSON.stringify(body) : body);
}

function readBody(req, limit = 100_000) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => { data += c; if (data.length > limit) { reject(new Error('too large')); req.destroy(); } });
    req.on('end', () => { try { resolve(JSON.parse(data || '{}')); } catch { reject(new Error('bad json')); } });
    req.on('error', reject);
  });
}

// Prices are always recomputed server-side from the catalog; never trust the client.
function priceOrder(items) {
  const products = loadProducts();
  if (!Array.isArray(items) || !items.length || items.length > 50) throw new Error('Cart is empty');
  const lines = items.map((it) => {
    const p = products.find((x) => x.id === it.id);
    if (!p) throw new Error('Unknown product');
    const qty = Number(it.qty);
    if (!Number.isInteger(qty) || qty < 1 || qty > 20) throw new Error('Invalid quantity');
    if (!p.sizes.includes(it.size)) throw new Error(`Invalid size for ${p.name}`);
    if (!p.colors.some((c) => c.name === it.color)) throw new Error(`Invalid color for ${p.name}`);
    return { id: p.id, name: p.name, size: it.size, color: it.color, qty, unitPrice: p.price, lineTotal: p.price * qty };
  });
  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const shipping = subtotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FLAT;
  const tax = Math.round(subtotal * TAX_RATE);
  return { lines, subtotal, shipping, tax, total: subtotal + shipping + tax };
}

const clean = (v, max = 200) => String(v ?? '').trim().slice(0, max);

function validateCustomer(c = {}) {
  const customer = {
    name: clean(c.name), email: clean(c.email), address: clean(c.address),
    city: clean(c.city), state: clean(c.state, 50), zip: clean(c.zip, 20), country: clean(c.country, 60) || 'US',
  };
  if (!customer.name) throw new Error('Name is required');
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(customer.email)) throw new Error('A valid email is required');
  for (const k of ['address', 'city', 'zip']) if (!customer[k]) throw new Error(`${k} is required`);
  return customer;
}

function isAdmin(req) {
  const h = req.headers.authorization || '';
  if (!h.startsWith('Basic ')) return false;
  const pass = Buffer.from(h.slice(6), 'base64').toString().split(':').slice(1).join(':');
  const a = Buffer.from(pass), b = Buffer.from(ADMIN_PASSWORD);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function handleApi(req, res, url) {
  try {
    if (req.method === 'GET' && url.pathname === '/api/products') return send(res, 200, loadProducts());
    if (req.method === 'GET' && url.pathname === '/api/config') {
      return send(res, 200, { freeShippingMin: FREE_SHIPPING_MIN, shipping: SHIPPING_FLAT, taxRate: TAX_RATE });
    }
    if (req.method === 'POST' && url.pathname === '/api/quote') {
      const body = await readBody(req);
      return send(res, 200, priceOrder(body.items));
    }
    if (req.method === 'POST' && url.pathname === '/api/checkout') {
      const body = await readBody(req);
      const customer = validateCustomer(body.customer);
      const pricing = priceOrder(body.items);
      // TODO: charge the card here (e.g. Stripe Checkout/PaymentIntent) before saving.
      const order = {
        id: 'CMC-' + crypto.randomBytes(4).toString('hex').toUpperCase(),
        createdAt: new Date().toISOString(), status: 'pending_payment', customer, ...pricing,
      };
      saveOrder(order);
      return send(res, 201, { orderId: order.id, total: order.total });
    }
    if (req.method === 'GET' && url.pathname === '/api/admin/orders') {
      if (!isAdmin(req)) return send(res, 401, { error: 'Unauthorized' }, { 'WWW-Authenticate': 'Basic realm="admin"' });
      return send(res, 200, loadOrders().reverse());
    }
    return send(res, 404, { error: 'Not found' });
  } catch (e) {
    return send(res, 400, { error: e.message });
  }
}

function serveStatic(req, res, url) {
  let rel = decodeURIComponent(url.pathname);
  if (rel === '/admin') rel = '/admin.html';
  const file = path.normalize(path.join(PUBLIC, rel === '/' ? 'index.html' : rel));
  if (!file.startsWith(PUBLIC + path.sep) && file !== PUBLIC) return send(res, 403, 'Forbidden');
  fs.readFile(file, (err, buf) => {
    if (err) return send(res, 404, 'Not found');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(buf);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname.startsWith('/api/')) return handleApi(req, res, url);
  if (url.pathname === '/admin' && !isAdmin(req)) {
    return send(res, 401, 'Unauthorized', { 'WWW-Authenticate': 'Basic realm="admin"' });
  }
  return serveStatic(req, res, url);
});

if (require.main === module) {
  server.listen(PORT, () => console.log(`Call Me Crazy running at http://localhost:${PORT}`));
}
module.exports = { server, priceOrder };
