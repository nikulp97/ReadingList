const fs = require('fs'); //Node.js file system that allows you to work with files in your local computer

//Save file to specified area.
const saveToFile = (file, recentSearch) => {
  return fs.writeFileSync(file, JSON.stringify(recentSearch));
};

//Read specified file.
const readFile = (file) => {
  try {
    return JSON.parse(fs.readFileSync(file, { encoding: 'utf8' }));
  } catch {
    return undefined;
  }
};

//Save the specified book number to reading list
const saveByNumber = (number) => {
  //Variable to hold the 5 books on the last search
  const recentFiveSearched = readFile('RecentSearch.json');

  //Selecting the specific book choosen by the user
  const bookAdded = recentFiveSearched[number];

  //Variable to hold reading list location
  const readingList = 'readingList.json';

  //Get the current reading list
  let currentList = readFile(readingList);

  //If reading list is empty we initialize it with the book of choice, if it is not we add it.
  if (currentList === undefined) {
    currentList = [bookAdded];
  } else {
    currentList.push(bookAdded);
  }

  console.log(
    `Book has been added to the list. You have ${currentList.length} book(s) on your list now.`
  );
  return saveToFile(readingList, currentList);
};

module.exports = { saveToFile, saveByNumber, readFile };
