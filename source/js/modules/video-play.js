const videoPlace = document.querySelector('[data-id="video-place"]');
const videoButton = document.querySelector('[data-id="video-button"]');

const onVideoButtonClick = () => {
  videoPlace.innerHTML = '<iframe width="482" height="317" src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" title="YouTube video player." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
};

const playVideo = () => videoButton.addEventListener('click', onVideoButtonClick);

export {playVideo};
