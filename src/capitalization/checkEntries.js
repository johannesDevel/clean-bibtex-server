
const setCapitalization = bibtexEntry => {
  const cleanedTitle = bibtexEntry.TITLE.replace(/[\s-]+/g, " ");
  let titleArray = cleanedTitle.split(/[ -]+/);
  if (titleArray[0].charAt(0) === titleArray[0].charAt(0).toUpperCase()) {
    titleArray = titleArray.filter(word => word !== titleArray[0]);
    if (titleArray.every(word => checkTitleCaseWord(word))) {
      return "titleCase";
    } else if (titleArray.every(word => checkSentenceCaseWord(word))) {
      return "sentenceCase";
    } else {
      return "caseNotFound";
    }
  } else {
    return "caseNotFound";
  }
};

const checkTitleCaseWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  const firstLetter = word[0];
  return !(
    (firstLetter === firstLetter.toLowerCase() && word.length >= 4) ||
    (firstLetter === firstLetter.toUpperCase() && word.length < 4)
  );
};

const checkSentenceCaseWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  return word.charAt(0) === word.charAt(0).toLowerCase();
};

module.exports = {
  setCapitalization
};
