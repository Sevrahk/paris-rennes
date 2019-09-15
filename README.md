# De Paris à Rennes

## Setup

### Prerequisite

In order to install and run the project you need to have the following component installed

- NodeJS

### Clone the project

    git clone https://github.com/Sevrahk/paris-rennes.git

Then enter into your project folder

    cd paris-rennes

### Install dependencies

Run following command

    npm install

### Set up environment variables

Duplicate the `.env` file to create a `.env.locale` file in your project root.

Add your custom values to your newly created file variables (API credencials, ...)

For unit testing please create `.env.test.locale` file and implement your custom variables with test environment values

## App architecture

```js
- public/ //Host page folder
- src/ //App folder
    |-assets/
        |-scss/ //All SCSS files
        |-img/ //Images folder
    |-components/ //All app components
    |-helpers/ //Helpers
    |-utils/ //Utility functions
    |-views/ //Container pages
    |-index.js //App root file
```

## Use the app

### Launch the app with `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Run tests with `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Build the app for production with `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
