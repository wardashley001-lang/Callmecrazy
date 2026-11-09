document.addEventListener('click', function (e) {
  var t = e.target.closest('[data-thumb]');
  if (!t) return;
  var main = document.getElementById('pimg-main');
  if (main) {
    main.src = t.getAttribute('data-thumb');
    main.alt = t.getAttribute('data-thumb-alt') || '';
  }
  document.querySelectorAll('.thumbs button').forEach(function (b) {
    var selected = b === t;
    b.classList.toggle('on', selected);
    b.setAttribute('aria-pressed', selected ? 'true' : 'false');
  });
});
var sortSel = document.getElementById('sort');
if (sortSel) sortSel.addEventListener('change', function () {
  var u = new URL(location.href); u.searchParams.set('sort_by', sortSel.value); location.href = u.toString();
});
