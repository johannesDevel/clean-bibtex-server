const clone = require("clone");
const parse = require("./parse");
const checkUtil = require("./checkUtil");

const db = {};

const defaultData = {
  entries: [],
  errors: {
    capitalization: [],
    authorName: [],
    mandatoryFields: []
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
  get(token).errors.capitalization = [];
  get(token).corrections.capitalization = [];
  const parsedBibtex = parse.parseBibTex(text.bibtexText);

  get(token).entries = parsedBibtex;
  const capitalizationErrors = parse.checkTitle(parsedBibtex);
  get(token).errors.capitalization = capitalizationErrors;

  capitalizationErrors.forEach(id => {
    const errorEntry = parsedBibtex.find(entry => entry.id === id);
    if (errorEntry != null) {
      const correctedSum = get(token).corrections.capitalization.length;
      const correctedTitleCaseEntry = {
        TITLE: checkUtil.correctToTitleCase(errorEntry.TITLE).join(' '),
        id: correctedSum,
        entryId: errorEntry.id,
        correctionType: "TitleCase"
      };
      const correctedSentenceCaseEntry = {
        TITLE: checkUtil.correctToSentenceCase(errorEntry.TITLE).join(' '),
        id: correctedSum + 1,
        entryId: errorEntry.id,
        correctionType: "SentencesCase"
      };

      correctedTitleCaseEntry.TITLE = correctedTitleCaseEntry.TITLE.charAt(0).toUpperCase() + correctedTitleCaseEntry.TITLE.slice(1);
      correctedSentenceCaseEntry.TITLE = correctedSentenceCaseEntry.TITLE.charAt(0).toUpperCase() + correctedSentenceCaseEntry.TITLE.slice(1);
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
