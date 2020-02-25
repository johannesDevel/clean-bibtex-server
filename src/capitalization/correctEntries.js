const getCorrectedTitleCaseTitle = title => {
  const correctedTitleCase = correctToTitleCase(title);
  return correctCapitalBeginning(correctedTitleCase);
};

const getCorrectedSentenceCaseTitle = title => {
  const correctedSentenceCase = correctToSentenceCase(title);
  return correctCapitalBeginning(correctedSentenceCase);
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
  const correctedWord = word.charAt(0).toLowerCase() + word.slice(1);
  return correctedWord;
};

const correctToTitleCase = title => {
  const cleanedTitle = title.replace(/[\s-]+/g, " ");
  const titleArray = cleanedTitle.split(/[ -]+/);

  const firstWord = titleArray[0];
  if (firstWord[0] !== firstWord[0].toUpperCase()) {
    firstWord[0] = firstWord[0].toUpperCase();
  }
  return titleArray.map(word => correctWordTitleCase(word));
};

const correctToSentenceCase = title => {
  const cleanedTitle = title.replace(/[\s-]+/g, " ");
  const titleArray = cleanedTitle.split(/[ -]+/);

  const firstWord = titleArray[0];
  if (firstWord[0] !== firstWord[0].toUpperCase()) {
    firstWord[0] = firstWord[0].toUpperCase();
  }
  return titleArray.map(word => correctWordSetenceCase(word));
};

module.exports = {
  correctToTitleCase,
  correctToSentenceCase,
  getCorrectedTitleCaseTitle,
  getCorrectedSentenceCaseTitle
};
