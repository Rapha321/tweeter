$(document).ready(function() {
  $('.new-tweet textarea').keyup(function(event) {
    var value = $(this).val().length;
    if ((140 - value) < 0) {
      $('.new-tweet .counter').text(140 - value).css("color", "red");
    }
    else {
      $('.new-tweet .counter').text(140 - value).css("color", "black");
    }
  });
});




