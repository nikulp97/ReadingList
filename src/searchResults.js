const axios = require('axios');
require('dotenv').config();
const { saveToFile } = require('./saveResults');

const searchResults = async (search) => {
  try {
    const booksFound = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite&key=${process.env.key}`
    );
    let books = booksFound.data.items;

    saveToFile('RecentSearch.json', books);

    return books.map((book, key) =>
      console.log(
        `Number:${key + 1}
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
