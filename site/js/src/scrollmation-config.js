var controller = new ScrollMagic({
  globalSceneOptions: {
    duration: $('main .row').height(),
    triggerHook: 0.2,
    reverse: true
  }
});

var atomic_scrollinks = {};

$('#nav').children().each(function(i) {

  var href = $(this).attr('href').replace('#', ''),
      id   = $(this).attr('id'),
      key  = href;

  atomic_scrollinks[key] = id;

});

for (var prop in atomic_scrollinks) {
  new ScrollScene({triggerElement: '#' + prop})
                .setClassToggle('#' + atomic_scrollinks[prop], 'active')
                .addTo(controller);
}


controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y: target - $('.row').height() / 8,
      autoKill: true
    },
    ease : Cubic.easeInOut
  });

});


$(document).on('click', 'a[href^=#]', function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    controller.scrollTo(id);

    if (window.history && window.history.pushState) {
      history.pushState('', document.title, id);
    }
  }

});