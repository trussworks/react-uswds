# ReactUSWDS example application

This app is meant to demonstrate some of the features and components that make up the @trussworks/react-uswds library. It is just an example, and is currently not deployed or used anywhere other than for local development and testing.

## Pre-requisites

Since this application points to the local version of @trussworks/react-uswds, the library must be built before starting the application. In the project root (up one level from this README), you can build the library and install example app dependencies with:

```
yarn example:install
```

Then you can start the example app dev server with:

```
yarn example:start
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In this directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

_Note:_ Currently the `start, test, build` scripts are prepended with `SKIP_PREFLIGHT_CHECK=true` in `package.json`. This is to get around the issue that Create React App requires specific versions of certain libraries to run, and the ReactUSWDS library is using newer versions of those libraries (notably `babel-jest`). This was the fastest/easiest workaround for now. Relevant discussion at https://github.com/facebook/create-react-app/issues/6756.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
