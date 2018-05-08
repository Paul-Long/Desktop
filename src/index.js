import './themes';
import Routes from './routes';
import Helper from 'react-redux-helper';
import models from './models';

const app = new Helper();
app.router(Routes);
app.reducerMiddleware(function (state, action) {
});
app.models(models);
app.start('#main');
