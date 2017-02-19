const { resolve } = require('path');

var config = {
  entry: "./app/assets/jsx/main.jsx",
  output: {
    path: resolve(__dirname, "app/assets/javascripts"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    modules: [
      resolve(__dirname, 'app/assets/jsx')
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' }
    ]
  }
}

module.exports = config;