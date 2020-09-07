

 //マウスストーカー用のdivを取得
 const stalker = document.getElementById('stalker'); 

 //上記のdivタグをマウスに追従
 document.addEventListener('mousemove', function (e) {
     stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
 });





// ハンバーガーメニューの開閉ボタン
 $(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});