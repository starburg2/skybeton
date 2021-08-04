$(document).ready(function() {
  $('.block__title').click(function(event) {
    if ($('.block1').hasClass('one')) {
      $('.block__title').not($(this)).removeClass('active');
      $('.block__text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  });
});

const burgerBtn = $('.burger-btn');
// const burgerBtnActive = $('.burger-btn-active');

burgerBtn.on('click', function (event) {
  event.preventDefault();
  $('.burger').slideToggle();
  if (!$(this).hasClass('burger-btn-active')) {
    $(this).siblings().removeClass('burger-btn-active');
    $(this).addClass('burger-btn-active');
  } else {
    $(this).removeClass('burger-btn-active');
  }
});



// $(window).scroll(function(){
//   var docscroll=$(document).scrollTop();
//   if(docscroll>$(window).height()){
//     $('burger').css({'height': $('burger').height(),'width': $('burger').width()}).addClass('fixed');
//   }else{
//     $('burger').removeClass('fixed');
//   }
// });