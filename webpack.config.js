const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'electron-renderer',
  entry: [
    'webpack-dev-server/client?http://localhost:5000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/static/',
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    new ExtractTextPlugin({filename: 'bundle.css', allChunks: true}),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: ['babel-loader']
    }, {
      test: /\.(less|css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'postcss-loader', 'less-loader']
      })
    }]
  }
};
