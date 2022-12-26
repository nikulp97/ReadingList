const axios = require('axios');
require('dotenv').config();

const searchResults = async (search) => {
  try {
    const booksFound = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&printType=books&startIndex=0&maxResults=5&projection=lite&key=${process.env.key}`
    );
    let books = booksFound.data.items;
    return books.map((book, key) =>
      console.log(
        `Number:${key + 1}\n
        Title:${book.volumeInfo.title}\n
        Authors:${book.volumeInfo.authors}\n
        Publishing Company: ${book.volumeInfo.publisher}\n`
      )
    );
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { searchResults };
