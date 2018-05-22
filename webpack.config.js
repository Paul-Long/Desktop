const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  target: 'electron-renderer',
  entry: {
    main: './src/entries/index',
    login: './src/entries/login'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:3000/static/',
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'windows'),
      'node_modules'
    ],
    alias: {
      'react': path.resolve(__dirname, 'node_modules/react-redux-helper/react.js'),
      '@src': path.resolve(__dirname, 'src'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@models': path.resolve(__dirname, 'src/models')
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
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
