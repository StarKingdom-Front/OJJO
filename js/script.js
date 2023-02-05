// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  //burger
const menu = document.querySelector('.menu__body');
const burger = document.querySelector('.burger');
const itemMenu = document.querySelectorAll('.menu__link');

const body = document.body;

if(menu && burger) {
  burger.addEventListener('click', () => {
    menu.classList.toggle('active__menu');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

itemMenu.forEach((e) => {
  e.addEventListener('click', () => {
    if(burger.classList.contains('active')) {
      menu.classList.remove('active__menu');
      burger.classList.remove('active');
      body.classList.remove('lock');
    }
  });
});