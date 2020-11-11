"use strict";
import '../scss/style.scss';
// import '../node_modules/swiper/dist/css/swiper.css';
import {
  Swiper,
  Navigation,
  Pagination,
  Scrollbar
} from 'swiper';
Swiper.use([Pagination]);

const show = document.querySelectorAll('.button--show');
const hide = document.querySelectorAll('.button--hide');
const buttonReadMore = document.querySelector('.button--readmore');
const text = document.querySelector('.about__wrap');
const brandLink = document.querySelectorAll('.brand__link');
const brand = document.querySelector('.brand--block');
const buttonService = document.querySelector('.button--service');
const buttonBrand = document.querySelector('.button--brand');

const serviceContainer = document.querySelector('.service--container');
const slide = document.querySelector('.swiper--slide');
const pagination = document.querySelector('.pagination');

console.log(show.length);
console.log(hide.length);

for(let i = 0; i < show.length - 1; i++){
  show[i].addEventListener('click', function (evn) {
    show[i].classList.add('hide');
    hide[i].classList.remove('hide');
    if (evn.target === buttonReadMore) {
      text.classList.add('height--overflow');
      buttonReadMore.classList.add('button--overflow');
    }
    if (evn.target === buttonBrand) {
      brand.classList.remove('overflow');
    }
    if (evn.target === buttonService) {
      console.log(evn.target.classList);
    }
  })
}


for (let i = 0; i < hide.length - 1; i++) {
  hide[i].addEventListener('click', function (evn) {
    hide[i].classList.add('hide');
    show[i].classList.remove('hide');
    if (evn.target === buttonReadMore) {
      text.classList.remove('height--overflow');
      buttonReadMore.classList.remove('button--overflow');
    }
    if (evn.target === buttonBrand) {
      console.log(`${evn.target} 1`);
      brand.classList.add('overflow');
    }
    if (evn.target === buttonService) {
      console.log(`${evn.target} 3`);
    }
  })
}

if (serviceContainer) {
  if (screen.width > 767) {
    serviceContainer.classList.remove('swiper-container');
    brand.classList.remove('swiper-wrapper');
    brand.removeAttribute('id');
    brand.removeAttribute('style');
    pagination.classList.remove('swiper-pagination');
    pagination.classList.add('hide');
    for (let i = 0; i <= brandLink.length - 1; i++) {
      brandLink[i].classList.remove('swiper-slide-active');
      brandLink[i].classList.remove('swiper-slide');
      brandLink[i].removeAttribute('style');
    }

  }
  const swiper = new Swiper('.swiper-container', {
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
  window.addEventListener(`resize`, event => {
    if (screen.width > 767) {
      serviceContainer.classList.remove('swiper-container');
      brand.classList.remove('swiper-wrapper');
      brand.removeAttribute('id');
      brand.removeAttribute('style');
      pagination.classList.remove('swiper-pagination');
      pagination.classList.add('hide');
      for (let i = 0; i <= brandLink.length - 1; i++) {
        brandLink[i].classList.remove('swiper-slide-active');
        brandLink[i].classList.remove('swiper-slide');
        brandLink[i].removeAttribute('style');
      }

    } else {
      location.reload();
    }
  }, false);
}