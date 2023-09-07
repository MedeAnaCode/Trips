const audioPlace = document.querySelector('[data-id="audio-place"]');
const audioButton = document.querySelector('[data-id="audio-button"]');

const onAudioButtonClick = () => {
  audioPlace.innerHTML = '<iframe frameborder="0" style="border:none;" width="340" height="220" src="https://music.yandex.ru/iframe/#album/25474374">Слушайте <a href=\'https://music.yandex.ru/album/25474374\'>Про код</a> на Яндекс Музыке</iframe>';
};

const playAudio = () => audioButton.addEventListener('click', onAudioButtonClick);

export {playAudio};
