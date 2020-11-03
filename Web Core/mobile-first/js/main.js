const show = document.querySelector('.button--show');
const hide = document.querySelector('.button--hide');
const buttonAbout = document.querySelector('.button--about');
const text = document.querySelector('.about__wrap');

show.addEventListener('click', function () {
  show.classList.add('hide');
  hide.classList.remove('hide');
  text.classList.add('height--overflow');
  buttonAbout.classList.add('button--overflow');
})

hide.addEventListener('click', function () {
  hide.classList.add('hide');
  show.classList.remove('hide');
  text.classList.remove('height--overflow');
  buttonAbout.classList.remove('button--overflow');
})