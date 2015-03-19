// Init controller
var controller = new ScrollMagic({
  globalSceneOptions: {
    duration: $('main .row').height(),
    triggerHook: 0.2,
    reverse: true
  }
});

var atomic_scrollinks = {
  // [hash-value] : [link-id]
  'atomic-colors': 'atomic-colors',
  icons: 'icons',
  helpers: 'helpers',
  utilities: 'utilities',
  typography: 'typography',
  buttons: 'buttons',
  forms: 'forms',
  navigation: 'nav',
  patterns: 'patterns'
}


for (var prop in atomic_scrollinks) {
  console.log(atomic_scrollinks[prop]);
  new ScrollScene({triggerElement: '#' + prop})
                .setClassToggle('#' + atomic_scrollinks[prop], 'active')
                .addTo(controller);
}

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y: target,
      autoKill: true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});


//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});