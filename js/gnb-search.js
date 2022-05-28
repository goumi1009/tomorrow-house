const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

const closeGnbSearchHistoryOnclickingOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistoryOnclickingOutside);
  }
};

const openGnbSearchHistory = () => {
  if (!gnbSearchHistoryList.children.length) {
    return;
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistoryOnclickingOutside);
  }

  gnbSearchHistory.classList.add('is-active');
};

const deleteAllSearchHistoryItems = () => {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);
