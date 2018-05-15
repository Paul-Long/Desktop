import '../themes/index';
import router from '@routes/login';
import Helper from 'react-redux-helper';
import user from '@models/user';

const onEffect = (...arg) => {
  console.log(arg);
  return function* (...arg) {
    try {
      console.log(arg);
    } catch (err) {
      throw new Error(err);
    }
  }
};

const login = new Helper({
  onEffect
});
login.router(router);
login.model(user);
login.start('#main');
