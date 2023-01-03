const { saveByNumber, readFile, saveToFile } = require('../src/saveResults');
const { searchResults, googleBooksAPI } = require('../src/searchResults');
const fs = require('fs');

let recentSearch = 'RecentSearch.json';
let readingList = 'readingList.json';

//clearing readingList and recentSearch json files
afterEach(() => {
  fs.truncate(recentSearch, 0, function () {});
});
afterEach(() => {
  fs.truncate(readingList, 0, function () {});
});

//checking if readingList gets updated by the saveByNumber function
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

  expect(list).toEqual([{ test: '0' }]);
  done();
});

//testing saveToFile and readFile functions
test('Check if saving and reading files work', (done) => {
  saveToFile(readingList, [{ test: '0' }, { test: '1' }]);
  let list = readFile(readingList);
  expect(list.length).toEqual(2);
  done();
});
