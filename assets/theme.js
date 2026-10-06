document.addEventListener('click', function (e) {
  var t = e.target.closest('[data-thumb]');
  if (!t) return;
  var main = document.getElementById('pimg-main');
  if (main) { main.src = t.getAttribute('data-thumb'); }
  document.querySelectorAll('.thumbs button').forEach(function (b) { b.classList.toggle('on', b === t); });
});
var sortSel = document.getElementById('sort');
if (sortSel) sortSel.addEventListener('change', function () {
  var u = new URL(location.href); u.searchParams.set('sort_by', sortSel.value); location.href = u.toString();
});
