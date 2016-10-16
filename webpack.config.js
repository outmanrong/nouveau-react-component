var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    components: './src/js/entry/entry.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      },
      minimize: true
    })
  ],
  output: {
      path: __dirname + '/dist',
      filename: '[name].bundle.js'
  },
  module: {
      loaders: [
            {
            test: /\.js$/,
            loader: 'babel-loader',
            query:
            {
                presets:['es2015', 'react']
            }
            
            },
            { 
              test: /\.jsx?$/, 
              loader: 'babel-loader', 
              exclude: /(node_modules|bower_components|src\/lib)/,
              query:
                {
                    presets:['es2015', 'react']
                } 
            },
      ]
  },
  resolve: {
      extensions: ['', '.jsx', '.js', '.json', '.scss'],
  }
};