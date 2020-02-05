const createBibtexStringFromEntries = entries => {
  let result = "";

  entries.forEach(entry => {
    result += `@${entry.entryType.toLowerCase()}{${entry.ref.toLowerCase()},\n`;
    Object.keys(entry).forEach((entryKey, entryIndex, entryArray) => {
      if (entryKey === "AUTHOR") {
        result += `   ${entryKey.toLowerCase()}={`;
        if (entry[entryKey] != null && entry[entryKey].length > 0) {
          entry[entryKey].forEach((author, index, array) => {
            result += `${author.name}${
              index === array.length - 1 ? "" : " and "
            }`;
          });
        }
        result += "},\n";
      } else if (entryKey === entryKey.toUpperCase()) {
        result += `   ${entryKey.toLowerCase()}={${entry[entryKey]}},\n`;
      }
    });
    result += "}\n\n";
  });
  return result;
};

module.exports = {
  createBibtexStringFromEntries
};
