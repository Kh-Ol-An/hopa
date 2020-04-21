'use strict';

const langs = [
  {
    "lang": "en",
    "question": "Where is the joker?"
  },
  {
    "lang": "de",
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

// const language = "gm" // en gm fi es no
// const currency = "zar" // usd eur gbp zar

// const language = prompt('en     gm     fi     es     no\n\rЯзык:');
// let currency;
// if (language === 'en') {
//   currency = prompt('usd     eur     gbp     zar\n\rВалюта:');
// };

let language = window.navigator ? (window.navigator.language || window.navigator.systemLanguage || window.navigator.userLanguage) : "en";
language = language.substr(0, 2).toLowerCase();

if (language === "nn" || language === "nb") {
  language = "no";
} else if (language !== "en" && language !== "de" && language !== "fi" && language !== "es" && language !== "no") {
  language = "en";
};

let currency;
if (language === 'en') {
  currency = prompt('usd     eur     gbp     zar\n\rВалюта:');
};

// console.log("language", language)

const questionText = document.querySelector('.question__text');
const findWin = document.querySelector('.find-win_img');
const mix = document.querySelector('.mix_img');
const won = document.querySelector('.won_img');
const wrong = document.querySelector('.wrong_img');
const claims = document.querySelectorAll('.claim_img');
const again = document.querySelector('.again_img');
const rotate = document.querySelector('.rotate-device');

langs.forEach(lang => {
  if (lang.lang === language) {
    questionText.textContent = lang.question;
    findWin.setAttribute("src", `./images/${language}/find.png`);
    mix.setAttribute("src", `./images/${language}/mix.png`);
    if (language === "en") {
      won.setAttribute("src", `./images/${language}/${currency}/won.png`);
      wrong.setAttribute("src", `./images/${language}/${currency}/wrong.png`);
    } else {
      won.setAttribute("src", `./images/${language}/won.png`);
      wrong.setAttribute("src", `./images/${language}/wrong.png`);
    }
    claims.forEach(claim => claim.setAttribute("src", `./images/${language}/claim.png`))
    again.setAttribute("src", `./images/${language}/again.png`);
    rotate.setAttribute("src", `./images/${language}/rotate.png`);
  }
})
