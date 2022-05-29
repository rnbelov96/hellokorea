export {};

const descSwiper = new Swiper('.desc__slider', {
  slidesPerView: 1,
  spaceBetween: 25,
  enabled: true,
  pagination: {
    el: '.desc__slider-pagination',
  },
  breakpoints: {
    650: {
      slidesPerView: 3,
      enabled: false,
      spaceBetween: 0,
    },
  },
});

const swiper = new Swiper('.shops__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.shops__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.shops__slider-btn_next',
    prevEl: '.shops__slider-btn_prev',
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

const reviewsSwiper = new Swiper('.reviews__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.reviews__slider-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.reviews__slider-btn_next',
    prevEl: '.reviews__slider-btn_prev',
  },
});

// const swiper = new Swiper('.slidersection__slider', {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   loop: true,
//   centeredSlides: true,
//   pagination: {
//     el: '.slidersection__slider-pagination',
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.slidersection__slider-btn_next',
//     prevEl: '.slidersection__slider-btn_prev',
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
