import './style.css'
import './scss/main.scss'

const burger = document.querySelector('.burger-button');
const nav = document.querySelector('.header__nav');
const stopScroll = document.querySelector('body');

burger.addEventListener('click', () => {
  if (burger.classList.contains('active')) {
      burger.classList.remove('active');
      burger.classList.add('active-reverse');
      
  } else {
      burger.classList.remove('active-reverse');
      burger.classList.add('active'); 
  }

  nav.classList.toggle('active');
  stopScroll.classList.toggle('stop-scroll');
});

document.addEventListener('click', (event) => {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnBurger = burger.contains(event.target);

  if (!isClickInsideNav && !isClickOnBurger) {
    nav.classList.remove('active');
    burger.classList.remove('active', 'active-reverse');
  }
});
