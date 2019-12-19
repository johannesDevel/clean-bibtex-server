const scholar = require("google-scholar");

const splitAuthor = author =>
  author != null
    ? author
        .split(" and ")
        .filter(name => name.includes(","))
        .map(name => {
          const firstName = /, (.+)/.exec(name)[1];
          const lastName = /^(.+),/.exec(name)[1];
          // console.log(firstName + ' -- ' + lastName);
          return {
            firstName: firstName,
            lastName: lastName
          };
        })
    : null;

const checkAbbreviation = author =>
  author != null
    ? author.some(auhorName => /[A-Z]\./.test(auhorName.firstName))
    : false;

const getSuggestions = title => {
  scholar.search("Architecture").then(result => console.log(result));
};

const searchAuthor = entries => {
  const abbreviationEntries = entries
    .filter(entry => entry.authorAbbreviation)
    .flatMap(entry =>
      entry.AUTHOR.filter(abbreviationEntry =>
        abbreviationEntry.firstName.includes(".")
      ).map(abbreviationEntry => ({
        id: entry.id,
        abbreviationFirstName: abbreviationEntry.firstName,
        lastName: abbreviationEntry.lastName
      }))
    );

  const allEntries = entries.flatMap(entry =>
    entry.AUTHOR.map(authorName => ({
      id: entry.id,
      firstName: authorName.firstName,
      lastName: authorName.lastName
    }))
  );

  abbreviationEntries.map(abbreviationEntry => {
    const found = allEntries
      .filter(
        entry =>
          entry.id !== abbreviationEntry.id && !entry.lastName.includes(".")
      )
      .some(entry => entry.lastName === abbreviationEntry.lastName);
    console.log('last name found ' + found);
  });

  // entries
  //   .filter(entry => entry.authorAbbreviation)
  //   .map(abbreviationEntry =>
  //     entries
  //       .filter(entry => entry !== abbreviationEntry)
  //       .map(entry => {
  //         console.log(abbreviationEntry.AUTHOR);
  //       })
  //   );
};

module.exports = {
  checkAbbreviation,
  getSuggestions,
  splitAuthor,
  searchAuthor
};
