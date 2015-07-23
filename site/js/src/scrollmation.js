// Primary Navigation
// =======================================

var controller        = new ScrollMagic.Controller(),
    atomic_nav        = document.getElementById('nav'),
    atomic_links      = atomic_nav.children,
    atomic_scrollinks = {};

for (var i = 0, l = atomic_links.length; i < l; i++) {
  if(atomic_links[i].hash !== '') {
    var href = atomic_links[i].hash.replace('#', ''),
        id   = atomic_links[i].id,
        key  = href;

    atomic_scrollinks[key] = id;
  }
}

for (var key in atomic_scrollinks) {
  new ScrollMagic.Scene({
      duration: document.getElementById(key).scrollHeight,
      triggerElement: '#' + key
    })
    .setClassToggle('#' + atomic_scrollinks[key], 'active')
    .addTo(controller);
}

function scrollToTween(target) {
  TweenMax.to(window, 0.675, {
    scrollTo : {
      y: target,
      autoKill: true
    },

    ease : Cubic.easeInOut
  });
}

function scrollToTrigger(e) {
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
}

controller.scrollTo(function(target) {
  scrollToTween(target);
});

atomic_nav.addEventListener('click', function(e) {
  scrollToTrigger(e);
});


// Back To Top Button
// =======================================

var button_id = 'scroll-top';
var button_scene = new ScrollMagic.Scene({
  offset: document.getElementsByTagName('header')[0].offsetHeight,
  reverse: true
}).addTo(controller);

function hideTopButton(event, id) {
  var el = document.getElementById(id);
  el.style.opacity = 0;
}

function makeTopButton(event, id) {
  var top_hash = document.body.getAttribute('id');

  if(document.getElementById(id) === null) {
    var el = document.createElement('a');

    el.innerHTML = 'topside';

    document.body.appendChild(el);

    el.setAttribute('id', id);
    el.setAttribute('href', '#' + top_hash);

    el.addEventListener('click', function(e) {
      scrollToTrigger(e);
    });
  } else {
    document.getElementById(id).style.opacity = 1;
  }
}

button_scene.on('enter', function(event) {
  makeTopButton(event, button_id);
}).on('leave', function(event) {
  hideTopButton(event, button_id);
});
