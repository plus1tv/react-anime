const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: {
    app: './src/react-anime.js'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'react-anime.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ReactAnime',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
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
};