'use strict';

const modal = document.querySelector('.modal');
const findWin = document.querySelector('.find-win');
const mix = document.querySelector('.mix');
const wrong = document.querySelector('.wrong');
const won = document.querySelector('.won');
const wrongClaim = document.querySelector('.wrong-claim');
const wonClaim = document.querySelector('.won-claim');
const again = document.querySelector('.again');
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

const randomInteger = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

let repeatRandom;
const shuffleCards = () => {
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
};

const rotateCard = (firstCard, secondCard) => {
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
};

const appearModal = () => {
  findWin.style.width = "0";
  modal.classList.remove('modal-hiding');
};

const appearAfterShuffle = (el) => {
  appearModal();
  girl.style.opacity = "1";
  mix.style.width = "0";
  el === won ? wonClaim.style.width = "23em" : wrongClaim.style.width = "29.2em";
  el === wrong && (again.style.width = "29.2em");
  el.classList.add(`${el.classList}-appear`);
};

const handleCard1 = () => {
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
  again.addEventListener('click', handleMix);
};

const handleCard2 = () => {
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
};

const handleCard3 = () => {
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
  again.addEventListener('click', handleMix);
};

const handleMix = () => {
  modal.classList.add('modal-hiding');
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.remove('card-face-down-rotate'),
  );
  aceClub.classList.remove('ace-club-rotate');
  joker.classList.remove('joker-rotate');
  aceHeart.classList.remove('ace-heart-rotate');
  wrong.classList.remove('wrong-appear');
  again.style.width = "0";
  wonClaim.style.width = "0";
  wrongClaim.style.width = "0";
  setTimeout(shuffleCards, 1000);
  setTimeout(() => btnCard1.addEventListener('click', handleCard1), 3000);
  setTimeout(() => btnCard2.addEventListener('click', handleCard2), 3000);
  setTimeout(() => btnCard3.addEventListener('click', handleCard3), 3000);
  mix.removeEventListener('click', handleMix);
  again.removeEventListener('click', handleMix);
};

const rotateCards = () => {
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.add('card-face-down-rotate'),
  );
  aceClub.classList.add('ace-club-rotate');
  joker.classList.add('joker-rotate');
  aceHeart.classList.add('ace-heart-rotate');
};

const appearMix = () => {
  appearModal();
  mix.style.width = "42.9em";
};

const appearHand = () => {
  leftHand.style.height = "62em";
  rightHand.style.height = "54.1em";
};

const handleFindWin = () => {
  modal.classList.add('modal-hiding');
  girl.style.opacity = "0";
  setTimeout(rotateCards, 500);
  setTimeout(appearMix, 3000);
  setTimeout(appearHand, 3500);
  mix.addEventListener('click', handleMix);
};
findWin.addEventListener('click', handleFindWin);
