const axios = require('axios'); //To retrieve information from Google Books API
require('dotenv').config(); // module that allows us to access environmental variables
const { saveToFile, saveByNumber, trySavingAgain } = require('./saveResults');
const inquirer = require('inquirer');

const searchResults = async (search) => {
  try {
    const booksFound = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );

    let books = booksFound.data.items;

    saveToFile('RecentSearch.json', books);

    //mapping through the 5 books found and showing only title, author, and publishing company
    await books.map((book, key) =>
      console.log(
        `\nNumber:${key + 1}
        Title: ${book.volumeInfo.title}
        Authors: ${book.volumeInfo.authors}
        Publishing Company: ${book.volumeInfo.publisher}\n`
      )
    );
    // return saveByNumber(bookNumber);
  } catch (error) {
    //Error handling incase no books matched a user's search
    console.error('No books matched your search! Please search again.');
  }

  try {
    let number = await inquirer.prompt({
      type: 'input',
      name: 'bookNum',
      message: 'Which book number would you like to save?',
      validate: (answer) => {
        if (isNaN(answer)) {
          return 'Please enter a number between 1 and 5.';
        }
        if (answer < 1 || answer > 5) {
          return 'Please enter a number between 1 and 5.';
        }
        return true;
      },
    });

    let bookNumber = number.bookNum - 1;

    saveByNumber(bookNumber);
  } catch {
    trySavingAgain();
  }
};

module.exports = { searchResults };
