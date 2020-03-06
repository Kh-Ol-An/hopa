"use strict";

const question = document.querySelector(".question");
const modal = document.querySelector(".modal");
const findWin = document.querySelector(".find-win");
const mix = document.querySelector(".mix");
const girl = document.querySelector(".girl");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const cardFaceDowns = document.querySelectorAll(".card-face-down");
const aceClub = document.querySelector(".ace-club");
const joker = document.querySelector(".joker");
const aceHeart = document.querySelector(".ace-heart");
const leftHand = document.querySelector(".left-hand");
const rightHand = document.querySelector(".right-hand");

findWin.addEventListener("click", handleFindWin);
function handleFindWin() {
  modal.classList.add("modal-hiding");
  girl.classList.add("girl-hiding-down");
  setTimeout(rotateCards, 500);
  setTimeout(appearMix, 1000);
  setTimeout(appearHand, 1500);
}

function rotateCards() {
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.add("card-face-down-rotate")
  );
  aceClub.classList.add("ace-club-rotate");
  joker.classList.add("joker-rotate");
  aceHeart.classList.add("ace-heart-rotate");
}

function appearMix() {
  modal.classList.remove("modal-hiding");
  findWin.classList.add("find-win-hiding");
  mix.classList.add("mix-appear");
}

function appearHand() {
  leftHand.classList.add("left-hand-appear");
  rightHand.classList.add("right-hand-appear");
}

mix.addEventListener("click", handleMix);
function handleMix() {
  modal.classList.add("modal-hiding");
  cardFaceDowns.forEach(cardFaceDown =>
    cardFaceDown.classList.remove("card-face-down-rotate")
  );
  aceClub.classList.remove("ace-club-rotate");
  joker.classList.remove("joker-rotate");
  aceHeart.classList.remove("ace-heart-rotate");
  question.classList.add("question-appear");
  setTimeout(shuffleCards, 1000);
  card1.addEventListener("click", handleCard1);
  card2.addEventListener("click", handleCard2);
  card3.addEventListener("click", handleCard3);
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

  let randomClassCard1Shuffle = "card1-shuffle" + random;
  let randomClassCard2Shuffle = "card2-shuffle" + random;
  let randomClassCard3Shuffle = "card3-shuffle" + random;

  const classShuffle1 = card1.classList[2];
  const classShuffle2 = card2.classList[2];
  const classShuffle3 = card3.classList[2];

  let card1TranslateX = new DOMMatrix(getComputedStyle(card1).transform).m41;
  let card2TranslateX = new DOMMatrix(getComputedStyle(card2).transform).m41;
  let card3TranslateX = new DOMMatrix(getComputedStyle(card3).transform).m41;

  document.documentElement.style.setProperty(
    "--card1TranslateX",
    card1TranslateX + "px"
  );
  document.documentElement.style.setProperty(
    "--card2TranslateX",
    card2TranslateX + "px"
  );
  document.documentElement.style.setProperty(
    "--card3TranslateX",
    card3TranslateX + "px"
  );

  if (!classShuffle1) {
    card1.classList.add(randomClassCard1Shuffle);
    card2.classList.add(randomClassCard2Shuffle);
    card3.classList.add(randomClassCard3Shuffle);
  } else {
    card1.classList.replace(classShuffle1, randomClassCard1Shuffle);
    card2.classList.replace(classShuffle2, randomClassCard2Shuffle);
    card3.classList.replace(classShuffle3, randomClassCard3Shuffle);
  }
  repeatRandom = random;
}

function handleCard1() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 0 && cardFaceDown.classList.add("card-face-down-rotate")
  );
  aceClub.classList.add("ace-club-rotate");

  card1.removeEventListener("click", handleCard1);
  card2.removeEventListener("click", handleCard2);
  card3.removeEventListener("click", handleCard3);
  setTimeout(rotateCard23, 1000);

  // ==========

  setTimeout(appearMix, 1500);
}

function rotateCard23() {
  cardFaceDowns.forEach((cardFaceDown, idx) => {
    idx === 1 && cardFaceDown.classList.add("card-face-down-rotate");
    idx === 2 && cardFaceDown.classList.add("card-face-down-rotate");
  });
  joker.classList.add("joker-rotate");
  aceHeart.classList.add("ace-heart-rotate");
}

function handleCard2() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 1 && cardFaceDown.classList.add("card-face-down-rotate")
  );
  joker.classList.add("joker-rotate");

  card1.removeEventListener("click", handleCard1);
  card2.removeEventListener("click", handleCard2);
  card3.removeEventListener("click", handleCard3);
  setTimeout(rotateCard13, 1000);

  // ==========

  setTimeout(appearMix, 1500);
}

function rotateCard13() {
  cardFaceDowns.forEach((cardFaceDown, idx) => {
    idx === 0 && cardFaceDown.classList.add("card-face-down-rotate");
    idx === 2 && cardFaceDown.classList.add("card-face-down-rotate");
  });
  aceClub.classList.add("ace-club-rotate");
  aceHeart.classList.add("ace-heart-rotate");
}

function handleCard3() {
  cardFaceDowns.forEach(
    (cardFaceDown, idx) =>
      idx === 2 && cardFaceDown.classList.add("card-face-down-rotate")
  );
  aceHeart.classList.add("ace-heart-rotate");

  card1.removeEventListener("click", handleCard1);
  card2.removeEventListener("click", handleCard2);
  card3.removeEventListener("click", handleCard3);
  setTimeout(rotateCard12, 1000);

  // ==========

  setTimeout(appearMix, 1500);
}

function rotateCard12() {
  cardFaceDowns.forEach((cardFaceDown, idx) => {
    idx === 0 && cardFaceDown.classList.add("card-face-down-rotate");
    idx === 1 && cardFaceDown.classList.add("card-face-down-rotate");
  });
  aceClub.classList.add("ace-club-rotate");
  joker.classList.add("joker-rotate");
}

// 18 43 68
// 68 18 43
// 43 68 18
