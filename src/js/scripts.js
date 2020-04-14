'use strict';

const modal = document.querySelector('.modal');
const findWin = document.querySelector('.find-win');
const mix = document.querySelector('.mix');
const wrong = document.querySelector('.wrong');
const won = document.querySelector('.won');
const girl = document.querySelector('.girl');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const card3 = document.querySelector('.card3');
const btnCard1 = document.querySelector('.btn-card1');
const btnCard2 = document.querySelector('.btn-card2');
const btnCard3 = document.querySelector('.btn-card3');
const cardFaceDowns = document.querySelectorAll('.card-face-down');
const aceClub = document.querySelector('.ace-club');
const joker = document.querySelector('.joker');
const aceHeart = document.querySelector('.ace-heart');
const leftHand = document.querySelector('.left-hand');
const rightHand = document.querySelector('.right-hand');

findWin.addEventListener('click', handleFindWin);

function handleFindWin() {
  modal.classList.add('modal-hiding');
  girl.classList.add('girl-hiding');
  setTimeout(rotateCards, 500);
  setTimeout(appearMix, 3000);
  setTimeout(appearHand, 3500);
  mix.addEventListener('click', handleMix);
}

function rotateCards() {
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.add('card-face-down-rotate'),
  );
  aceClub.classList.add('ace-club-rotate');
  joker.classList.add('joker-rotate');
  aceHeart.classList.add('ace-heart-rotate');
};

function appearModal() {
  findWin.classList.add('find-win-hiding');
  modal.classList.remove('modal-hiding');
}

function appearMix() {
  appearModal();
  mix.classList.add('mix-appear');
}

function appearHand() {
  leftHand.classList.add('left-hand-appear');
  rightHand.classList.add('right-hand-appear');
}

function handleMix() {
  modal.classList.add('modal-hiding');
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.remove('card-face-down-rotate'),
  );
  aceClub.classList.remove('ace-club-rotate');
  joker.classList.remove('joker-rotate');
  aceHeart.classList.remove('ace-heart-rotate');
  wrong.classList.remove('wrong-appear');
  setTimeout(shuffleCards, 1000);
  setTimeout(() => btnCard1.addEventListener('click', handleCard1), 3000);
  setTimeout(() => btnCard2.addEventListener('click', handleCard2), 3000);
  setTimeout(() => btnCard3.addEventListener('click', handleCard3), 3000);
  mix.removeEventListener('click', handleMix);
  wrong.removeEventListener('click', handleMix);
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

let repeatRandom;
function shuffleCards() {
  let random = randomInteger(1, 3);

  while (random === repeatRandom) {
    random = randomInteger(1, 3);
  }

  let randomClassCard1Shuffle = 'card1-shuffle' + random;
  let randomClassCard2Shuffle = 'card2-shuffle' + random;
  let randomClassCard3Shuffle = 'card3-shuffle' + random;

  const classShuffle1 = card1.classList[2];
  const classShuffle2 = card2.classList[2];
  const classShuffle3 = card3.classList[2];

  let card1TranslateX = new DOMMatrix(getComputedStyle(card1).transform).m41;
  let card2TranslateX = new DOMMatrix(getComputedStyle(card2).transform).m41;
  let card3TranslateX = new DOMMatrix(getComputedStyle(card3).transform).m41;

  document.documentElement.style.setProperty(
    '--card1TranslateX',
    card1TranslateX + 'px',
  );
  document.documentElement.style.setProperty(
    '--card2TranslateX',
    card2TranslateX + 'px',
  );
  document.documentElement.style.setProperty(
    '--card3TranslateX',
    card3TranslateX + 'px',
  );

  if (!classShuffle1) {
    card1.classList.add(randomClassCard1Shuffle);
    btnCard1.classList.add(randomClassCard1Shuffle);
    card2.classList.add(randomClassCard2Shuffle);
    btnCard2.classList.add(randomClassCard2Shuffle);
    card3.classList.add(randomClassCard3Shuffle);
    btnCard3.classList.add(randomClassCard3Shuffle);
  } else {
    card1.classList.replace(classShuffle1, randomClassCard1Shuffle);
    btnCard1.classList.replace(classShuffle1, randomClassCard1Shuffle);
    card2.classList.replace(classShuffle2, randomClassCard2Shuffle);
    btnCard2.classList.replace(classShuffle2, randomClassCard2Shuffle);
    card3.classList.replace(classShuffle3, randomClassCard3Shuffle);
    btnCard3.classList.replace(classShuffle3, randomClassCard3Shuffle);
  }
  repeatRandom = random;
}

function handleCard1() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 0 && cardFaceDown.classList.add('card-face-down-rotate'),
  );
  aceClub.classList.add('ace-club-rotate');

  btnCard1.removeEventListener('click', handleCard1);
  btnCard2.removeEventListener('click', handleCard2);
  btnCard3.removeEventListener('click', handleCard3);
  setTimeout(rotateCard, 1000, 1, 2);

  setTimeout(appearAfterShuffle, 3500, wrong);
  wrong.addEventListener('click', handleMix);
}

function handleCard2() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 1 && cardFaceDown.classList.add('card-face-down-rotate'),
  );
  joker.classList.add('joker-rotate');

  btnCard1.removeEventListener('click', handleCard1);
  btnCard2.removeEventListener('click', handleCard2);
  btnCard3.removeEventListener('click', handleCard3);
  setTimeout(rotateCard, 1000, 0, 2);

  setTimeout(appearAfterShuffle, 1500, won);
}

function handleCard3() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 2 && cardFaceDown.classList.add('card-face-down-rotate'),
  );
  aceHeart.classList.add('ace-heart-rotate');

  btnCard1.removeEventListener('click', handleCard1);
  btnCard2.removeEventListener('click', handleCard2);
  btnCard3.removeEventListener('click', handleCard3);
  setTimeout(rotateCard, 1000, 0, 1);

  setTimeout(appearAfterShuffle, 3500, wrong);
  wrong.addEventListener('click', handleMix);
}

function rotateCard(firstCard, secondCard) {
  cardFaceDowns.forEach((cardFaceDown, idx) => {
    idx === firstCard && cardFaceDown.classList.add('card-face-down-rotate');
    idx === secondCard && cardFaceDown.classList.add('card-face-down-rotate');
  });
  firstCard === 0 && aceClub.classList.add('ace-club-rotate');
  firstCard === 1 && joker.classList.add('joker-rotate');
  firstCard === 2 && aceHeart.classList.add('ace-heart-rotate');
  secondCard === 0 && aceClub.classList.add('ace-club-rotate');
  secondCard === 1 && joker.classList.add('joker-rotate');
  secondCard === 2 && aceHeart.classList.add('ace-heart-rotate');
}

function appearAfterShuffle(button) {
  appearModal();
  mix.classList.remove('mix-appear');
  button.classList.add(`${button.classList}-appear`);
}
