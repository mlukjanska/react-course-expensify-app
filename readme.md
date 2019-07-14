## Table of contents
* [About Expensify](#about-expensify)
* [Installation](#installation)
* [Configuration](#configuration)
* [Run Application](#run-application)
* [Run Tests](#run-tests)
* [Configuration](#configuration)
* [Technologies](#technologies)
* [License](#license)

# About Expensify

Application to track personal expenses based on the udemy course ["The Complete React Developer Course (w/ Hooks and Redux)"](https://www.udemy.com/react-2nd-edition/learn/lecture/7900130?start=0#overview)

## Installation

Check out the code of the repository
Go to the folder
Run `npm install` - this will install required packages

## Configuration

In order to develop and test the application you will need to setup in [Firebase](https://firebase.google.com/) the development and test databases.
The database configuration files should be added in the project root
`.env.development`
`.env.test`

The configuration files should contain the following data
FIREBASE_API_KEY=<firebase api key>
FIREBASE_AUTH_DOMAIN=<firebase auth domain>
FIREBASE_DATABASE_URL=<firebase database url>
FIREBASE_PROJECT_ID=<firebase project id>
FIREBASE_STORAGE_BUCKET=<firebase storage bucket>
FIREBASE_MESSAGING_SENDER_ID=<firebase messaging sender id>

## Run Application

To start the app run `yarn run dev-server`
In the console it will 

## Run Tests

Command to run the tests, the watch flag adds capability of rerunning the tests upon changes in the code `yarn test --watch`

## Technologies

React 16
[Firebase](https://firebase.google.com/)
Redux
Jest 

## License
[MIT](https://choosealicense.com/licenses/mit/)
