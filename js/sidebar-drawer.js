const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
);

const toggleDrawerMenu = (e) => {
  const drawerMenu = e.currentTarget.parentNode;
  drawerMenu.classList.toggle('is-open');
};

drawerMenuButtonList.forEach((toggleButton) => {
  toggleButton.addEventListener('click', toggleDrawerMenu);
});
