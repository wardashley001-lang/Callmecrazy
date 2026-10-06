(function () {
  var FONTS = ["'Playfair Display'", "'Abril Fatface'", "'Bebas Neue'", "'Special Elite'", "'Courier Prime'", "'Archivo Black'", "'Oswald'", "'DM Serif Display'"];
  var PAPER = [['#fdf1f6', '#c2185b'], ['#fdf1f6', '#111'], ['#f7c1d9', '#8c0f45'], ['#f7c1d9', '#111'], ['#ef7fb2', '#fff'], ['#ef7fb2', '#111'], ['#F33283', '#fff'], ['#F33283', '#fdf1f6'], ['#c2185b', '#fdf1f6']];
  function rnd(seed) { var x = Math.sin(seed * 9301 + 49297) * 233280; return x - Math.floor(x); }
  function ragged(s) {
    var n = 5, pts = [];
    function j(k) { return (rnd(s + k) * 5).toFixed(1); }
    var i;
    for (i = 0; i <= n; i++) pts.push((i / n * 100).toFixed(1) + '% ' + j(i) + '%');
    for (i = 1; i <= n; i++) pts.push((100 - j(10 + i)).toFixed(1) + '% ' + (i / n * 100).toFixed(1) + '%');
    for (i = n - 1; i >= 0; i--) pts.push((i / n * 100).toFixed(1) + '% ' + (100 - j(20 + i)).toFixed(1) + '%');
    for (i = n - 1; i >= 1; i--) pts.push(j(30 + i) + '% ' + (i / n * 100).toFixed(1) + '%');
    return 'polygon(' + pts.join(',') + ')';
  }
  function build(el) {
    var text = el.getAttribute('data-ransom') || '';
    var seed = parseInt(el.getAttribute('data-seed') || '7', 10);
    el.setAttribute('aria-label', text);
    el.classList.add('rn');
    el.textContent = '';
    text.split('').forEach(function (ch, k) {
      var s = seed * 100 + k + 1;
      var pair = PAPER[Math.floor(rnd(s + 3) * PAPER.length)];
      var span = document.createElement('span');
      span.className = 'lt';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = rnd(s + 5) > 0.45 ? ch.toUpperCase() : ch.toLowerCase();
      span.style.cssText = 'font-family:' + FONTS[Math.floor(rnd(s) * FONTS.length)] + ',serif;background:' + pair[0] + ';color:' + pair[1] +
        ';transform:translateY(' + (rnd(s + 9) * 0.2 - 0.1).toFixed(2) + 'em) rotate(' + (rnd(s + 7) * 8 - 4).toFixed(1) + 'deg);font-size:' +
        (0.92 + rnd(s + 11) * 0.22).toFixed(2) + 'em;clip-path:' + ragged(s);
      el.appendChild(span);
    });
  }
  function init() { document.querySelectorAll('[data-ransom]').forEach(build); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
  document.addEventListener('shopify:section:load', init);
})();
