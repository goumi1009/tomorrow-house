const productTab = document.querySelector('.product-tab');
const productTabButtonList = productTab.querySelectorAll('button');

const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;

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

const scrollToTabPanel = (e) => {
  const target = e.currentTarget;
  const tabPanelId = target.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
};

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab);
  button.addEventListener('click', scrollToTabPanel);
});

// 사전정보 : 각 tabpanel의 y축 위치
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top
const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recomendation',
];
const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`);
  return tabPanel;
});
const productTabPanelPositionMap = {};

const detectTabPanelPosition = () => {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id');
    const position = window.scrollY + panel.getBoundingClientRect().top;

    productTabPanelPositionMap[id] = position;
  });

  console.log(productTabPanelPositionMap);
};

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', detectTabPanelPosition);
