const path = require('path');
var HtmlWebpack = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpack({
      title: 'My Application',
      inject: 'head',
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin([
      {from:'src/images',to:'images'}
    ])
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style-loader','css-loader']
      },
      {
         test: /\.(jpe?g|png|gif)?$/,
         loader: "file-loader",
         options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          publicPath: '../'
         }
      },
     {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=application/font-woff',
        options: {
         name: '[name].[ext]',
         outputPath: 'fonts/',
         publicPath: '../'
        }
      },
      {
         test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
         loader: 'file-loader?limit=10000&mimetype=application/octet-stream',
         options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../'
         }
      },
      {
         test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
         loader: 'file-loader',
         options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          publicPath: '../'
         }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?limit=10000&mimetype=image/svg+xml',
        options: {
         name: '[name].[ext]',
         outputPath: 'fonts/',
         publicPath: '../'
        }
      }
    ]
  },
  devServer: {
    host: '127.0.0.1',
    port: 5020,
  }
};
