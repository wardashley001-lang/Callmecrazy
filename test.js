// Quick checks: node test.js
const assert = require('assert');
const { server, priceOrder } = require('./server');

const item = { id: 'ribbed-knit-top', size: 'M', color: 'Black', qty: 2 };
let p = priceOrder([item]);
assert.strictEqual(p.subtotal, 11600);
assert.strictEqual(p.shipping, 0); // over $100
p = priceOrder([{ ...item, qty: 1 }]);
assert.strictEqual(p.shipping, 800);
assert.throws(() => priceOrder([{ ...item, size: 'ZZ' }]));
assert.throws(() => priceOrder([{ ...item, id: 'nope' }]));
assert.throws(() => priceOrder([]));

server.listen(0, async () => {
  const base = `http://localhost:${server.address().port}`;
  const post = (u, b) => fetch(base + u, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(b) });
  assert.strictEqual((await fetch(base + '/')).status, 200);
  assert.strictEqual((await fetch(base + '/../server.js')).status, 404);
  assert.strictEqual((await fetch(base + '/api/admin/orders')).status, 401);
  assert.strictEqual((await post('/api/checkout', { customer: { name: 'A' }, items: [item] })).status, 400);
  console.log('All tests passed');
  server.close();
});
