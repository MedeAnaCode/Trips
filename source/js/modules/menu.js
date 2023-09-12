const screen = document.querySelector('[data-id="screen-shadow"]');
const headerMenu = document.querySelector('[data-id="header-menu"]');
const toggleButton = document.querySelector('[data-id="toggle-menu"]');
const openClass = 'is-opened';

const onDocumentKeydown = (evt) => evt.key === 'Escape' ? closeMenu() : null;

const onLinkClick = (evt) => evt.target.tagName === 'A' ? closeMenu() : null;

const onScreenClick = () => closeMenu();

function openMenu() {
  screen.classList.add(openClass);
  screen.addEventListener('click', onScreenClick);
  headerMenu.classList.add(openClass);
  headerMenu.addEventListener('click', onLinkClick);
  toggleButton.classList.add(openClass);
  document.addEventListener('keydown', onDocumentKeydown);
  window.scrollLock.disableScrolling();
}

function closeMenu() {
  screen.classList.remove(openClass);
  screen.addEventListener('click', onScreenClick);
  headerMenu.classList.remove(openClass);
  headerMenu.removeEventListener('click', onLinkClick);
  toggleButton.classList.remove(openClass);
  document.removeEventListener('keydown', onDocumentKeydown);
  window.scrollLock.enableScrolling();
}

const initMenu = () => {
  toggleButton.addEventListener('click', () => toggleButton.classList.contains(openClass) ? closeMenu() : openMenu());
};

export {initMenu};
