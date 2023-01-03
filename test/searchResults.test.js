const { searchResults, googleBooksAPI } = require('../src/searchResults');
const { readFile } = require('../src/saveResults');
const fs = require('fs');

let recentSearch = 'RecentSearch.json';
let readingList = 'readingList.json';
afterEach(() => {
  fs.truncate(recentSearch, 0, function () {});
});
afterEach(() => {
  fs.truncate(readingList, 0, function () {});
});

test('Prints a message stating books were found', (done) => {
  searchResults('basketball').then((message) => {
    expect(message).toEqual('These are the books that we found!');
  });
  done();
});

test('Prints a message stating books were not found', (done) => {
  searchResults(' ').then((message) => {
    expect(message).toEqual(
      'No books matched your search! Please search again.'
    );
  });
  done();
});

test('Check if url to google api call works', (done) => {
  let url = googleBooksAPI('cooking');
  expect(url).toEqual(
    `https://www.googleapis.com/books/v1/volumes?q=cooking&printType=books&startIndex=0&maxResults=5&projection=lite`
  );
  done();
});

test('Check if url to google api call works', (done) => {
  let url = googleBooksAPI('cats and dogs');
  expect(url).toEqual(
    `https://www.googleapis.com/books/v1/volumes?q=cats%20and%20dogs&printType=books&startIndex=0&maxResults=5&projection=lite`
  );
  done();
});
// test('Checking if books are added to recent searches', (done) => {
//   searchResults('basketball');
//   let recentSearches = readFile('RecentSearch.json');
//   let length = recentSearches.length;
//   expect(length).toEqual(5);
//   done();
// });
