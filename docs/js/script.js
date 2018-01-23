$(function(){
  $(window).scroll(function() {
    $('#line').height($(window).scrollTop()-window.innerHeight * ($(document).height() -$(window).scrollTop())/$(document).height() + 100);
  });
});
