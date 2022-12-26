const { searchResults } = require('./src/searchResults');
const { saveByNumber } = require('./src/saveResults.js');
const { viewList } = require('./src/viewList');

switch (process.argv[2]) {
  case 'search':
    searchResults(process.argv[3]);
    break;
  case 'save':
    saveByNumber(process.argv[3] - 1);
    break;
  case 'view':
    viewList();
    break;
  default:
    console.log('Need to make a command.');
}
