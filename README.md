![alt text](https://github.com/Lingy94/escape-puzzle/blob/master/frontend/public/EscapE.png "Escape Logo")
----------------
Escape was an individual project for the finale of the Flatiron School Software Engineering Bootcamp.
This point and click escape room game is written in React.js for the frontend and Ruby on Rails for the backend.

This repo contains both the frontend code and the backend.

## Gameplay

[Video Demo](https://www.youtube.com/watch?v=a3_3CedKXoA)

- Users are loaded into the level as soon as they visit the web page. They will have 5 minutes to escape!
- Users must click around the level to find clues that will lead them to the solution.
- Once they have either solved the level, or their time has ran out, they can choose to browse and play other user created levels, or create one for themselves!

- Users can also leave comments on the webpage
- Users can filter comments by oldest or newest comments.

#### Level Creation

- Users can use any image URL to act as their environment.
- Users will then start adding the level properties such as level name, their own name and the solution/answer for the level.
- Users can then start clicking on their level to insert their hidden points with their respective clues.
- To add an input for users to input their answer, they must include the string 'passcode' in the dialogue section.
- Users may choose to reset the level creation by pressing cancel.
- Press submit to create the level and be taken to the level browser.
- Enjoy!


------------
Developer Notes:
- To get this up and running, please cd into escape-puzzle/backend  and run `bundle install && rails s`
- Open another terminal and cd into the escape-puzzle/frontend and run `npm install && npm start`
- Run the Rails server first so that it will run on port 3000 and that the frontend can make the correct fetches
