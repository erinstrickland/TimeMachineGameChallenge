var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    './main.js'
  ],
  mode: "development",
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 7000,
    proxy: {
      '/api': 'http://localhost:5050'
    }
  }
}