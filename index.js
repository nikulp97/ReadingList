const { searchResults } = require('./searchResults');

switch (process.argv[2]) {
  case 'search':
    searchResults(process.argv[3]);
    break;
  default:
    console.log('Need to make a command.');
}
