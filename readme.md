#Grails/React Starter
A starter project for a basic React/Webpack configuration within a Grails app.

* Minimal webpack config is provided
* Loading images from JSX and from `require`'d CSS is demostrated 

#Setup:
* `grails run-app` or `../gradlew bootRun` to start the app on `http://localhost:8080`
* The Gradle-Node plugin is configured and will take care of installing node if necessary, and installing dependencies
* Custom Gradle-Node tasks take care of generating the `bundle.js` when the app is started and when the app the packaged (as a war or jar file)

##Conventions:
* React source files are placed under `grails-app/views/src` (this can be changed - edit `webpack.config.js` as desired)
* Barebones (and annotated) webpack.config.js with babel, css, url and img loaders configured
* webpack-generated `bundle.js` is placed under `grails-app/assets` and delivered via the Grails Asset Pipeline

##Coming soon:
* Unified test suite (Mocha + `expect.js` for React tests, Spock for Grails unit/integration tests, with optional ability to run together)
* Demonstrate loading of images/assets from the asset-pipeline from React/JSX
* Suggestions?
