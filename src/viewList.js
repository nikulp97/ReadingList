const fs = require('fs'); //Node.js file system that allows you to work with files in your local computer
const { readFile } = require('./saveResults');

const viewList = () => {
  const currentList = readFile('readingList.json');

  const list = currentList.map((book) =>
    console.log(
      ` Title:${book.volumeInfo.title}
        Authors:${book.volumeInfo.authors}
        Publishing Company: ${book.volumeInfo.publisher}\n`
    )
  );

  return list;
};

module.exports = { viewList };
