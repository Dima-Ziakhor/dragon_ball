const animateItems = document.querySelectorAll('.animated');

function onScroll() {
  const offset = (el) => {
    const rect = el.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  };

  animateItems.forEach((item) => {
    const animateItemHeight = item.offsetHeight;
    const animateOffset = offset(item).top;
    const animateStart = 10;

    let animateItemPoint = window.innerHeight - animateItemHeight / animateStart;

    if (animateItemHeight > window.innerHeight) {
      animateItemPoint = window.innerHeight - window.innerHeight / animateStart;
    }

    if ((window.scrollY > animateOffset - animateItemPoint)
      && window.scrollY < animateOffset + animateItemHeight) {
      item.classList.add('animated--active');
    } else if (!item.classList.contains('animated--no-hide')) {
      item.classList.remove('animated--active');
    }
  });
}

if (animateItems.length) {
  window.addEventListener('scroll', onScroll);
}
