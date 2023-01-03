const axios = require('axios'); //To retrieve information from Google Books API
require('dotenv').config(); // module that allows us to access environmental variables
const { saveToFile, saveByNumber } = require('./saveResults');
const inquirer = require('inquirer');

//FUNCTION THAT DISPLAYS 5 BOOKS
const searchResults = async (search) => {
  try {
    let url = googleBooksAPI(search);
    const booksFound = await axios.get(url);
    let books = booksFound.data.items;
    saveToFile('RecentSearch.json', books);
    outputBooks(books);
    let userAnswer = await askUserToSave(); //asking user to pick if he wants to save a book or not
    executeUserDecision(userAnswer);
  } catch (error) {
    //Error handling incase no books matched a user's search
    console.log('No books matched your search! Please search again.');
  }
};

//FUNCTION THAT RETURNS URL FOR API CALL
const googleBooksAPI = (search) => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`;
  let editedUrl = url.replaceAll(' ', '%20');

  return editedUrl;
};

//FUNCTION THAT FORMATS BOOK OUTPUTS
const outputBooks = async (books) => {
  console.log('These are the books that we found!');
  //mapping through the 5 books found and showing only title, author, and publishing company
  await books.map((book, key) =>
    console.log(
      `\nNumber:${key + 1}
        Title: ${book.volumeInfo.title}
        Authors: ${book.volumeInfo.authors}
        Publishing Company: ${book.volumeInfo.publisher}\n`
    )
  );
};

//FUNCTION THAT ASKS USER TO SAVE A BOOK OR GO BACK TO MENU
const askUserToSave = async () => {
  let choice = await inquirer.prompt([
    {
      type: 'list',
      name: 'command',
      message: '\nWould you like to save any of these books?\n',
      choices: [
        { name: 'Yes I would\n', value: 'yes' },
        { name: 'No, bring me back to main menu\n', value: 'no' },
      ],
    },
    {
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
      when(answers) {
        return answers.command === 'yes';
      },
    },
  ]);
  return choice;
};

//FUNCTION THAT EXECUTES USER DECISION TO SAVE OR GO BACK TO MENU
const executeUserDecision = (userAnswer) => {
  switch (userAnswer.command) {
    case 'yes':
      let bookNumber = userAnswer.bookNum - 1;
      saveByNumber(bookNumber);
    case 'no':
      break;
    default:
      console.log('Needs to make a valid command.');
  }
};

module.exports = { searchResults, googleBooksAPI };
