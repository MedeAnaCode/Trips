const initGallerySwiper = () => {
  let swiper6 = new Swiper('.gallery__slider', {
    slidesPerView: 'auto',
    navigation: {
      nextEl: '.gallery__button-next',
      prevEl: '.gallery__button-prev',
      disabledClass: 'slider-buttons__button--disabled',
    },
    breakpoints: {
      320: {
        spaceBetween: 3,
      },
      768: {
        spaceBetween: 5,
      },
    },
  });
};

export {initGallerySwiper};
