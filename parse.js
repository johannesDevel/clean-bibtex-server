const parse = require("bibtex-parser");
const checkUtil = require("./checkUtil");

const parseBibTex = bibtex => (
  Object.values(parse(bibtex)).map((entry, index) => {
    entry["id"] = index;
    return entry;
  })
);

const checkTitle = bibtexEntries => {
  const capitalizationErrors = [];
  for (const bibtexEntry of bibtexEntries) {
    if (
      bibtexEntry.TITLE &&
      checkUtil.checkTitleCase(bibtexEntry.TITLE) != null
    ) {
      capitalizationErrors.push(bibtexEntry.id);
    }
  }
  return capitalizationErrors;
};

module.exports = {
  parseBibTex,
  checkTitle
};
