const brand = document.querySelector('.service--brand');
const show = document.querySelector('.button--show');
const hide = document.querySelector('.button--hide');

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