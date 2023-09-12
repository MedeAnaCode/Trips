const initHeroSwiper = () => {
  new Swiper('.hero-block__slider', {
    loop: true,
    pagination: {
      el: '.hero-block__pagination',
      type: 'bullets',
      clickable: true,
      bulletActiveClass: 'hero-block__pagination-bullet--active',
      bulletClass: 'hero-block__pagination-bullet',
    },
    mousewheel: false,
    keyboard: true,

    slidesPerView: 1,
    longSwipes: true,
    longSwipesMs: 300,
  });
};

export {initHeroSwiper};
