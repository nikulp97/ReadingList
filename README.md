# Reading List using Google Books API (Command Line Application)

# Set Up

1. Clone Repo in Terminal: "git clone git@github.com:nikulp97/ReadingList.git"
2. Navigate into Folder: "cd ReadingList"
3. Type "npm install" to download all the necessary dependencies.
4. Type "touch readingList.json" in terminal to store information of books we want to read!
5. Type "touch RecentSearch.json" in terminal to store information of books we searched for!

# Running the Application

Purpose of this application is to search for books that you are interested in. We are
using the Google Books API to retrieve information on books depending on what we search for.
At the time, we will only display 5 books from every search. The books will be numbered from
1 to 5. If the user is interested they will add the book to their reading list, by specifying
the number book they want. Please look at command we will use to start the application and use
test cases.

1. Start application ---> `node index.js`
2. Running test cases ---> `npm test`

# Technologies/Libraries used

- Utilized Javascript as the core language of the project
- Node.js to execute the application
- Axios to make HTTP requests from the browser to retrieve data from Google Books API
- Dotenv module to load environment variables (our API key) to process.env
- Node.js File System (fs) to work with file systems in our machine. Used to update readingList.json & RecentSearch.json
- Inquirer Prompt is an NPM package I used to capture user input. It allow users to pick options and making
  the application flow efficiently.
- Jest (Javascript Testing Framework) to ensure correctness of code, and avoid errors.

# Edge Cases/What I learned

- Fixed edge case where a user can add the same book to the reading list
- Fixed edge case where user can save a book without being in the specific number range a
- Fixed edge case where user can save a book with letters or symbols
- Issue still facing: API key stored in dotenv file, however causes issues when I clone the repository again.
  Need to figure out how to make API key usable for other users. Currently, application works
  fine without API key.

# Learning Points After 1st Submission

- Write shorter and more readable function. It will help other engineers follow your logic.
- Creating a navigable CLI interface. Utilizing Inquirer Prompt was really effective.
- Write test cases! Need to practice more with Jest and other frameworks in the future.
- Discovering new technologies that help capture user input in a CLI application. This project
  really helped me practice my documentation and research skills.

# Future Improvements

- Remove or delete the entire reading list
- Update order of reading list
- Stop users from inserting the same book to reading list. (Completed)
- Work on writing test-cases (in process) from the beginning to lay the ground work.

# Useful Links

- https://www.npmjs.com/package/inquirer
- https://jestjs.io/docs/getting-started
