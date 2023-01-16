# Movies

Implement the `App` with a home page having ability to display a scrollable list of film fetched through [API](https://swapi.dev/documentation#films) sorted by it's released year. Clicking on a film name from this list takes to the film page with ability to show a detailed view about the film containing name, release year and its characters.
The star wars logo is present all the time in both the view/page and is a link which can be clicked to be redirected to the home page (page displaying a list of films). Additionally there is a back button on the film page (page to display film details) which is enabled after the API fetch is complete and clicking on it takes us back to the home page.
The application is responsive to different screen sizes and adapts displaying the film names in grid.

## Demo
https://sapnachoudhary06.github.io/movies-and-characters/

## Run Locally

Clone the project

```bash
  https://github.com/sapnachoudhary06/movies-and-characters.git
```

Go to the project directory

```bash
  cd movies-and-characters
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Deployment

To deploy this project run

```bash
  npm run deploy
```

## 🛠 Skills
Javascript, TypeScript, HTML, SCSS, Bulma, React and hooks.


## Assumptions/Limitations
1. The release date of the film in the field `release_date` is a string in the format `YYYY-MM-DD`.
2. The API server is taking too long for responding, we get frequent errors in fetching films list and characters for the film.
3. The working/live version of the application is deployed on [Github](https://sapnachoudhary06.github.io/movies-and-characters/), deployment on Netlify was not working.


## Original Problem Statement

The goal of this assignment is build a small application with below requirements:
1. A scrollable list of all the movies sorted in the release year. Clicking on a movie takes you to the next screen.
2. A scrollable list of all the characters in the selected movie. On top is the name of the movie with the release year.
3. Host your ReactJS on any of the freely available hosting providers such as Netlify.
