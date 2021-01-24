# Polity-API

My Politics Quality API

### Set Up

1. Create GH Repo for the API
1. git clone <repolinkhere>
1. touch `db.json` file where data will live
1. Formulate JSON data

#### Create DB

1. npm i -g json-server (may need to point to a specific registry)
1. json-server --watch db.json
1. View at localhost
1. push to repo

#### Initialize Project, Write Backend to Serve it up

1. `npm init -y`
1. `npm i` (package-lock.json)
1. `npm i json-server` (add to pl.json)
1. In package-json file make entry `server.js` && add a script `"start": "node server.js"`
1. push to repo

#### Deploy it

1. `brew tap heroku/brew && brew install heroku` (will either install or upgrade heroku)
1. `brew upgrade heroku/brew/heroku` (to upgrade heroku if needed) `brew doctor` will also patch up homebrew
1. `heroku login` to log in w/ CLI
1. `heroku create <name-of-app>` will house your project at the heroku-given url: "https://polity-api.herokuapp.com/"
