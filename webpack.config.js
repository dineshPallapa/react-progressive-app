var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
      inline: true,
      contentBase: './src',
      port: 5000
    },

    devtool: 'cheap-module-eval-source-map',
    entry: './src/js/index.js',

    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
        }
      ]
    },

    output: {
      path: 'src',
      filename: 'js/bundle.min.js'
    },

    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
