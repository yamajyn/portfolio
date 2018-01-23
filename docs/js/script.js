$(function(){
  $(window).scroll(function() {
    var dHeight = $(document).height();
    var pos = $(window).scrollTop();
    $('#line').height(pos-window.innerHeight * ( dHeight-pos-200)/dHeight + 200);
    $(".effect-right").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"opacity":"1","transform":"translateX(0)"});
      } else {
        $(this).css({"opacity":"0","transform":"translateX(50px)"});
      }
    });
    $(".effect-left").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"opacity":"1","transform":"translateX(0)"});
      } else {
        $(this).css({"opacity":"0","transform":"translateX(-50px)"});
      }
    });
    $(".img-effect-right").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"transform":"translateX(0)"});
      } else {
        $(this).css({"transform":"translateX(50px)"});
      }
    });
    $(".img-effect-left").each(function(){
      var imgPos = $(this).offset().top;    
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"transform":"translateX(0)"});
      } else {
        $(this).css({"transform":"translateX(-50px)"});
      }
    });
  });
  $('#top-scroll').on('click', function(){
    $('html,body').animate({scrollTop: $('.content-wrap').height()}, 800, 'swing');
  });
});
