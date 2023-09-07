const wrapper = document.querySelector('[data-id="wrapper"]');
const headerMenu = document.querySelector('[data-id="header-menu"]');
const toggleButton = document.querySelector('[data-id="toggle-menu"]');
const screen = document.createElement('div');
const openClass = 'is-opened';

const createScreen = () => {
  screen.style = 'position: fixed;\n' +
    '        z-index: 2;\n' +
    '        background-color: #000000;\n' +
    '        opacity: 0.5;\n' +
    '        inset: 0;';
  wrapper.append(screen);
  screen.addEventListener('click', onScreenClick);
};

const removeScreen = () => {
  screen.removeEventListener('click', onScreenClick);
  screen.remove();
};

const onDocumentKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;

const onLinkClick = (evt) => evt.target.tagName === 'A'? closeMenu() : null;

const onScreenClick = () => closeMenu();

function openMenu() {
  headerMenu.classList.add(openClass);
  headerMenu.addEventListener('click', onLinkClick)
  toggleButton.classList.add(openClass);
  createScreen();
  document.addEventListener('keydown', onDocumentKeydown);
  window.scrollLock.disableScrolling();
}

function closeMenu() {
  headerMenu.classList.remove(openClass);
  headerMenu.removeEventListener('click', onLinkClick)
  toggleButton.classList.remove(openClass);
  removeScreen();
  document.removeEventListener('keydown', onDocumentKeydown);
  window.scrollLock.enableScrolling();
}

const initMenu = () => {
  toggleButton.addEventListener('click', () => toggleButton.classList.contains(openClass) ? closeMenu() : openMenu());
};

export {initMenu};
