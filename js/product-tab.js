const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

let currentActiveTab = productTab.querySelector('.is-active');

const toggleActiveTab = (e) => {
  const target = e.currentTarget;
  const tabItem = target.parentNode;

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;
  }
};

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
});
