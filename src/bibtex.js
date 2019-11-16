const clone = require('clone');
const checkEntries = require('./capitalization/checkEntries');
const correctEntries = require('./capitalization/correctEntries');

const db = {};

const defaultData = {
  entries: [],
  categories: {
    capitalization: {
      titleCase: [],
      sentenceCase: [],
      caseNotFound: []
    },
    authorName: {},
    mandatoryFields: {}
  },
  corrections: {
    capitalization: [],
    authorName: [],
    mandatoryFields: []
  }
};

const get = token => {
  let data = db[token];

  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
};

const postText = (token, text) => {
  get(token).entries = [];
  get(token).categories.titleCase = [];
  get(token).categories.sentenceCase = [];
  get(token).categories.caseNotFound = [];
  get(token).corrections.capitalization = [];
  const parsedBibtex = checkEntries.parseBibTex(text.bibtexText);

  get(token).entries = parsedBibtex;
  get(token).categories.capitalization = checkEntries.findCategories(parsedBibtex);

  parsedBibtex.forEach(entry => {
    if (entry != null) {
      const correctedSum = get(token).corrections.capitalization.length;
      const correctedTitleCaseEntry = {
        TITLE: correctEntries.correctToTitleCase(entry.TITLE).join(' '),
        id: correctedSum,
        entryId: entry.id,
        correctionType: 'TitleCase'
      };
      const correctedSentenceCaseEntry = {
        TITLE: correctEntries.correctToSentenceCase(entry.TITLE).join(' '),
        id: correctedSum + 1,
        entryId: entry.id,
        correctionType: 'SentencesCase'
      };

      correctedTitleCaseEntry.TITLE =
        correctedTitleCaseEntry.TITLE.charAt(0).toUpperCase() +
        correctedTitleCaseEntry.TITLE.slice(1);
      correctedSentenceCaseEntry.TITLE =
        correctedSentenceCaseEntry.TITLE.charAt(0).toUpperCase() +
        correctedSentenceCaseEntry.TITLE.slice(1);
      get(token).corrections.capitalization.push(correctedTitleCaseEntry);
      get(token).corrections.capitalization.push(correctedSentenceCaseEntry);
    }
  });

  return text;
};

module.exports = {
  get,
  postText
};
