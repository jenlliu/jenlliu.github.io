$(document).ready(function() {
  var maxLeft = ($(window).width() * 0.98) - $('.works').outerWidth();
  var maxTop = ($(window).height() * 0.98) - $('.works').outerHeight();
      
  $(".works").draggable({
  containment: [0, 0, maxLeft, maxTop]
  });
});


