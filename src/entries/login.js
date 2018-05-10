import '../themes/index';
import router from '@routes/login';
import Helper from 'react-redux-helper';

const login = new Helper();
login.router(router);
login.start('#main');
