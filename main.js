$(function() {
  $(window).on('scroll', function() {
    if($(window).scrollTop()) {
      $('.pc-nav').addClass('color');
    } else {
      $('.pc-nav').removeClass('color');
    }
  });
});
