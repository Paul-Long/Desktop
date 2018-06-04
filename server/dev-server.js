import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(5000, 'localhost', callback);

function callback(err) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:5000/');
}
