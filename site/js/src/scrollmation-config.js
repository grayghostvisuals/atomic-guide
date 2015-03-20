var controller = new ScrollMagic({ globalSceneOptions: { duration: 100 } });

var $atomic_nav       = document.getElementById('nav'),
    $atomic_links     = $atomic_nav.children,
    atomic_scrollinks = {};

for (var i = 0, l = $atomic_links.length; i < l; i++) {
  var href = $atomic_links[i].hash.replace('#', ''),
      id   = $atomic_links[i].id,
      key  = href;

  atomic_scrollinks[key] = id;
}

for (var key in atomic_scrollinks) {
  new ScrollScene({
      duration: 100,
      triggerElement: '#' + key
    })
    .setClassToggle('#' + atomic_scrollinks[key], 'active')
    .addTo(controller);
}


controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y: target,
      autoKill: true
    },
    ease : Cubic.easeInOut
  });

});


$atomic_nav.addEventListener('click', function(e) {

  if(e.target && e.target.nodeName == 'A') {

    var id = e.target.hash;

    if(id.length > 0) {
      e.preventDefault();

      controller.scrollTo(id);

      if (window.history && window.history.pushState) {
        history.pushState('', document.title, id);
      }
    }

  }

});