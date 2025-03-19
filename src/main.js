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
    stopScroll.classList.remove('stop-scroll');
  }
});

function setHeroInnerHeight() {
  const heroInner = document.querySelector('.hero__inner');
  const heroInnerLeft = document.querySelector('.hero__inner-left');
  const mainWrapper = document.querySelector('.main-wrapper');

  if (!heroInner || !heroInnerLeft || !mainWrapper) return;

  const totalHeight = heroInnerLeft.offsetHeight + mainWrapper.offsetHeight + 33;
  heroInner.style.height = `${totalHeight}px`;
}

function handleResize() {
  if (window.innerWidth >= 600) {
    setHeroInnerHeight();
  } else {
    const heroInner = document.querySelector('.hero__inner');
    if (heroInner) {
      heroInner.style.height = ''; // Сбрасываем высоту, если ширина < 600px
    }
  }
}

// Инициализируем при загрузке страницы
window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);




