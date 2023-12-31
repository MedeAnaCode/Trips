import {iosVhFix} from './utils/ios-vh-fix.js';
import {Form} from './modules/form-validate/form.js';
import {initHeroSwiper} from './modules/hero-swiper.js';
import {initToursSwiper} from './modules/tours-swiper.js';
import {initEducationSwiper} from './modules/education-swiper.js';
import {initFeedbacksSwiper} from './modules/feedbacks-swiper.js';
import {initAdvantagesSwiper, initWindowResize} from './modules/advantages-swiper.js';
import {initGallerySwiper} from './modules/gallery-swiper.js';
import {initMenu} from './modules/menu.js';
import {playVideo} from './modules/video-play.js';
import {playAudio} from './modules/audio-play.js';
import {initMap, setWindowResize} from './modules/map.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  initMenu();
  playVideo();
  playAudio();
  initHeroSwiper();
  initToursSwiper();
  initEducationSwiper();
  initFeedbacksSwiper();
  initAdvantagesSwiper();
  initWindowResize();
  initGallerySwiper();
  initMap();
  setWindowResize();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
