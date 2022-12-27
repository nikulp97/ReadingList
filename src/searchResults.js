const axios = require('axios'); //To retrieve information from Google Books API
require('dotenv').config(); // module that allows us to access environmental variables
const { saveToFile } = require('./saveResults');

const searchResults = async (search) => {
  try {
    const booksFound = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite`
    );

    let books = booksFound.data.items;

    saveToFile('RecentSearch.json', books);

    //mapping through the 5 books found and showing only title, author, and publishing company
    return books.map((book, key) =>
      console.log(
        `\nNumber:${key + 1}
        Title:${book.volumeInfo.title}
        Authors:${book.volumeInfo.authors}
        Publishing Company: ${book.volumeInfo.publisher}\n`
      )
    );
  } catch (error) {
    //Error handling incase no books matched a user's search
    console.error('No books matched your search! Please search again.');
  }
};

module.exports = { searchResults };
