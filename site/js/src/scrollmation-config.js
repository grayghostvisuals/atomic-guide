// Init controller
var controller = new ScrollMagic({
  globalSceneOptions: {
    duration: $('main .row').height(),
    triggerHook: 0.2,
    reverse: true
  }
});

new ScrollScene({triggerElement: '#colors'})
                .setClassToggle('#tks-anchor-color', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#icons'})
                .setClassToggle('#tks-anchor-icons', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#helpers'})
                .setClassToggle('#tks-anchor-helpers', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#utilities'})
                .setClassToggle('#tks-anchor-utility', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#typography'})
                .setClassToggle('#tks-anchor-typography', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#buttons'})
                .setClassToggle('#tks-anchor-buttons', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#forms'})
                .setClassToggle('#tks-anchor-forms', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#navigation'})
                .setClassToggle('#tks-anchor-nav', 'active')
                .addTo(controller);
new ScrollScene({triggerElement: '#patterns'})
                .setClassToggle('#tks-anchor-patterns', 'active')
                .addTo(controller);

// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y: target - 75,
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