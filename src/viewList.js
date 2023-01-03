const fs = require('fs'); //Node.js file system that allows you to work with files in your local computer
const { readFile } = require('./saveResults');

const viewList = () => {
  const currentList = readFile('readingList.json');
  if (currentList === undefined) {
    return console.log('There are no books in your list right now!');
  }
  console.log(`\n${currentList.length} total books in your Reading List!`);
  const list = currentList.map((book) =>
    console.log(
      `\nTitle: ${book.volumeInfo.title}
        Authors: ${book.volumeInfo.authors}
        Publishing Company: ${book.volumeInfo.publisher}\n`
    )
  );

  return list;
};

module.exports = { viewList };
