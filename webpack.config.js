var path = require('path');

module.exports = {
  entry: {
    index: './src/main/js/app/app.js'
  },
  output: {
    path: './grails-app/assets/javascripts',
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src/main/js'),
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
