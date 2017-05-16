const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const env = process.env['NODE_ENV'];
const isProduction = env && env.match(/production/);

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: ['./main.js'],
  output: { path: path.join(__dirname, './assets/dist'), filename: 'main.min.js' },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.resolve('./node_modules/react'),
    },
  },
  plugins: [
    new ExtractTextPlugin(
      'main.min.css'
    ),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { screw_ie8: true, warnings: false },
      mangle: { screw_ie8: true },
      output: { comments: false, screw_ie8: true }
    })
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { modules: true } },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [precss, autoprefixer],
              },
            },
          ],
        }),
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname),
    publicPath: '/assets/',
    historyApiFallback: true,
  },
};
