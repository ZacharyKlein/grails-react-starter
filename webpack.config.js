module.exports = {
  entry: {
    // the "entry" point is where webpack "starts" it's processing - it will recursively pull in all the necessary imports and requires starting from here. 
    // You can specify multiple entry points if needed
    index: './grails-app/views/src/app/index.js'
  },
  output: {
    // "path" should be set to the root directory for your React source files
    path: './grails-app/assets/javascripts',

    // "publicPath" refers to the directory where your files can be accessed from the running app
    publicPath: '/assets/',

    // "filename" is the name of the generated JS bundle
    filename: 'bundle.js'
  },
  module: {

    // "loader" is a webpack processor - there's a lot of them available: https://webpack.github.io/docs/list-of-loaders.html
    // they can be installed via npm, usually as dev dependencies (since only the generated bundle needs to be in the war file)
    // i.e, npm install cool-loader --save-dev
    // https://webpack.github.io/docs/
    
    // in this example, we have specified: 
    // babel-loader to transpile our React source code
    // css-loader to allow us to pull in css files
    // url-loader and img-loader to handle images
    
    loaders: [
      {
        // "test" - regex to specify what files you want to run through the loader
        // "exclude" - regex of what files to ignore
        // "loader" - name of the loader
        // "query" - options to pass to the loader

        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url?limit=10000&prefix=assets/!img'
      }
    ]
  }
};
