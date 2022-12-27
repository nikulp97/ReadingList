const { searchResults } = require('./src/searchResults');
const { saveByNumber } = require('./src/saveResults.js');
const { viewList } = require('./src/viewList');

//Users can select either of these three cases
switch (process.argv[2]) {
  case 'search':
    searchResults(process.argv[3]);
    break;
  case 'save':
    if (isNaN(process.argv[3])) {
      console.log('Please select a valid number');
      break;
    } else {
      saveByNumber(process.argv[3] - 1);
    }
    break;
  case 'view':
    viewList();
    break;
  default:
    console.log('Need to make a valid command.');
}
