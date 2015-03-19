// DOM Insertion
// ======================================================

$('body.atomic').append('<div class="atomic-hexoverlay"></div>');


// References
// ======================================================

var $atomic_hexoverlay = $('.atomic-hexoverlay');


// RGB2Hex Converter
// ======================================================

function atomicRgb2Hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  return (rgb && rgb.length === 4) ? "#" +
  ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

// http://www.w3.org/TR/cssom/#serialize-a-css-value
// $('#colors svg').each(function(i) {
//   console.log(window.getComputedStyle(this).getPropertyValue('fill'));
// });


// Color Swatch Event
// ======================================================

$('#atomic-colors svg').on('click', function(e) {

  var atomic_hexvalue   = atomicRgb2Hex( $(this).css('fill') ),
      atomic_rgbchannel = $(this).css('fill'),
      atomic_rgb        = atomic_rgbchannel;

  atomic_rgbchannel = atomic_rgb.substring(4, atomic_rgb.length-1)
                                .replace(/ /g, '')
                                .split(',');

  $atomic_hexoverlay.addClass('_active');

  $atomic_hexoverlay.html('<p>' + atomic_hexvalue + '</p><b>Click Hex Code to Copy</b>');

  $atomic_hexoverlay.css({
    'background': 'rgba('+ atomic_rgbchannel[0] + ',' + atomic_rgbchannel[1] + ',' + atomic_rgbchannel[2] + ', 0.95)'
  });

});


// Clipboard Event
// ======================================================

$atomic_hexoverlay.on('click', function(e) {

  var value = atomicRgb2Hex( $atomic_hexoverlay.css('background') );

  if(e.target.nodeName !== 'P') {
    $atomic_hexoverlay.removeClass('_active');
  }

  if(e.target.nodeName === 'P') {
    var atomic_hexprompt = window.prompt("Copy to clipboard: CTRL+C (CMD+C on macs)", atomicRgb2Hex( $('.atomic-swatch').css('background') ));

    if(atomic_hexprompt !== null) {
      $atomic_hexoverlay.removeClass('_active');
    }
  }

});