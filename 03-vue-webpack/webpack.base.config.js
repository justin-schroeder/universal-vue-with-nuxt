/**
 * File: webpack.base.config.js
 *
 * Contains definitions for parsing our .vue files, ESNext, sass, css, and files.
 */
const webpack = require('webpack')
let path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: './app.js'
  },
  output: {
    path: path.resolve(__dirname, '.bundles'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 1000
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'vue-src')]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('build.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': process.argv.includes('-p') ? `'production'` : `'development'`
      }
    })
  ]
}
