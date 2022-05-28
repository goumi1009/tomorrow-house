const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

const deleteButtonList =
  gnbSearchHistoryList.querySelectorAll('.delete-button');

const closeGnbSearchHistory = () => {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistoryOnclickingOutside);
};

const closeGnbSearchHistoryOnclickingOutside = (e) => {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistory();
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
  closeGnbSearchHistory();
};

const deleteSearchHistoryItem = (e) => {
  e.stopPropagation();
  const itemToDelete = e.currentTarget.parentNode;
  gnbSearchHistoryList.removeChild(itemToDelete);

  if (!gnbSearchHistoryList.children.length) {
    closeGnbSearchHistory();
  }
};

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllSearchHistoryItems);
deleteButtonList.forEach((deleteButton) => {
  deleteButton.addEventListener('click', deleteSearchHistoryItem);
});
