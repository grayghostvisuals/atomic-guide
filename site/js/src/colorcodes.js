// RGB2Hex Converter
// ======================================================

function tksRgb2Hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}


// Color Swatch Event
// ======================================================

$('#colors svg').on('click', function(e) {

  var tks_hexvalue = tksRgb2Hex( $(this).css('fill') ),
      tks_rgbvalue = $(this).css('fill'),
      rgb          = tks_rgbvalue;

  tks_rgbvalue = rgb.substring(4, rgb.length-1)
                    .replace(/ /g, '')
                    .split(',');

  $('body').append('<div class="hex"><p>' + tks_hexvalue + '</p><b>Click Hex Code to Copy</b></div>');

  $('.hex').css({
    'background': 'rgba('+ tks_rgbvalue[0] + ',' + tks_rgbvalue[1] + ',' + tks_rgbvalue[2] + ', 0.95)'
  });

});


// Clipboard Event
// ======================================================

$('body').on('click', '.hex', function(e) {

  if(e.target.nodeName !== 'P') {
    $(this).remove();
  }

  if(e.target.nodeName === 'P') {
    var hex_value = window.prompt("Copy to clipboard: CTRL+C (CMD+C on macs)", tksRgb2Hex( $('.hex').css('background') ));

    if(hex_value !== null) {
      $(this).remove();
    }
  }

});