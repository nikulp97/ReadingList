const { searchResults } = require('./src/searchResults');
const { saveByNumber } = require('./src/saveResults.js');
const { viewList } = require('./src/viewList');

//Users can select either of these three cases
switch (process.argv[2]) {
  case 'search':
    searchResults(process.argv[2]);
    break;
  case 'save':
    saveByNumber(process.argv[2] - 1);
    break;
  case 'view':
    viewList();
    break;
  default:
    console.log('Need to make a valid command.');
}
