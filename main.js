$(document).ready(function() {

  $(window).scroll(scrollEffect);

  function scrollEffect() {
    if ($(window).scrollTop() >= 300) {
      $('.works').css({
        'opacity': '1',
        'transform': 'translateY(0)',
        'transition': '1s ease-in-out'
      });
    } else {
      $('.works').css({
        'opacity': '0',
        'transform': 'translateY(50px)',
        'transition': '1s ease-in-out'
      });
    }
  }
});


