// DOM Insertion
// ======================================================

var atomic_hex_div = document.createElement('div');
document.body.appendChild(atomic_hex_div).classList.add('atomic-hexoverlay');


// References
// ======================================================

var $atomic_hexoverlay = $('.atomic-hexoverlay');


// RGB2Hex Converter
// ======================================================

function atomicRgb2Hex(rgb) {
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  return (rgb && rgb.length === 4) ? "#" +
    ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
    ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
    ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
}


// Color Swatch Event
// ======================================================

$('#colors svg').on('click', function(e) {

  var atomic_fill       = $(this).css('fill'),
      atomic_hexvalue   = atomicRgb2Hex( atomic_fill ),
      atomic_rgbchannel = atomic_fill,
      atomic_rgb        = atomic_rgbchannel;

  atomic_rgbchannel = atomic_rgb.substring(4, atomic_rgb.length-1)
                                .replace(/ /g, '')
                                .split(',');

  $atomic_hexoverlay.addClass('_active');

  // http://www.w3.org/TR/cssom/#dom-window-getcomputedstyle
  // https://twitter.com/gryghostvisuals/status/578524169719123969
  if(atomic_rgbchannel.length === 3) {

    $atomic_hexoverlay.css({
      'background': 'rgba('+ atomic_rgbchannel[0] + ',' + atomic_rgbchannel[1] + ',' + atomic_rgbchannel[2] + ', 0.95)'
    });

    $atomic_hexoverlay.html('<p>' + atomic_hexvalue + '</p><b>Click Hex Code to Copy</b>');

  } else {

    $(this).each(function(i) {

      var atomic_hex = window.getComputedStyle(this).getPropertyValue('fill'),
          atomic_rgb = hexToRgb(atomic_hex);

      $atomic_hexoverlay.css({
        'background' : 'rgba('+ atomic_rgb.r + ',' + atomic_rgb.g + ',' + atomic_rgb.b +', .95)'
      });

      $atomic_hexoverlay.html('<p>' + atomic_hex + '</p><b>Click Hex Code to Copy</b>');

    });

  }

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