const clone = require("clone");
const parse = require("./parse");

const db = {};

const defaultData = {
  bibtexText: "",
  bibtexEntries: [],
  foundErrors: []
};

const get = token => {
  let data = db[token];

  if (data == null) {
    data = db[token] = clone(defaultData);
  }
  return data;
};

const postText = (token, text) => {
  get(token).bibtexText = text.bibtexText;
  const foundTitleErrors = parse.parseBibTex(text.bibtexText);
  let dataErrorArray = get(token).foundErrors;
  // remove all elements from array
  dataErrorArray.length = 0;

  foundTitleErrors.forEach(foundTitle => {
    console.log(foundTitle);
    dataErrorArray = get(token).foundErrors;
    let newId = 1;
    if (dataErrorArray.length > 0) {
      newId = dataErrorArray[dataErrorArray.length - 1].id + 1;
    }
    const newFoundError = {
      id: newId,
      errorType: "Wrong Title Capitalization",
      errorDetails: foundTitle
    };
    get(token).foundErrors.push(newFoundError);
  });

  return text;
};

module.exports = {
  get,
  postText
};
