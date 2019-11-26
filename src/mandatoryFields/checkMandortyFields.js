const getMissingFields = entry => {
  const missingFields = [];

  if (entry.entryType.toLowerCase() === 'article') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.JOURNAL == null) && missingFields.push('journal');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'book') {
    (entry.TITLE == null) && missingFields.push('article');
    (entry.AUTHOR == null && entry.EDITOR == null) && missingFields.push('author');
    (entry.PUBLISHER == null) && missingFields.push('publisher');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'booklet') {
    (entry.TITLE == null) && missingFields.push('article');
  }
  if (entry.entryType.toLowerCase() === 'inbook') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null && entry.EDITOR == null) && missingFields.push('author');
    (entry.CHAPTER == null && entry.PAGES == null) && missingFields.push('pages');
    (entry.PUBLISHER == null) && missingFields.push('publisher');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'incollection') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.YEAR == null) && missingFields.push('year');
    (entry.BOOKTITLE == null) && missingFields.push('booktitle');
    (entry.PUBLISHER == null) && missingFields.push('publisher');
  }
  if (entry.entryType.toLowerCase() === 'inproceedings') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.BOOKTITLE == null) && missingFields.push('booktitle');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'manual') {
    (entry.TITLE == null) && missingFields.push('title');
  }
  if (entry.entryType.toLowerCase() === 'mastersthesis') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.SCHOOL == null) && missingFields.push('school');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'phdthesis') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.SCHOOL == null) && missingFields.push('school');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'proceedings') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'techreport') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.INSTITUTION == null) && missingFields.push('journal');
    (entry.YEAR == null) && missingFields.push('year');
  }
  if (entry.entryType.toLowerCase() === 'unpublished') {
    (entry.TITLE == null) && missingFields.push('title');
    (entry.AUTHOR == null) && missingFields.push('author');
    (entry.NOTE == null) && missingFields.push('note');
  }
  return missingFields;
};

module.exports = {
  getMissingFields
};
