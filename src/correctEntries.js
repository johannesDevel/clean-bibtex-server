const getCorrectedTitleCaseTitle = title => {
  const correctedTitleCase = splitTitle(title).map(word =>
    correctWordTitleCase(word)
  );
  return correctCapitalBeginning(correctedTitleCase);
};

const getCorrectedSentenceCaseTitle = title => {
  const correctedSentenceCase = splitTitle(title).map(word =>
    correctWordSetenceCase(word)
  );
  return correctCapitalBeginning(correctedSentenceCase);
};

const splitTitle = title => {
  const cleanedTitle = title.replace(/[\s]+/g, " ");
  const titleArray = cleanedTitle.split(/[\s]+/);
  return titleArray;
};

const correctCapitalBeginning = title => {
  const correctedCapitalAfterColon = title.map((word, index) => {
    const previousWord = title[index - 1];
    if (index !== 0 && previousWord.includes(":")) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  const correctedTitle = correctedCapitalAfterColon.join(" ");
  return correctedTitle.charAt(0).toUpperCase() + correctedTitle.slice(1);
};

const correctWordTitleCase = word => {
  if (word === word.toUpperCase()) {
    return word;
  }
  if (word.includes("-")) {
    for (let i = 0; i < word.length - 1; i++) {
      const currentLetter = word[i];
      const previousLetter = word[i - 1];
      if (i > 0 && previousLetter === "-" && currentLetter !== currentLetter.toUpperCase()) {
        word = word.substr(0, i) + currentLetter.toUpperCase() + word.substr(i + 1);
      }
    }
  }
  const firstLetter = word[0];

  let correctedWord = word;
  if (firstLetter === firstLetter.toLowerCase() && word.length >= 4) {
    correctedWord = word.charAt(0).toUpperCase() + word.slice(1);
  }
  if (firstLetter === firstLetter.toUpperCase() && word.length < 4) {
    correctedWord = word.charAt(0).toLowerCase() + word.slice(1);
  }
  return correctedWord;
};

const correctWordSetenceCase = word => {
  if (word === word.toUpperCase()) {
    return word;
  }
  if (word.includes("-")) {
    for (let i = 0; i < word.length - 1; i++) {
      const currentLetter = word[i];
      const previousLetter = word[i - 1];
      if (i > 0 && previousLetter === "-" && currentLetter !== currentLetter.toLowerCase()) {
        word = word.substr(0, i) + currentLetter.toLowerCase() + word.substr(i + 1);
      }
    }
  }

  const correctedWord = word.charAt(0).toLowerCase() + word.slice(1);
  return correctedWord;
};

module.exports = {
  getCorrectedTitleCaseTitle,
  getCorrectedSentenceCaseTitle
};
