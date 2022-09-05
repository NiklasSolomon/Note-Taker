# Note-Taker
[Link to live webpage]()
## Goal:
The assignment will showcase the student's knowledge of express and database generation by building an application that can be used to interact with notes.

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```
## How:
By using Express.js as a back end, we are able to retrieve data from a json file that is dynamically written using the file system from the application's webpage. Each note is given a unique id using the npm package uuid, which we can use to view and delete individual notes. The application can be ran using node server.js.

## Result:
