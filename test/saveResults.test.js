const { saveByNumber, readFile, saveToFile } = require('../src/saveResults');
const { searchResults, googleBooksAPI } = require('../src/searchResults');
const fs = require('fs');

let recentSearch = 'RecentSearch.json';
let readingList = 'readingList.json';

afterEach(() => {
  fs.truncate(recentSearch, 0, function () {});
});
afterEach(() => {
  fs.truncate(readingList, 0, function () {});
});

// test('Checking if saving works', async () => {
//   await searchResults('basketball');
//   await saveByNumber(4);
//   let list = await readFile('readingList.json');
//   console.log('this is the LISTTTT', list);
//   expect(list.length).toBe(1);
// });

test('Checking if saving works', (done) => {
  saveToFile(recentSearch, [
    { test: '0' }, // book im targeting
    { test: '1' },
    { test: '2' },
    { test: '3' },
    { test: '4' },
  ]);
  saveByNumber(0);
  let list = readFile(readingList);
  //LIST ABOVE SHOULD ONLY EQUAL [{test: '0'}]
  console.log('this is ma list', list);

  expect(list).toEqual([{ test: '0' }]);
  done();
});

test('Check if saving and reading files work', (done) => {
  saveToFile(readingList, [{ test: '0' }, { test: '1' }]);
  let list = readFile(readingList);
  console.log('yo am i here');
  expect(list.length).toEqual(2);

  done();
});

test('Check if url to google api call works', (done) => {
  let url = googleBooksAPI('cooking');
  expect(url).toEqual(
    `https://www.googleapis.com/books/v1/volumes?q=cooking&printType=books&startIndex=0&maxResults=5&projection=lite`
  );
  done();
});
