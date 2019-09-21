
const ignoreWords = [
  "a",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "en",
  "for",
  "if",
  "in",
  "nor",
  "of",
  "on",
  "or",
  "per",
  "the",
  "to",
  "v.",
  "vs.",
  "via"
];

const numeric = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ":",
  ",",
  "-"
];

const checkTitleCase = title => {
  const cleanedTitle = title.replace(/[\s-]+/g, " ");
  const titleArray = cleanedTitle.split(/[ -]+/);
  const filteredArray = titleArray.filter(word => !ignoreWords.includes(word));
  for (titleWord of filteredArray) {
    if (!checkWord(titleWord)) {
      return title;
    }
  }
  return null;
};

const checkWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  for (let i = 0; i < word.length; i++) {
    if (word[0] !== word[0].toUpperCase()) {
      return false;
    }
    if (i > 0) {
      if (word[i] === word[i].toUpperCase() && !numeric.includes(word[i])) {
        return false;
      }
    }
  }
  return true;
};

module.exports = {
  checkTitleCase,
  checkWord
};
