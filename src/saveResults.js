const fs = require('fs'); //Node.js file system that allows you to work with files in your local computer

const saveToFile = (file, recentSearch) => {
  const stringifySearch = JSON.stringify(recentSearch);

  return fs.writeFileSync(file, stringifySearch);
};

const readFile = (file) => {
  return JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }));
};

const saveByNumber = (number) => {
  const recent = readFile('RecentSearch.json');
  const bookAdded = recent[number];
  const readingList = 'readingList.json';

  let updatedList;
  try {
    updatedList = readFile(readingList, bookAdded);
  } catch {
    updatedList = [];
  }
  updatedList.push(bookAdded);

  console.log(
    `Book has been added to the list. You have ${updatedList.length} book(s) on your list now.`
  );
  return saveToFile(readingList, updatedList);
};

module.exports = { saveToFile, saveByNumber, readFile };
