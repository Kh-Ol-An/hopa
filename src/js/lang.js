'use strict';

const langs = [
  {
    "lang": "en",
    "question": "Where is the joker?"
  },
  {
    "lang": "gm",
    "question": "Wo ist der Joker?"
  },
  {
    "lang": "fi",
    "question": "Missä on jokeri?"
  },
  {
    "lang": "es",
    "question": "¿Dónde está el Joker?"
  },
  {
    "lang": "no",
    "question": "Hvor er jokeren?"
  }
];

const language = "en" // en gm fi es no
const currency = "usd" // en gm fi es no

const questionText = document.querySelector('.question__text');
const findWin = document.querySelector('.find-win_img');
const mix = document.querySelector('.mix_img');
const wrong = document.querySelector('.wrong_img');
const won = document.querySelector('.won_img');

langs.forEach(lang => {
  if (lang.lang === language) {
    questionText.textContent = lang.question;
    findWin.setAttribute("src", `./images/${language}/find.png`);
    mix.setAttribute("src", `./images/${language}/mix.png`);
    wrong.setAttribute("src", `./images/${language}/${currency}/wrong.png`);
    won.setAttribute("src", `./images/${language}/${currency}/won.png`);
  }
})


