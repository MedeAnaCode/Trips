const sliderAdvantages = document.querySelector('.advantages__slider');
const buttonNext = document.querySelector('.advantages__button-next');
const buttonPrev = document.querySelector('.advantages__button-prev');
let swiper;

const initAdvantagesSwiper = () => {
  if (sliderAdvantages && window.innerWidth > 1199) {
    swiper = new Swiper(sliderAdvantages, {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
        disabledClass: 'slider-buttons__button--disabled',
      },
      breakpoints: {
        1441: {
          slidesPerView: 'auto',
        },
      },
    });
  }
};

const destroySwiper = () => {
  if (window.innerWidth <= 1199 && swiper && swiper.initialized) {
    swiper.destroy();
    document.querySelector('.advantages__slider').style.display = 'block';
  } else if (!swiper) {
    initAdvantagesSwiper();
  }
};

const initWindowResize = () => {
  window.addEventListener('resize', () => destroySwiper());
};

export {initAdvantagesSwiper, initWindowResize};
