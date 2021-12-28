const words = require("./words.json");

const generatePassPhrase = (length, startsWith) => {
  if (!length) {
    length = 5;
  }
  let wordsToSelect = words;
  let passPhrase = [];
  if (startsWith) {
    startsWith = startsWith.toLowerCase();
    wordsToSelect = wordsToSelect.filter((word) => word.startsWith(startsWith));
  }
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * wordsToSelect.length);
    const word = wordsToSelect[randomNum];
    passPhrase = [...passPhrase, word];
  }
  return passPhrase;
};

module.exports = { generatePassPhrase };
