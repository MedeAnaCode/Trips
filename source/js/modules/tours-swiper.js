function initToursSwiper() {
  let swiper2 = new Swiper('.tours__slider', {
    loop: false,
    navigation: {
      nextEl: '.tours__button-next',
      prevEl: '.tours__button-prev',
      disabledClass: 'slider-buttons__button--disabled',
    },
    mousewheel: false,
    keyboard: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

export {initToursSwiper};
