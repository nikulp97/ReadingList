const fs = require('fs'); //Node.js file system that allows you to work with files in your local computer
const inquirer = require('inquirer');

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

const duplicateBookinList = (book, currentList) => {
  if (currentList === undefined) {
    return false;
  }

  for (let i = 0; i < currentList.length; i++) {
    if (book.id === currentList[i].id) {
      console.log('You already added this book to your list!\n');
      return true;
    }
  }
  return false;
};

const numOfBooksInList = (currentList) => {
  console.log(
    `\nBook has been added to the list. You have ${currentList.length} book(s) on your list now.\n`
  );
};

//Save the specified book number to reading list
const saveByNumber = async (number) => {
  const recentFiveSearched = readFile('RecentSearch.json'); //Variable to hold the 5 books on the last search
  const readingList = 'readingList.json'; //Variable to hold reading list location

  const bookAdded = recentFiveSearched[number]; //book selected by user
  let currentList = readFile(readingList); //Get the current reading list
  let duplicate = duplicateBookinList(bookAdded, currentList); //Boolean that checks if book already in list

  //If reading list is empty we initialize it with the book of choice, if it is not we add it.
  if (currentList === undefined) {
    currentList = [bookAdded];
    numOfBooksInList(currentList);
  } else {
    //logic to look through current reading list to make sure we are not adding duplicates
    if (!duplicate) {
      currentList.push(bookAdded);
      numOfBooksInList(currentList);
    }
  }
  //update readingList.json file

  saveToFile(readingList, currentList);
};

module.exports = { saveToFile, saveByNumber, readFile };
