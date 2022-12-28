# React-Snake-Game 
#### This is a version of the [previous snake game](https://github.com/KamilCodemate/React-Snake-Game) with an additional leaderboard.
<br/>

## Rules

Nothing hard. Just try to eat (touch by head) the apples that appear on the map. 1 eaten apple = 1 point, bul also it makes your snake's body longer.
More points = better score. The game, however, can be won by eating enough apples to physically occupy the entire map. If you do, you are a true grandmaster.
You lose when you hit your head on the end of the map or your own body.

## Controls

You can control the snake with the arrow keys or the W, A, S, D keys.

## Running the game

Running this version of the project is a bit more complicated than the [non-leaderboard version](https://github.com/KamilCodemate/React-Snake-Game). To run:
1. Download or clone the repository;
2. in the Main project directory, run `npm install` to install all the dependencies needed to run the application;
3. Install [XAMPP](https://www.apachefriends.org/pl/download.html) on your machine;
4. The `xampp` folder should appear in the indicated location (by default it is drive C);
5. Move the `leaderboard` folder (in the main project folder) to the `xampp/htdocs` folder;
6. Launch the xampp control panel and start `Apache` and `MySql` module;
7. Go to `http://localhost/phpmyadmin/` and import the `leaderboard/leaderboard.sql` file;
8. In the main project directory run `npm run` to start the app.

## Collecting data
All the data you provide in the form is saved in the local database and no one else can see the changes.

## Other Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

