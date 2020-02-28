const splitAuthor = (author, entries) =>
  author != null
    ? author
        .split(" and ")
        .filter(name => name.includes(","))
        .map((name, index) => ({
          id: index,
          name: name,
          abbreviated:
            getFirstName(name) != null
              ? checkAbbreviation(getFirstName(name)[1])
              : false,
          changedAbbreviation: false,
          misspelling: false,
          changedMisspelling: false,
          suggestion: [],
          onlineSuggestion: []
        }))
    : null;

const checkAbbreviation = firstName => /^[A-Za-z]\./.test(firstName);

const searchAbbreviatedSuggestion = entries => {
  entries
    .filter(
      entry =>
        entry.AUTHOR != null &&
        entry.AUTHOR.length > 0 &&
        entry.AUTHOR.some(author => author != null && author.abbreviated)
    )
    .map(entry =>
      entry.AUTHOR.filter(author => author != null && author.abbreviated).map(
        author => {
          author.suggestion = searchSuggestion(author.name, entries);
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
          getLastName(abbreviatedName) != null &&
          getLastName(author.name) != null &&
          getLastName(author.name)[1] === getLastName(abbreviatedName)[1] &&
          compareFirstLetter(author.name, abbreviatedName)
      ).map(foundAuthor => foundAuthor.name)
    );

const searchDuplicatedAuthors = entries => {
  const allAuthors = entries
    .filter(entry => entry.AUTHOR != null && entry.AUTHOR.length > 0)
    .flatMap(entry =>
      entry.AUTHOR.map(author => ({ ...author, entryId: entry.id }))
    );
  const foundSimilarAuthors = [];

  allAuthors.forEach(currentAuthor => {
    allAuthors.forEach(author => {
      if (
        getEditDistance(author.name, currentAuthor.name) <= 2 &&
        getEditDistance(author.name, currentAuthor.name) > 0 &&
        author.entryId !== currentAuthor.entryId
      ) {
        if (
          !foundSimilarAuthors.some(
            foundAuthor =>
              foundAuthor.firstName === currentAuthor.name &&
              foundAuthor.secondName === author.name &&
              foundAuthor.firstEntryId === currentAuthor.entryId &&
              foundAuthor.secondEntryId === author.entryId
          )
        ) {
          foundSimilarAuthors.push({
            firstName: author.name,
            secondName: currentAuthor.name,
            firstEntryId: author.entryId,
            secondEntryId: currentAuthor.entryId
          });
        }
      }
    });
  });

  foundSimilarAuthors.forEach(foundAuthorPair => {
    entries.forEach(entry => {
      if (entry.id === foundAuthorPair.firstEntryId) {
        const foundMisspelledAuthor = entry.AUTHOR.find(
          author => author.name === foundAuthorPair.firstName
        );
        foundMisspelledAuthor.suggestion.unshift(foundAuthorPair.secondName);
        foundMisspelledAuthor.misspelling = true;
      }
      if (entry.id === foundAuthorPair.secondEntryId) {
        const foundMisspelledAuthor = entry.AUTHOR.find(
          author => author.name === foundAuthorPair.secondName
        );
        foundMisspelledAuthor.suggestion.unshift(foundAuthorPair.firstName);
        foundMisspelledAuthor.misspelling = true;
      }
    });
  });
};

const getEditDistance = (word1, word2) => {
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len2 + 1);
  }
  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }
  // iterate though, and check last char
  for (let i = 0; i < len1; i++) {
    const c1 = word1.charAt(i);
    for (let j = 0; j < len2; j++) {
      const c2 = word2.charAt(j);

      // if last two chars equal
      if (c1 === c2) {
        // update dp value for +1 length
        dp[i + 1][j + 1] = dp[i][j];
      } else {
        const replaceVal = dp[i][j] + 1;
        const insertVal = dp[i][j + 1] + 1;
        const deleteVal = dp[i + 1][j] + 1;

        let min = replaceVal > insertVal ? insertVal : replaceVal;
        min = deleteVal > min ? min : deleteVal;
        dp[i + 1][j + 1] = min;
      }
    }
  }
  return dp[len1][len2];
};

const compareFirstLetter = (name1, name2) =>
  name1 != null &&
  name2 != null &&
  getFirstLatter(name1) != null &&
  getFirstLatter(name2) != null &&
  getFirstLatter(name1)[1] === getFirstLatter(name2)[1];

const getFirstName = name => /, (.+)/.exec(name);

const getLastName = name => /^(.+),/.exec(name);

const getFirstLatter = name => /^([A-Z])/.exec(name);

module.exports = {
  checkAbbreviation,
  splitAuthor,
  searchAbbreviatedSuggestion,
  searchDuplicatedAuthors
};
