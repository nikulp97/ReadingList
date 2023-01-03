const { searchResults } = require('./src/searchResults');
const { viewList } = require('./src/viewList');
const inquirer = require('inquirer');

//Users can select either of these three cases
const startReadingApp = async () => {
  let quitApplication = false;

  while (!quitApplication) {
    let val = await pickFromList();
    console.clear();

    switch (val.command) {
      case 'search':
        await searchResults(val.searchResult);
        break;
      case 'view':
        await viewList();
        break;
      case 'quit':
        console.log('Come back soon to add more books!');
        quitApplication = true;
        break;
      default:
        console.log('Needs to make a valid command.');
    }
  }
};

const pickFromList = async () => {
  let choice = await inquirer.prompt([
    {
      type: 'list',
      name: 'command',
      message: 'What do you want to pick?',
      choices: [
        { name: 'Search for books', value: 'search' },
        { name: 'View your Reading list', value: 'view' },
        { name: 'Quit application', value: 'quit' },
      ],
    },
    {
      type: 'input',
      name: 'searchResult',
      message: 'What type of books would you like to search for?',
      when(answers) {
        return answers.command === 'search';
      },
    },
  ]);
  return choice;
};

startReadingApp();

module.exports = { startReadingApp, pickFromList };
