const clone = require("clone");
const parse = require("bibtex-parser");
const checkEntries = require("./capitalization/checkEntries");
const correctEntries = require("./capitalization/correctEntries");
const checkMandatoryFields = require("./mandatoryFields/checkMandortyFields");
const checkAuthor = require('./author/checkAuthor');

const db = {};

const defaultData = {
  entries: []
};

const get = token => {
  let data = db[token];

  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
};

const setData = (token, data) => {
  get(token).entries = data.entries;
};

const postText = (token, text) => {
  get(token).entries = [];
  get(token).entries = parseBibTex(text.bibtexText);
};

const parseBibTex = bibtex => (
  Object.values(parse(bibtex)).map((entry, index) => {
    entry.id = index;
    entry.AUTHOR = checkAuthor.splitAuthor(entry.AUTHOR);
    entry.capitalization = checkEntries.setCapitalization(entry);
    let correctedTitleCase = correctEntries
      .correctToTitleCase(entry.TITLE)
      .join(" ");
    correctedTitleCase =
      correctedTitleCase.charAt(0).toUpperCase() + correctedTitleCase.slice(1);
    entry.correctionTitleCase = correctedTitleCase;
    let correctedSentenceCase = correctEntries
      .correctToSentenceCase(entry.TITLE)
      .join(" ");
    correctedSentenceCase =
      correctedSentenceCase.charAt(0).toUpperCase() +
      correctedSentenceCase.slice(1);
    entry.correctionSentenceCase = correctedSentenceCase;
    entry.correctionNoCase = entry.TITLE;
    entry.missingRequiredFields = checkMandatoryFields.getMissingFields(entry);
    entry.authorAbbreviation = checkAuthor.checkAbbreviation(entry.AUTHOR);
    return entry;
  })
);

const searchAuthor = token => {
  checkAuthor.searchAuthor(Object.values(get(token).entries));
  // Object.values(get(token).entries)
  //   .filter(entry => entry.authorAbbreviation)
  //   .map(entry => (
      
  //   ))
  };

module.exports = {
  setData,
  get,
  postText,
  searchAuthor
};
