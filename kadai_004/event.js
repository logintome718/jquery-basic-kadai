  $(window).on('scroll load', function(e) {
    // 読み込みが完了された場合
    if(e.type === 'load') {
    console.log('loadイベントが発生しました')
    }
    // スクロールされた場合
    if(e.type === 'scroll') {
    console.log('scrollイベントが発生しました')
    }
  });