$(document).ready(function() {
  // --- our code goes here ---
  $('#inputText').on('input propertychange', function() {
    let counter = $("#inputText").val().trim().length;
    $('.counter').html(`${140 - counter}`)
    if (counter > 140) {
      $('.counter').css('color', 'red')
    } else {
      $('.counter').css('color', '#5d5d63')
    }
  })

});