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

const show = document.querySelectorAll('.button--show'),
      hide = document.querySelectorAll('.button--hide'),
      buttonReadMore = document.querySelectorAll('.button--readmore'),
      text = document.querySelector('.about__wrap'),
      brandLink = document.querySelectorAll('.brand__link'),
      brand = document.querySelector('.brand--block'),
      service = document.querySelector('.service--block'),
      buttonService = document.querySelectorAll('.button--service'),
      buttonBrand = document.querySelectorAll('.button--brand'),
      serviceContainer = document.querySelector('.service--container'),
      brandContainer = document.querySelector('.brand--container'),
      slide = document.querySelector('.swiper--slide'),
      pagination = document.querySelector('.pagination');



for(let i = 0; i < show.length - 1; i++){
  show[i].addEventListener('click', function (evn) {
    show[i].classList.add('hide');
    hide[i].classList.remove('hide');
    if (evn.target === buttonReadMore[0]) {
      text.classList.add('height--overflow');
      buttonReadMore[0].classList.add('button--overflow');
    }
    if (evn.target === buttonBrand[0]) {
      brand.classList.remove('overflow');
    }
    if (evn.target === buttonService[0]) {
      console.log(0);
      service.classList.remove('overflow');
    }
  })
}


for (let i = 0; i < hide.length - 1; i++) {
  hide[i].addEventListener('click', function (evn) {
    hide[i].classList.add('hide');
    show[i].classList.remove('hide');
    if (evn.target === buttonReadMore[1]) {
      text.classList.remove('height--overflow');
      buttonReadMore[1].classList.remove('button--overflow');
    }
    if (evn.target === buttonBrand[1]) {
      brand.classList.add('overflow');
    }
    if (evn.target === buttonService[1]) {
      console.log(1);
      service.classList.add('overflow');
    }
  })
}

if (serviceContainer) {
  if (screen.width > 767) {
    serviceContainer.classList.remove('swiper-container');
    brandContainer.classList.remove('swiper-container');
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