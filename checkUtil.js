
const checkTitleCaseWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  const firstLetter = word[0];
  if (
    (firstLetter === firstLetter.toLowerCase() && word.length >= 4) ||
    (firstLetter === firstLetter.toUpperCase() && word.length < 4)
  ) {
    return false;
  }
  return true;
};

const correctWordTitleCase = word => {
  if (word === word.toUpperCase()) {
    return word;
  }
  const firstLetter = word[0];

  let correctedWord = word;
  if (firstLetter === firstLetter.toLowerCase() && word.length >= 4) {
    correctedWord = word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (firstLetter === firstLetter.toUpperCase() && word.length < 4) {
    correctedWord = word.charAt(0).toLowerCase() + word.slice(1);
  }
  return correctedWord;
};

const correctWordSetenceCase = word => {
  if (word === word.toUpperCase()) {
    return word;
  }
  const correctedWord = word.charAt(0).toLowerCase() + word.slice(1);
  return correctedWord;
};

const correctToTitleCase = title => {
  const cleanedTitle = title.replace(/[\s-]+/g, " ");
  let titleArray = cleanedTitle.split(/[ -]+/);

  const firstWord = titleArray[0];
  if (firstWord[0] !== firstWord[0].toUpperCase()) {
    firstWord[0] = firstWord[0].toUpperCase();
  }
  return titleArray.map(word => correctWordTitleCase(word));
};

const correctToSentenceCase = title => {
  const cleanedTitle = title.replace(/[\s-]+/g, " ");
  let titleArray = cleanedTitle.split(/[ -]+/);

  const firstWord = titleArray[0];
  if (firstWord[0] !== firstWord[0].toUpperCase()) {
    firstWord[0] = firstWord[0].toUpperCase();
  }
  return titleArray.map(word => correctWordSetenceCase(word));
};

module.exports = {
  checkTitleCaseWord,
  correctToTitleCase,
  correctToSentenceCase
};
