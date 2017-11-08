const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './client/components/App.jsx'),
  output: {
    path: path.resolve(__dirname, './client'),
    filename: 'bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { presets: ['es2015', 'react'] }
      }
    ]
  }
}