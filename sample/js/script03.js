
$(window).on('load',function(){
  $("#splash-logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述

  //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
      $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  });

  //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
  
 //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
  $('.splashbg').on('animationend', function() { 
      //この中に動かしたいJSを記載
  });
  
  //上部画像の設定
  $('.gallery').slick({
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      fade: true, //フェードの有効化
      arrows: true,//左右の矢印あり
      prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
      nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    });
    
    //選択画像の設定
    $('.choice-btn').slick({
      infinite: true, //スライドをループさせるかどうか。初期値はtrue。
      slidesToShow: 6, //表示させるスライドの数
      focusOnSelect: true, //フォーカスの有効化
      asNavFor: '.gallery', //連動させるスライドショーのクラス名
    });
      
    //下の選択画像をスライドさせずに連動して変更させる設定。
    $('.gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var index = nextSlide; //次のスライド番号
      //サムネイルのslick-currentを削除し次のスライド要素にslick-currentを追加
      $(".choice-btn .slick-slide").removeClass("slick-current").eq(index).addClass("slick-current");
    });
      //=====ここまで背景が伸びた後に動かしたいJSをまとめる
 
});



$(function(){
$(".inview_re").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).stop().addClass("is-show");
  } else {
    $(this).stop().removeClass("is-show");
  }
});
});