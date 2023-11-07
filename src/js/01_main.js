// import Swiper from "swiper";

document.addEventListener('DOMContentLoaded', () => {

   const swiper = new Swiper('.swiper', {
       slidesPerView: 2,
       loop: true,
       keyboard: true,
       navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
       }
   });
});