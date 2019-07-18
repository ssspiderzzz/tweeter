/* eslint-disable no-undef */
$(() => {

// Animation for the arrow down
  function arrows() {
    let a;
    a = $('#arrow')
    a.css('top', '0px');
    setTimeout(function () {
      a.css('top', '15px');
    }, 1000);
  }
  arrows();
  setInterval(arrows, 2000);

});