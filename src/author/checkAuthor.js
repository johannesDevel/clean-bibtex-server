
const checkAbbreviation = entry => {
  if (entry.AUTHOR == null) {
    return false;
  }
  return /(\s|^)[A-Za-z]\.(\s|$)/.test(entry.AUTHOR);
};

module.exports = {
  checkAbbreviation
};
