const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const ENV = process.env.NODE_ENV;

const config = {
  target: 'electron-renderer',
  entry: {
    main: './src/entries/index',
    login: './src/entries/login',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'http://localhost:5000/static/',
    filename: '[name].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'windows'),
      'node_modules',
    ],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@models': path.resolve(__dirname, 'src/models'),
    },
  },
  plugins: [
    new CleanPlugin([path.resolve(__dirname, 'dist')], { verbose: true }),
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }, {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader: 'less-loader',
              options: {
                modifyVars: require('./src/themes/ant-theme'),
              },
            },
          ],
        }),
      },
    ],
  },
};
config.mode = ENV;
if (ENV === 'development') {
  config.devtool = 'eval-source-map';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
} else if (ENV === 'production') {
  config.optimization = {
    minimize: true,
    noEmitOnErrors: true,
    concatenateModules: true,
  };
}
module.exports = config;
