const MAP_OPTIONS = {
  center: [17.385044, 78.486671],
  zoom: 15,
  scrollWheelZoom: false,
}

const LAYER = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
});

const ICON_OPTIONS = {
  desktop: {
    iconUrl: 'img/svg/pin-filled.svg',
    iconSize: [48, 48],
  },

  tablet: {
    iconUrl: 'img/svg/pin-filled.svg',
    iconSize: [42, 42],
  },

  mobile: {
    iconUrl: 'img/svg/pin-filled.svg',
    iconSize: [28, 28],
  },
}

let map;

const initMap = () => {
  let pinOptions;
    if (window.innerWidth <= 1200) {
      if (window.innerWidth <= 768) {
        pinOptions = ICON_OPTIONS.mobile;
      } else {
        pinOptions = ICON_OPTIONS.tablet;
      }
    } else {
      pinOptions = ICON_OPTIONS.desktop;
    }

  map = new L.map('map', MAP_OPTIONS);
  map.setView([55.77846415126314, 37.62326846570395], 14);
  LAYER.addTo(map);

  let pin = L.icon(pinOptions);
  let marker = new L.Marker([55.77498793606838, 37.632662957672096], {icon: pin});
  marker.addTo(map);
};


const onWindowResize = () => {
  map.remove();
  initMap();
};

const setWindowResize = () => {
  window.addEventListener('resize', onWindowResize);
};

export {initMap, setWindowResize};
