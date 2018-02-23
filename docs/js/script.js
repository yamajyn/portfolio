$(function(){
  const dHeight = $(document).height();
  const windowHeight = $(window).height();
  $(window).scroll(function() {
    const pos = $(window).scrollTop();
    const lineHeight = pos-window.innerHeight * ( dHeight-pos-200)/dHeight + 200;
    $('#line').height(lineHeight > dHeight ? dHeight : lineHeight);
    const scroll = $(window).scrollTop();
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
