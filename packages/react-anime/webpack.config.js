var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
  output: { library: 'ReactAnime', libraryTarget: 'commonjs2' },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  node: { Buffer: false },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    animejs: {
      root: 'anime',
      commonjs2: 'animejs',
      commonjs: 'animejs',
      amd: 'animejs',
    },
    'lodash.isequal': {
      root: 'lodash.isequal',
      commonjs2: 'lodash.isequal',
      commonjs: 'lodash.isequal',
      amd: 'lodash.isequal',
    },
  },
  mode: 'production'
};

module.exports = config;
