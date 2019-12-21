const scholar = require("google-scholar");

const splitAuthor = author =>
  author != null
    ? author
      .split(" and ")
      .filter(name => name.includes(","))
      .map(name => ({
        name: name,
        abbreviated: checkAbbreviation(getFirstName(name)),
        misspelling: false
      }))
    : null;

const checkAbbreviation = firstName => /^[A-Za-z]\./.test(firstName);

const searchAbbreviatedSuggestion = entries => {
  entries
    .filter(
      entry =>
        entry.AUTHOR != null && entry.AUTHOR.some(author => author.abbreviated)
    )
    .map(entry =>
      entry.AUTHOR.filter(author => author != null && author.abbreviated).map(
        author => {
          author.suggestion = searchSuggestion(author.name, entries);
          console.log(author);
        }
      )
    );
};

const searchSuggestion = (abbreviatedName, entries) =>
  entries
    .filter(entry => entry.AUTHOR != null)
    .flatMap(entry =>
      entry.AUTHOR.filter(
        author =>
          author != null &&
          !author.abbreviated &&
          getLastName(author.name) === getLastName(abbreviatedName)
      ).map(foundAuthor => foundAuthor.name)
    );

const getFirstName = name => /, (.+)/.exec(name)[1];

const getLastName = name => /^(.+),/.exec(name)[1];

module.exports = {
  checkAbbreviation,
  splitAuthor,
  searchAbbreviatedSuggestion
};
