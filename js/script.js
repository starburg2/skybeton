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
const burgerBackground = $('.burger');

const desableScroll = () => {
  const widthScroll = window.innerWidth - document.body.offsetWidth;

  document.body.dbScrollY = window.scrollY;

  document.body.style.cssText = `
    position: fixed;
    top: ${-window.scrollY}px;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-right: ${widthScroll}px;
  `;
};

const enableScroll = () => {
  document.body.style.cssText = '';
  window.scroll({
    top: document.body.dbScrollY
  })
};

burgerBtn.on('click', function (event) {
  event.preventDefault();
  $('.burger').show('slow');
  if (!$(this).hasClass('burger-btn-active')) {
    $(this).siblings().removeClass('burger-btn-active');
    $(this).addClass('burger-btn-active');
    desableScroll();
  } else {
    $(this).removeClass('burger-btn-active');
    $('.burger').hide('slow');
    enableScroll();
  }
});

burgerBackground.on('click', event => {
  const target = event.target;
  console.log('target: ', target);

  if (target.matches('.burger')) {
    $(burgerBtn).removeClass('burger-btn-active');
    $('.burger').hide('slow');
  }
});
