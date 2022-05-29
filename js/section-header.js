const sectionHeaderIconButton = document.querySelector(
  '.product-shipment .product-section-header.sm-only .icon-button'
);

const showFullSection = (e) => {
  const section = e.currentTarget.parentNode.parentNode;
  section.classList.add('is-open');
};

sectionHeaderIconButton.addEventListener('click', showFullSection);
