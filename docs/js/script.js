$(function(){
  $(window).scroll(function() {
    $('#line').height($(window).scrollTop()-$(window).height()/2);
  });
});
