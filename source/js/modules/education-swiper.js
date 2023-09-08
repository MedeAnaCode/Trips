function initEducationSwiper() {
  let swiper3 = new Swiper('.education__slider', {
    loop: false,
    navigation: {
      prevEl: '.education__button-prev',
      nextEl: '.education__button-next',
      disabledClass: 'slider-buttons__button--disabled',
    },
    mousewheel: false,
    keyboard: true,

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

export {initEducationSwiper};
