// Config
// ============================================================

var $atomic_html       = document.querySelectorAll('pre.language-html code')
    $atomic_js         = document.querySelectorAll('script.atomic-js'),
    $atomic_jscode     = document.querySelectorAll('pre.language-javascript > code')
    atomic_htmlsnippet = [],
    atomic_jsnippet    = [];


// Markup
// order matters!
// ============================================================

for(var i = 0, l = $atomic_html.length; i < l; i++) {

  atomic_htmlsnippet.push(
    $atomic_html[i].innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  );

  $atomic_html[i].innerHTML = atomic_htmlsnippet[i];
}


// JavaScript
// order matters!
// ============================================================

for(var i = 0, l = $atomic_js.length; i < l; i++) {

  atomic_jsnippet.push(
    $atomic_js[i].innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  );

}

for(var i = 0, l = $atomic_jscode.length; i < l; i++) {

  $atomic_jscode[i].innerHTML = atomic_jsnippet[i];

}