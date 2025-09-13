$(function() {
// class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function() {
    //テキストボックスにクリックしました！を表示させる
    $('.text-box').val('クリックしました！');
    });

});