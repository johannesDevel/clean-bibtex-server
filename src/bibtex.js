const clone = require("clone");
const parse = require("bibtex-parser");
const checkEntries = require("./capitalization/checkEntries");
const correctEntries = require("./capitalization/correctEntries");
const checkMandatoryFields = require("./mandatoryFields/checkMandortyFields");
const checkAuthor = require("./author/checkAuthor");
const createBibtex = require("./createBibtex");

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

const getEntriesAsBibtexString = token => {
  const data = db[token];
  if (data != null) {
    return createBibtex.createBibtexStringFromEntries(data.entries);
  } else return null;
};

const parseBibTex = bibtex => {
  const entries = parse(bibtex);
  const allEntries = Object.keys(entries).map((entryKey, index, entryArray) => {
    entries[entryKey].id = index;
    entries[entryKey].ref = entryKey.toLowerCase();
    entries[entryKey].AUTHOR = checkAuthor.splitAuthor(
      entries[entryKey].AUTHOR,
      entryArray
    );
    entries[entryKey].capitalization = checkEntries.setCapitalization(
      entries[entryKey]
    );
    entries[entryKey].initialCapitalization = entries[entryKey].capitalization;
    let correctedTitleCase = correctEntries
      .correctToTitleCase(entries[entryKey].TITLE)
      .join(" ");
    correctedTitleCase =
      correctedTitleCase.charAt(0).toUpperCase() + correctedTitleCase.slice(1);
    entries[entryKey].correctionTitleCase = correctedTitleCase;
    let correctedSentenceCase = correctEntries
      .correctToSentenceCase(entries[entryKey].TITLE)
      .join(" ");
    correctedSentenceCase =
      correctedSentenceCase.charAt(0).toUpperCase() +
      correctedSentenceCase.slice(1);
    entries[entryKey].correctionSentenceCase = correctedSentenceCase;
    entries[entryKey].correctionInitialCase = entries[entryKey].TITLE;
    entries[
      entryKey
    ].missingRequiredFields = checkMandatoryFields.getMissingFields(
      entries[entryKey]
    );
    entries[entryKey].correctedRequiredFields = [];
    return entries[entryKey];
  });
  checkAuthor.searchAbbreviatedSuggestion(allEntries);
  checkAuthor.searchDuplicatedAuthors(allEntries);
  return allEntries;
};

module.exports = {
  setData,
  get,
  postText,
  getEntriesAsBibtexString
};
