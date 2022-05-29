const reviewLikeButtonList = document.querySelectorAll(
  '.review-card-footer button'
);

const HELPFUL = '도움됨';
const NOT_HELPFUL = '도움이 돼요';

const toggleReviewLikebutton = (e) => {
  const target = e.currentTarget;
  const isLiked = target.classList.contains('btn-primary');
  const textElement = target.nextElementSibling;
  const reviewCardFooter = target.parentNode;

  if (isLiked) {
    target.innerHTML = NOT_HELPFUL;
  } else {
    target.innerHTML = HELPFUL;

    const checkIcon = document.createElement('i');
    checkIcon.classList.add('ic-check');
    checkIcon.setAttribute('aria-hidden', true);
    target.prepend(checkIcon);
  }

  if (textElement) {
    const countSpan = textElement.querySelector('span');
    const count = Number(countSpan.innerHTML.replaceAll(',', ''));

    let newCount = count;
    if (isLiked) {
      newCount -= 1;
      if (!newCount) {
        reviewCardFooter.removeChild(textElement);
      } else {
        countSpan.innerHTML = newCount.toLocaleString();
      }
    } else {
      newCount += 1;
      countSpan.innerHTML = newCount.toLocaleString();
    }
  } else {
    if (!isLiked) {
      const newTextElement = document.createElement('p');
      newTextElement.innerHTML = `
    <strong><span>1</span>명</strong>에게 도움이 되었습니다.
    `;
      reviewCardFooter.appendChild(newTextElement);
    }
  }

  target.classList.toggle('btn-outlined');
  target.classList.toggle('btn-primary');
};

reviewLikeButtonList.forEach((reviewLikeButton) => {
  reviewLikeButton.addEventListener('click', toggleReviewLikebutton);
});
