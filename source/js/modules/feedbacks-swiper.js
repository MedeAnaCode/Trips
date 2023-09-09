const initFeedbacksSwiper = () => {
  let swiper4 = new Swiper('.feedbacks__slider', {
    loop: false,
    navigation: {
      nextEl: '.feedbacks__button-next',
      prevEl: '.feedbacks__button-prev',
      disabledClass: 'slider-buttons__button--disabled',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        initialSlide: 0,
      },
      1200: {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
};

export {initFeedbacksSwiper};
