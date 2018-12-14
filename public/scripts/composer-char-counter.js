
// to make sure that the DOM of the page is ready to manipulate.
$(document).ready(function() {
  $('.new-tweet .textArea').keyup(function(event) {
    $('.errorBlank').css('display', 'none');

    //if textarea input is greater than 140, counter color turns red and display error message
    var value = $(this).val().length;
    if ((140 - value) < 0) {
      $('.new-tweet .counter').text(140 - value).css("color", "red");
      $('.error140').css('display', 'block');
    }
    else {
      $('.new-tweet .counter').text(140 - value).css("color", "black");
      $('.error140').css('display', 'none');
    }
  });

});






