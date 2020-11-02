const serviceContainer = document.querySelector('.service--container');
const brand = document.querySelector('.service--brand');
const slide = document.querySelector('.swiper--slide');
const pagination = document.querySelector('.pagination');
const show = document.querySelector('.button--show');
const hide = document.querySelector('.button--hide');
const brandLink = document.querySelectorAll('.brand__link');

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
console.log(brandLink);

if (screen.width > 767) {
  serviceContainer.classList.remove('swiper--container');
  brand.classList.remove('swiper-wrapper');
  brand.removeAttribute('id');
  brand.removeAttribute('style');
  pagination.classList.remove('swiper-pagination');
  pagination.classList.add('hide');
  for (let i = 0; i <= brandLink.length; i++) {
    brandLink[i].classList.remove('swiper-slide');
    brandLink[i].removeAttribute('style');
  }
} else if (screen.width <= 767) {
  serviceContainer.classList.add('swiper--container');
  brand.classList.add('swiper-wrapper');
  pagination.classList.add('swiper-pagination');
  pagination.classList.remove('hide');
  for (let i = 1; i <= brandLink.length; i++) {
    brandLink[i].classList.add('swiper-slide');
  }
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth > 767){
    serviceContainer.classList.remove('swiper--container');
    brand.classList.remove('swiper-wrapper');
    pagination.classList.remove('swiper-pagination');
    pagination.classList.add('hide');
    for (let i = 0; i <= brandLink.length; i++) {
      brandLink[i].classLink.remove('.swiper-slide');
    }
  } else if (document.documentElement.clientWidth <= 767){
    serviceContainer.classList.add('swiper--container');
    brand.classList.add('swiper-wrapper');
    pagination.classList.add('swiper-pagination');
    pagination.classList.remove('hide');
    for (let i = 1; i <= brandLink.length; i++) {
      brandLink[i].classLink.add('.swiper-slide');
    }
  }
});



show.addEventListener('click', function(){
  show.classList.add('hide');
  hide.classList.remove('hide');
  brand.classList.remove('overflow');
})

hide.addEventListener('click', function () {
  hide.classList.add('hide');
  show.classList.remove('hide');
  brand.classList.add('overflow')
})