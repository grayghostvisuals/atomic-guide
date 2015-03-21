// References
// ======================================================

var atomic_hex_div      = document.createElement('div'),
    $atomic_hex_overlay = document.querySelectorAll('atomic-hexoverlay'),
    $atomic_swatch      = document.getElementById('colors');


// DOM Insertion
// ======================================================

document.body.appendChild(atomic_hex_div).classList.add('atomic-hexoverlay');


// Color Converters
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


// Event
// ======================================================

$atomic_swatch.addEventListener('click', function(e) {

  var atomic_target     = e.target.parentNode,
      atomic_fill       = window.getComputedStyle(atomic_target).getPropertyValue('fill'),
      atomic_hexvalue   = atomicRgb2Hex( atomic_fill ),
      atomic_rgbchannel = atomic_fill,
      atomic_rgb        = atomic_rgbchannel;

  atomic_rgbchannel = atomic_rgb.substring(4, atomic_rgb.length-1)
                                .replace(/ /g, '')
                                .split(',');

  if(atomic_target.nodeName === 'svg') {

    atomic_hex_div.classList.add('_active');

    // http://www.w3.org/TR/cssom/#dom-window-getcomputedstyle
    // https://twitter.com/gryghostvisuals/status/578524169719123969
    if(atomic_rgbchannel.length === 3) {

      atomic_hex_div.style.background = 'rgba('+ atomic_rgbchannel[0] + ',' + atomic_rgbchannel[1] + ',' + atomic_rgbchannel[2] + ', 0.95)';
      atomic_hex_div.innerHTML = '<p>' + atomic_hexvalue + '</p><b>Click Hex Code to Copy</b>';

      var atomic_contrast = atomic_rgbchannel[0] * 0.299 + atomic_rgbchannel[1] * 0.587 + atomic_rgbchannel[2] * 0.114 > 186 ? atomic_hex_div.style.color = 'black' : atomic_hex_div.style.color = 'white';

    } else {

      var atomic_hex = window.getComputedStyle(atomic_target).getPropertyValue('fill'),
          atomic_rgb = hexToRgb(atomic_hex);

      atomic_hex_div.style.background = 'rgba('+ atomic_rgb.r + ',' + atomic_rgb.g + ',' + atomic_rgb.b +', 0.95)';

      var atomic_contrast = atomic_rgb.r * 0.299 + atomic_rgb.g * 0.587 + atomic_rgb.b * 0.114 > 186 ? atomic_hex_div.style.color = 'black' : atomic_hex_div.style.color = 'white';

      atomic_hex_div.innerHTML = '<p>' + atomic_hex + '</p><b>Click Hex Code to Copy</b>';

    }

  }

});


// Clipboard Event
// ======================================================

atomic_hex_div.addEventListener('click', function(e) {

  if(e.target.nodeName !== 'P') {

    this.classList.remove('_active');

  }

  if(e.target.nodeName === 'P') {

    var atomic_hexprompt = window.prompt("Copy to clipboard: CTRL+C (CMD+C on macs)", e.target.innerHTML);

    if(atomic_hexprompt !== null) {

      this.classList.remove('_active');

    }

  }

});