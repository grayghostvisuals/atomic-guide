// Config
// ============================================================

var $tks_html         = $('pre[class="language-html"] > code'),
    $tks_js           = $('.demo-js'),
    tks_htmlsnippets  = [],
    tks_js_snippets   = [];


// Markup
// order matters!
// ============================================================

$tks_html.each(function(i) {

  tks_htmlsnippets.push(
    $tks_html[i]
      .innerHTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  );

  $(this).html(tks_htmlsnippets[i]);

});


// JavaScript
// order matters!
// ============================================================

$tks_js.each(function(i) {

  tks_js_snippets.push(
    $tks_js[i]
      .innerHTML
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
  );

});

$('pre[class="language-javascript"] > code').each(function(i) {
  $(this).append(tks_js_snippets[i])
});