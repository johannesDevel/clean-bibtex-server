const parse = require("bibtex-parser");

const parseBibTex = bibtex =>
  Object.values(parse(bibtex)).map((entry, index) => {
    entry["id"] = index;
    return entry;
  });

const findCategories = bibtexEntries => {
  const titleCase = [];
  const sentenceCase = [];
  const caseNotFound = [];
  bibtexEntries.forEach(bibtexEntry => {
    const cleanedTitle = bibtexEntry.TITLE.replace(/[\s-]+/g, " ");
    let titleArray = cleanedTitle.split(/[ -]+/);
    if (titleArray[0].charAt(0) === titleArray[0].charAt(0).toUpperCase()) {
      titleArray = titleArray.filter(word => word !== titleArray[0]);
      if (titleArray.every(word => checkTitleCaseWord(word))) {
        titleCase.push(bibtexEntry.id);
      } else if (titleArray.every(word => checkSentenceCaseWord(word))) {
        sentenceCase.push(bibtexEntry.id);
      } else {
        caseNotFound.push(bibtexEntry.id);
      }
    } else {
      caseNotFound.push(bibtexEntry.id);
    }
  });
  return { titleCase, sentenceCase, caseNotFound };
};

// const checkIfUpperCaseAfterColon = title => {
//   if (title.includes(':')) {
//     const indexOfWordAfterColon = title.indexOf(':') + 2;
//     return (title[indexOfWordAfterColon] != null && title[indexOfWordAfterColon] !== title[indexOfWordAfterColon].toUpperCase());
//   } else return true;
// }

const checkTitleCaseWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  const firstLetter = word[0];
  return !(
    (firstLetter === firstLetter.toLowerCase() && word.length >= 4) ||
    (firstLetter === firstLetter.toUpperCase() && word.length < 4)
  )
};

const checkSentenceCaseWord = word => {
  // ignore if whole word is Uppercase and most likely intentional uppercase
  if (word === word.toUpperCase()) {
    return true;
  }
  return word.charAt(0) === word.charAt(0).toLowerCase();
};

module.exports = {
  parseBibTex,
  findCategories
};
