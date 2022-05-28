const orderCta = document.querySelector('.order-cta');
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children;

const orderModal = document.querySelector('.order-form-modal');
const orderModalOverlay = document.querySelector('.overlay');

const openOrderModal = () => {
  orderModal.classList.add('is-open');
  orderModalOverlay.classList.add('is-active');
};

const closeOrderModal = () => {
  orderModal.classList.remove('is-open');
  orderModalOverlay.classList.remove('is-active');
};

const toggleOrderCtaBookmark = (e) => {
  const target = e.currentTarget;
  const [icon, countSpan] = target.children;
  const count = Number(countSpan.innerHTML.replaceAll(',', ''));
  const isActive = target.classList.contains('is-active');

  let newCount = count;

  if (isActive) {
    icon.setAttribute('class', 'ic-bookmark');
    newCount -= 1;
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled');
    newCount += 1;
  }

  countSpan.innerHTML = newCount.toLocaleString();
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`);
  target.classList.toggle('is-active');
};

orderCtaBuyButton.addEventListener('click', openOrderModal);
orderModalOverlay.addEventListener('click', closeOrderModal);

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark);
