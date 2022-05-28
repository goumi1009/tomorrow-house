const myMenu = document.querySelector('.my-menu');
const myMenuButton = myMenu.querySelector('.my-menu-button');

const closeMyMenuOnclickingOutside = (e) => {
  console.log('click!!');
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closeMyMenuOnclickingOutside);
  }
};

const toggleMyMenu = () => {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnclickingOutside);
  }

  myMenu.classList.toggle('is-active');
};

myMenuButton.addEventListener('click', toggleMyMenu);
