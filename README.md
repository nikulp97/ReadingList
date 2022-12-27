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
the number book they want. Please look at different commands we will use for our application
down below!

1. Search for books ---> `node index.js search <word>`
2. Add book to the Reading List ---> `node index.js save <number>`
3. View your Reading List ---> `node index.js view`

# Technologies/Libraries used

- Utilized Javascript as the core language of the project
- Node.js to execute the application
- Axios to make HTTP requests from the browser to retrieve data from Google Books API
- Dotenv module to load environment variables (our API key) to process.env
- Node.js File System (fs) to work with file systems in our machine. Used to update readingList.json & RecentSearch.json

# Future Improvements

- Remove or delete the entire reading list
- Update order of reading list
- Stop users from inserting the same book to reading list.
