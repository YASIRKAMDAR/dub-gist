# Project Title
Github gist frontend app

## Github Path
https://github.com/YASIRKAMDAR/dub-gist

## Hiroku app link: 
https://jinocnchlng.herokuapp.com

### Application details
The application is created using react/redux client side and nodeJS express server side for the api calls to gist API.

### Assignment status
Assignment task breakup status is as follows:
1) Search: When a user enters a username, it should be able to get a full list of
public gists by that user. --> Implemented using the users/<username>/gists from the git gist API
2) Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the
returned gist has list of files containing python and javascript files, the gist
should have the respective tags/badges). --> implemented using bootstrap 4 Pill badge
3) Fork: Username/Avatar of of the last 3 users who forked it with avatar linking to
the fork. --> Implemented using gists/<forks list id>/forks from the Github gist API

## Setup 
1) Clone the application source code
2) Go to root folder for server app setup
3) install dependencies
` npm install `
4) Go to client folder within server folder for react client app setup
` cd client `
5) install dependencies
` npm install `

## Run dev application
1) Open a command console
2) Go to root folder for start server app
3) run server app
` npm start `
4) Open another command console to run client parallely
4) Go to client folder within server folder to run react client app 
` cd client `
5) run client app
` npm start `
6) Use the url following url to run the application
` http://localhost:3000/ `

## Design and implementation decisions 
The application stack used is as follows
1) NodeJs Express Backend for API Gateway and integration
2) React application frontend (Creat react app) [Webpack, es6]
3) Bootstrap 4 using reactstrap package for responsive UI
4) Redux to maintain the state of the App in the redux store

## Implementation plan
### STEP 1: Service integration - two service integrated to receive all the data required (https://api.github.com/)
1) /users/octocat/gists: to fetch all the user related gists
2) /gists/<username>/forks: to fetch the last 3 forks related gists (the filter is applied on the serverside to reduce redus store size on the client)
### STEP 2: Frontend - Created a single page app having the following components
1) Header (responsive consist on app logo)
2) Search (page logo with a search input and a button to fetch the gist list of a user)
3) Results (bootstrap card to display each gits)
4) forks (consist of a collapsable card block that displays the list of last 3 forks on demand)
5) Loading (an overlay loading block that can be available on demand for any xhr call)
### STEP 3: Deployment plan
1) create appropriate pagcake.json settings to deploy the app on heroku
2) setup a new app on github
3) use git repository to deploy the application on heroku 

## Potential improvements
1) Design of the error message can be improved and placed on top of the page.
2) "Loading!" message for the fork and the "no forks to display" message can be butified using appropriate loading images and bootstrap blocks.
3) Get forks button can be a pill with a different satae for both expand and collapse state.
4) The size on the responsice card blocks can be optimized based on the data size.   