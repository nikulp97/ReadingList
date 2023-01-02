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
// const invalidNumber = (number) => {
//   if (number < 0 || number > 4) {
//     return true;
//   } else {
//     return false;
//   }
// };

const duplicateBookinList = (book, currentList) => {
  if (currentList === undefined) {
    return false;
  }

  for (let i = 0; i < currentList.length; i++) {
    if (book.id === currentList[i].id) {
      console.log('You already added this book to your list!\n');
      return true;
    } else {
      return false;
    }
  }
};

const numOfBooksInList = (currentList) => {
  console.log(
    `\nBook has been added to the list. You have ${currentList.length} book(s) on your list now.`
  );
};

// const trySavingAgain = async () => {
//   let number = await inquirer.prompt({
//     type: 'number',
//     name: 'bookNum',
//     message:
//       'Sorry, that is an invalid number. Please select a number between 1 and 5. ',
//   });
//   let bookNumber = number.bookNum - 1;
//   saveByNumber(bookNumber);
// };

//Save the specified book number to reading list
const saveByNumber = async (number) => {
  const recentFiveSearched = readFile('RecentSearch.json'); //Variable to hold the 5 books on the last search
  const readingList = 'readingList.json'; //Variable to hold reading list location

  // let invalidNum = invalidNumber(number); //Variable to check if the number selected is a valid number

  // if (invalidNum) {
  //   console.log('Please select a valid number.');
  //   trySavingAgain();
  // } else {
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
  // }
};

module.exports = { saveToFile, saveByNumber, readFile };
