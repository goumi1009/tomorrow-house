const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

const closeGnbSearchHistoryOnclickingOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnclickingOutside);
  }
};
const openGnbSearchHistory = () => {
  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnclickingOutside);
  }
  gnbSearchHistory.classList.add('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
