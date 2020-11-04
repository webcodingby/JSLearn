const show = document.querySelector('.button--show');
const hide = document.querySelector('.button--hide');
const buttonAbout = document.querySelector('.button--about');
const text = document.querySelector('.about__wrap');
const brandLink = document.querySelectorAll('.brand__link');
const brand = document.querySelector('.service--brand');

const serviceContainer = document.querySelector('.service--container');
const slide = document.querySelector('.swiper--slide');
const pagination = document.querySelector('.pagination');


show.addEventListener('click', function () {
  show.classList.add('hide');
  hide.classList.remove('hide');
  if(buttonAbout){
    text.classList.add('height--overflow');
    buttonAbout.classList.add('button--overflow');
  }
  if(brand){
    brand.classList.remove('overflow');  
  }
})

hide.addEventListener('click', function () {
  hide.classList.add('hide');
  show.classList.remove('hide');
  if(buttonAbout){
    text.classList.remove('height--overflow');
    buttonAbout.classList.remove('button--overflow');
  }
  if(brand){
    brand.classList.add('overflow')
  }
})


if (serviceContainer) {
  if (screen.width <= 767) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      setWrapperSize: 10,
      width: 247,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  } else {
    serviceContainer.classList.remove('swiper-container');
    brand.classList.remove('swiper-wrapper');
    brand.removeAttribute('id');
    brand.removeAttribute('style');
    pagination.classList.remove('swiper-pagination');
    pagination.classList.add('hide');
    for (let i = 0; i <= brandLink.length - 1; i++) {
      brandLink[i].classList.remove('swiper-slide');
      brandLink[i].removeAttribute('style');
    }
  }
}