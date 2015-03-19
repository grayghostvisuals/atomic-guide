// Config
// ============================================================

var $atomic_html       = $('pre[class="language-html"] > code'),
    $atomic_js         = $('.atomic-js'),
    atomic_htmlsnippet = [],
    atomic_jsnippet    = [];


// Markup
// order matters!
// ============================================================

$atomic_html.each(function(i) {

  atomic_htmlsnippet.push(
    $atomic_html[i]
      .innerHTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  );

  $(this).html(atomic_htmlsnippet[i]);

});


// JavaScript
// order matters!
// ============================================================

$atomic_js.each(function(i) {

  atomic_jsnippet.push(
    $atomic_js[i]
      .innerHTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  );

});

$('pre[class="language-javascript"] > code').each(function(i) {
  $(this).append(atomic_jsnippet[i])
});