$(document).ready(function() {
  $('.new-tweet .textArea').keyup(function(event) {
    $('.errorBlank').css('display', 'none');

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


  // $("article").hover(

    // function() {
      // //change font to bold when mouse hover over
      // $('article').on('mouseenter', function() {
      //   $(this).css('border', '2px solid black');
      // });
      // //change font (unbold) when mouse leave
      // $('article').on('mouseleave', function() {
      //   $(this).css('border', '1px solid gray');
      // });
    // });



});






