const clone = require("clone");
const parse = require("bibtex-parser");
const correctEntries = require("./correctEntries");
const checkMandatoryFields = require("./checkMandortyFields");
const checkAuthor = require("./checkAuthor");
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
  const entries = parse(text.bibtexText);
  if (entries == null && entries.length <= 0) {
    return false;
  }
  get(token).entries = parseBibTex(entries);
  return true;
};

const getEntriesAsBibtexString = token => {
  const data = db[token];
  if (data != null) {
    return createBibtex.createBibtexStringFromEntries(data.entries);
  } else return null;
};

const parseBibTex = entries => {
  const allEntries = Object.keys(entries).map((entryKey, index, entryArray) => {
    entries[entryKey].id = index;
    entries[entryKey].ref = entryKey.toLowerCase();
    const author = checkAuthor.splitAuthor(entries[entryKey].AUTHOR, entryArray);
    if (author != null) {
      entries[entryKey].AUTHOR = author;
    }
    entries[entryKey].TITLE = entries[entryKey].TITLE.replace(/[{}]+/g, "");
    entries[entryKey].correctionTitleCase = correctEntries
      .getCorrectedTitleCaseTitle(entries[entryKey].TITLE);
    entries[entryKey].correctionSentenceCase = correctEntries
      .getCorrectedSentenceCaseTitle(entries[entryKey].TITLE);
    entries[entryKey].capitalization = entries[entryKey].TITLE === entries[entryKey].correctionTitleCase
      ? 'titleCase'
      : entries[entryKey].TITLE === entries[entryKey].correctionSentenceCase
        ? 'sentenceCase'
        : 'caseNotFound';
    entries[entryKey].initialCapitalization = entries[entryKey].capitalization;
    entries[entryKey].correctionInitialCase = entries[entryKey].TITLE;
    entries[entryKey].missingRequiredFields = checkMandatoryFields
      .getMissingFields(entries[entryKey]);
    entries[entryKey].correctedRequiredFields = [];
    entries[entryKey].mandatoryFieldsCheck = false;
    entries[entryKey].mandatoryFieldsSuggestions = {};
    entries[entryKey].checkedSearched = false;
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
