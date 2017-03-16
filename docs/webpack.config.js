var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [ './main.js' ],
  output: { path: path.join(__dirname, './assets'), filename: 'main.min.js' },
  resolve: {
    extensions: [ '.js', '.jsx', '.scss', '.css' ],
    modules: [ path.resolve(__dirname, 'src'), 'node_modules' ]
  },
  plugins: [
    new ExtractTextPlugin('main.min.css')//,
    // new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compressor: { screw_ie8: true, warnings: false },
    //   mangle: { screw_ie8: true },
    //   output: { comments: false, screw_ie8: true }
    // })
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: [
            { loader: 'css-loader', options: { modules: true } },
            {
              loader: 'postcss-loader',
              options: {
                // Doesn't work, postcss forces you to use a config file! >:(
                plugins: () => [ precss, autoprefixer ]
              }
            }
          ]
        })
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname),
    publicPath: '/assets/',
    historyApiFallback: true
  }
};
