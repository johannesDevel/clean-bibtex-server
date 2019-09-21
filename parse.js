const parse = require('bibtex-parser')
const checkUtil = require('./checkUtil')


const parseBibTex = (bibtex) => {
  let bibJson = parse(bibtex);

  return checkTitle(bibJson);
}

const checkTitle = bibObject => {
  const bibValues = Object.values(bibObject);
  const foundTitleErrors = [];
  for (const bib of bibValues) {
    if (bib.TITLE) {
      if (checkUtil.checkTitleCase(bib.TITLE) != null) {
        foundTitleErrors.push(bib);
      }
    }
  }

  return foundTitleErrors;
};


module.exports = {
  parseBibTex
}