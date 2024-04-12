$(document).ready(function() {
  var maxLeft = ($(window).width() * 0.96) - $('.works').outerWidth();
  var maxTop = ($(window).height() * 0.96) - $('.works').outerHeight();
      
  $(".works").draggable({
  containment: [0, 0, maxLeft, maxTop]
  });
});


