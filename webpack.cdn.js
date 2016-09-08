var config = require('./webpack.config.js');

var cdnConfig = Object.assign(
  {},
  config,
  {
    output: {
      library: 'ReactAnime',
      libraryTarget: 'var'
    },

    externals: [
      {
        "react": {
          var: 'React',
        },
        "animejs": {
          var: 'anime',
        }
    }]
  });

module.exports = cdnConfig;