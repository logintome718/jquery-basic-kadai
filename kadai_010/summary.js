$(function() {
  // id属性change-colorをクリックすると
  $('#change-color').on('click', function () {
    // 文字色変化ボタンを押した際に、文字色が任意の色に更新される
    $('#target').css('color', 'red');
  });
  
  // id属性change-textをクリックすると
  $('#change-text').on('click', function () {
    // 文字内容変化ボタンを押した際に、任意の文字内容に更新される
    $('#target').text('hello');
  });

  // id属性fade-outをクリックすると
  $('#fade-out').on('click', function () {
    // フェードアウトボタンを押した際に、フェードアウトで文字が消える
    $('#target').fadeOut();
  });

  // id属性fade-inをクリックすると
  $('#fade-in').on('click', function () {
    // フェードインボタンを押した際に、フェードインで文字が現れる
    $('#target').fadeIn();
  });
});