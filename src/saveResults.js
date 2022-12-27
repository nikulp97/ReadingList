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

  //Variable to hold reading list location
  const readingList = 'readingList.json';

  //Selecting the specific book choosen by the user
  if (number < 0 || number > 4) {
    console.log('Please select a valid number.'); //invalid number entry by user
  } else {
    const bookAdded = recentFiveSearched[number]; //book selected by user
    let duplicate = false; //boolean to check if user already added the book to list
    let currentList = readFile(readingList); //Get the current reading list

    //If reading list is empty we initialize it with the book of choice, if it is not we add it.
    if (currentList === undefined) {
      currentList = [bookAdded];
      console.log(
        `\nBook has been added to the list. You have ${currentList.length} book(s) on your list now.`
      );
    } else {
      //logic to look through current reading list to make sure we are not adding duplicates
      for (let i = 0; i < currentList.length; i++) {
        if (bookAdded.id === currentList[i].id) {
          console.log('You already added this book to your list!');
          duplicate = true;
        }
      }
      if (!duplicate) {
        currentList.push(bookAdded);

        console.log(
          `\nBook has been added to the list. You have ${currentList.length} book(s) on your list now.`
        );
      }
    }
    //update readingList.json file
    return saveToFile(readingList, currentList);
  }
};
module.exports = { saveToFile, saveByNumber, readFile };
