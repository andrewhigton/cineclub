# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



//from here
// {
//   "name": "satcinemaclub",
//   "version": "1.0.0",
//   "private": "true",
//   "proxy": "http://localhost:5000",
//   "description": "",
//   "main": "server.js",


  "start": "node server",
    "server": "nodemon server --ignore client",
    "client": "npm start --prefix client",
    "build": "react-scripts build",
    "dev": "concurrently \"npm run server\" \"npm run client\""


// "scripts": {
  //   "start": "react-scripts start",
  //   "build": "react-scripts build",
  //   "test": "react-scripts test",
  //   "eject": "react-scripts eject"
  // },

//   "scripts": {
//     "start": "node server",
//     "server": "nodemon server --ignore client",
//     "client": "npm start --prefix client",
//     "build": "react-scripts build",
//     "dev": "concurrently \"npm run server\" \"npm run client\""
//   },
//   "author": "andrew higton",
//   "license": "ISC",
//   "dependencies": {
//     "axios": "^0.19.2",
//     "bcryptjs": "^2.4.3",
//     "config": "^3.3.3",
//     "express": "^4.17.1",
//     "express-validator": "^6.9.2",
//     "jsonwebtoken": "^8.5.1",
//     "moment": "^2.29.1",
//     "mongodb": "^3.6.4",
//     "mongoose": "^5.11.17",
//     "morgan": "^1.10.0",
//     "query-string": "^6.14.0",
//     "react-addons-css-transition-group": "^15.6.2",
//     "react-bootstrap-carousel": "^4.1.1",
//     "react-stripe-checkout": "^2.6.3",
//     "react-transition-group": "^1.2.1",
//     "redux": "^4.0.5",
//     "uuid": "^3.4.0"
//   },
//   "devDependencies": {
//     "body-parser": "^1.19.0",
//     "compression": "1.7.4",
//     "concurrently": "^5.3.0",
//     "cors": "^2.8.5",
//     "dotenv": "7.0.0",
//     "express": "^4.16.4",
//     "nodemon": "^2.0.7",
//     "stripe": "6.28.0"
//   }
// }

<!-- "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client" -->