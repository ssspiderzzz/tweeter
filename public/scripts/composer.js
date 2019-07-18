/* eslint-disable no-undef */
$(() => {

    // Rotating the big avatar (for fun)
    $('#bigAvatar').hover(() => {
      $('#bigAvatar').css(`transform`, `rotate(360deg)`);
    })
    $('#bigAvatar').mouseout(() => {
      $('#bigAvatar').css(`transform`, `rotate(0deg)`);
    })

    // Toggling up the new tweets box
    $('#arrow').click(() => {
      $('.new-tweet').slideToggle("up")
    })

    // Navigate the page to the top
    $('#toTheTop').click(() => {
      $(document).scrollTop(0)
    })

    $(document).on("scroll", function() {
      let scrollPosition = $(document).scrollTop();
      if (scrollPosition === 0) {
        $('#toTheTop').css('opacity', '0');
      } else {
        $('#toTheTop').css('opacity', '1');
    } 
    });
    // Toggle the nav part
    $(document).on("scroll", function() {
        if ($(window).width() < 768) {
          let scrollPosition = $(document).scrollTop();
        if (scrollPosition > 400) {
          $('#nav').hide('up');
        } 
        if (scrollPosition < 400) {
          $('#nav').show('up');
        }
      } 
    });
  });