$(document).ready(function(){
  var loadStatus = 0; //ローディング進捗
  var img_num = $('img').length; //読み込む画像の数

  $('img').each(function() { //画像が読み込まれたら、、
      var src = $(this).attr('src');
      $('<img>').attr('src', src).on('load',function() {
          loadStatus++; //画像が読み込まれたら、loading状況を更新
      });
      
  });
  var timer = setInterval(function() { //ローディング状況をプログレスバーに反映

      $('.progressbar').css({
          'width': (loadStatus / img_num) * 100 + '%' //読み込まれた画像の数 / 読み込む画像の数 * %  これをプログレスバーのwidthに設定 
      });
      if((loadStatus / img_num) * 100 == 100){ //ローディング完了後にプログレスバーを非表示
          clearInterval(timer);
          $('.progressbar').delay(200).animate({
                'opacity': 0
            }, 200);

          $('#hidden-all').delay(500).queue(function() { //ローディングバーを隠すと同時にメインコンテンツを表示
              $(this).addClass('load');
          });
      }
  }, 5);
});
