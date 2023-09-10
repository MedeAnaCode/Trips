const initMap = () => {
  let map = L.map('map', {
    scrollWheelZoom: false,
  }).setView([55.77846415126314, 37.62326846570395], 14);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  let pinSize = 48;

  function resizePin() {
    if (window.innerWidth <= 1200) {
      if (window.innerWidth <= 768) {
        pinSize = 28;
      } else {
        pinSize = 42;
      }
    }

    let pin = L.icon({
      iconUrl: 'img/svg/pin-filled.svg',
      iconSize: [pinSize, pinSize],
      className: 'contacts__map-icon',
    });

    L.marker([55.77498793606838, 37.632662957672096], {icon: pin}).addTo(map);
  }

  resizePin();
  window.addEventListener('resize', () => resizePin());
};

export {initMap};

