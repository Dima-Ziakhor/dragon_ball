function cardTurnOver(selector) {
  const cards = document.querySelectorAll(selector);
  let prevCard = null;

  cards.forEach((card) => card.addEventListener('click', () => {
    if (prevCard && prevCard !== card) {
      prevCard.setAttribute('data-reverse', 'false');
    }

    if (card.getAttribute('data-reverse') === 'false') {
      card.setAttribute('data-reverse', 'true');
      prevCard = card;
    } else {
      card.setAttribute('data-reverse', 'false');
    }
  }));
}

cardTurnOver('.card');
