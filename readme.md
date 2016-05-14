#Grails/React Starter
A starter project for a basic React/Webpack configuration within a Grails app, with support for hot-loading with `webpack-dev-server`.

* [Grails](https://grails.org) - `3.1.6`
* [React](https://facebook.github.io/react/) - `^15.0.1`
* [Webpack](https://webpack.github.io/) - `^1.13.0`

##Notes:
* Gradle-node plugin is used to wrap node/npm tasks and unify the build process
* Minimal webpack config is provided
* Configurable `webpack-dev-server` with `react-hot-load` support is provided (includes custom GSP TagLib to handle dynamic linking to WDS bundles)
* Babel transpiler is used to support JSX & ES6 code
* Loading images from JSX and from `require`'d CSS is demonstrated 
* React-bootstrap is demonstrated

###Please Note!
**In order to use `react-hot-load` for instant Javascript updates without reloading the page, it will be necesssary to run both the Grails app and the `webpack-dev-server` simultaneously.**

##Setup:
###Option 1:
_(With `webpack-dev-server` and `react-hot-load`):_
* `grails run-app` or `./gradlew bootRun` to start the app on `http://localhost:8080`
* `npm start` to start the webpack-dev-server on `http://localhost:3000` 
* The `webpack-dev-server` will generate the `bundle.js` in memory and automatically upate the browser when it detects a change in the source files. 
* When the app is run in production or packaged as a war/jar, the bundle will be statically generated (without WDS) and included with the application distribution.

###Option 2: 
_(With statically generated `webpack` bundle - you will need to run `webpack` yourself after changing Javascript or use `webpack --watch`)_
* **Edit `application.yml`** - change `webpack.dev-server.enabled` to `false`.
* `grails run-app` or `./gradlew bootRun` to start the app on `http://localhost:8080`
* The [Gradle-Node plugin](https://github.com/srs/gradle-node-plugin) is configured and will take care of installing node if necessary, and installing dependencies
* Custom Gradle-Node tasks take care of generating the `bundle.js` when the app is started and when the app the packaged (as a war or jar file)
* E.g, to run webpack in `watch` mode, use `./gradlew npm_run_webpack`, or `npm run webpack` (if you have npm installed locally)

##Conventions:
* React source files are placed under `grails-app/views/src` (this can be changed - edit `webpack.config.js` as desired)
* Barebones (and annotated) webpack.config.js with babel, css, url and img loaders configured
* webpack-generated `bundle.js` is placed under `grails-app/assets` and delivered via the Grails Asset Pipeline
* `WebpackTagLib` provided to dynamically load `bundle.js` from `webpack-dev-server` if enabled & running, otherwise loads via asset pipeline. Use the tag `<webpack:bundle bundle='bundle.js' devServer='false' />`. All attributes are optional (defaults shown).

##Coming soon:
* Unified test suite (Mocha + `expect.js` for React tests, Spock for Grails unit/integration tests, with optional ability to run together)
* Demonstrate loading of images/assets from the asset-pipeline from React/JSX
* Redux?
* Websockets?
* Suggestions?
