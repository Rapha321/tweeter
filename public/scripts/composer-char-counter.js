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
    });



});




