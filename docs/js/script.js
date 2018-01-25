$(function(){
  $(window).scroll(function() {
    const dHeight = $(document).height();
    const pos = $(window).scrollTop();
    $('#line').height(pos-window.innerHeight * ( dHeight-pos-200)/dHeight + 200);
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();
    $(".effect-right").each(function(){
      var imgPos = $(this).offset().top;
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"opacity":"1","transform":"translateX(0)"});
      } else {
        $(this).css({"opacity":"0","transform":"translateX(100px)"});
      }
    });
    $(".effect-left").each(function(){
      var imgPos = $(this).offset().top;
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"opacity":"1","transform":"translateX(0)"});
      } else {
        $(this).css({"opacity":"0","transform":"translateX(-100px)"});
      }
    });
    $(".imgs").each(function(){
      var imgPos = $(this).offset().top;
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"opacity":"1",});
      } else {
        $(this).css({"opacity":"0"});
      }
    });
    $(".img-effect-right").each(function(){
      var imgPos = $(this).offset().top;
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"transform":"translateX(0)"});
      } else {
        $(this).css({"transform":"translateX(100px)"});
      }
    });
    $(".img-effect-left").each(function(){
      var imgPos = $(this).offset().top;
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).css({"transform":"translateX(0)"});
      } else {
        $(this).css({"transform":"translateX(-100px)"});
      }
    });
  });
  $('#top-scroll').on('click', function(){
    $('html,body').animate({scrollTop: $('.content-wrap').height()}, 800, 'swing');
  });
});
