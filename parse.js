const parse = require("bibtex-parser");
const checkUtil = require("./checkUtil");

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
    if (bibtexEntry.TITLE != null) {
      const cleanedTitle = bibtexEntry.TITLE.replace(/[\s-]+/g, " ");
      let titleArray = cleanedTitle.split(/[ -]+/);
      const firstWord = titleArray[0];
      if (firstWord[0] === firstWord[0].toUpperCase()) {
        titleArray = titleArray.filter(word => word !== titleArray[0]);
        if (titleArray.every(word => checkUtil.checkTitleCaseWord(word))) {
          titleCase.push(bibtexEntry.id);
        }
      }
    }
  });
  return { titleCase, sentenceCase, caseNotFound };
};

module.exports = {
  parseBibTex,
  findCategories
};
