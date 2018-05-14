import '../themes/index';
import router from '@routes/login';
import Helper from 'react-redux-helper';
import user from '@models/user';

const login = new Helper();
login.router(router);
login.model(user);
login.start('#main');
