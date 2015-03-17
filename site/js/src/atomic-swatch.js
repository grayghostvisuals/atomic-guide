// RGB2Hex Converter
// ======================================================

function atomicRgb2Hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

  return (rgb && rgb.length === 4) ? "#" +
  ('0' + parseInt(rgb[1], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[2], 10).toString(16)).slice(-2) +
  ('0' + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
}


// Color Swatch Event
// ======================================================

$('#atomic-colors svg').on('click', function(e) {

  var atomic_hexvalue   = atomicRgb2Hex( $(this).css('fill') ),
      atomic_rgbchannel = $(this).css('fill'),
      atomic_rgb        = atomic_rgbchannel;

  atomic_rgbchannel = atomic_rgb.substring(4, atomic_rgb.length-1)
                                .replace(/ /g, '')
                                .split(',');

  $('body.atomic').append('<div class="atomic-swatch"><p>' + atomic_hexvalue + '</p><b>Click Hex Code to Copy</b></div>');

  $('.atomic-swatch').css({
    'background': 'rgba('+ atomic_rgbchannel[0] + ',' + atomic_rgbchannel[1] + ',' + atomic_rgbchannel[2] + ', 0.95)'
  });

});


// Clipboard Event
// ======================================================

$('body.atomic').on('click', '.atomic-swatch', function(e) {

  if(e.target.nodeName !== 'P') { $(this).remove(); }

  if(e.target.nodeName === 'P') {
    var atomic_hexvalue = window.prompt("Copy to clipboard: CTRL+C (CMD+C on macs)", atomicRgb2Hex( $('.atomic-swatch').css('background') ));
    if(atomic_hexvalue !== null) { $(this).remove(); }
  }

});