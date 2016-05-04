#Grails/React Starter
A starter project for a basic React/Webpack configuration within a Grails app.

* [Grails](https://grails.org)
* [React](https://facebook.github.io/react/)
* [Webpack](https://webpack.github.io/)

##Notes:
* Gradle-node plugin is used to wrap node/npm tasks and simplify build process
* Minimal webpack config is provided
* Babel transpiler is used to support JSX & ES6 code
* Loading images from JSX and from `require`'d CSS is demostrated 

##Setup:
* `grails run-app` or `../gradlew bootRun` to start the app on `http://localhost:8080`
* The [Gradle-Node plugin](https://github.com/srs/gradle-node-plugin) is configured and will take care of installing node if necessary, and installing dependencies
* Custom Gradle-Node tasks take care of generating the `bundle.js` when the app is started and when the app the packaged (as a war or jar file)
* E.g, to run webpack in `watch` mode, use `./gradlew npm_run_webpack`, or `npm run webpack` (if you have npm installed locally)

##Conventions:
* React source files are placed under `grails-app/views/src` (this can be changed - edit `webpack.config.js` as desired)
* Barebones (and annotated) webpack.config.js with babel, css, url and img loaders configured
* webpack-generated `bundle.js` is placed under `grails-app/assets` and delivered via the Grails Asset Pipeline

##Coming soon:
* Unified test suite (Mocha + `expect.js` for React tests, Spock for Grails unit/integration tests, with optional ability to run together)
* Demonstrate loading of images/assets from the asset-pipeline from React/JSX
* Demonstrate use of [React-bootstrap](http://react-bootstrap.github.io/)
* Demonstrate use of webpack-dev-server hot-reloading
* Suggestions?
