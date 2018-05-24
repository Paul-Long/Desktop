import '../themes/index';
import router from '@routes/login';
import Helper from 'react-redux-helper';
import user from '@models/user';

const onEffect = (sagaWithCatch, sagaEffects, model, key) => {
  console.log(sagaWithCatch, sagaEffects, model, key);
  return function* (action) {
    try {
      yield sagaWithCatch(action, sagaEffects);
    } catch (err) {
      throw new Error(err);
    }
  }
};

const login = new Helper({
  // onEffect
});
login.router(router);
login.model(user);
login.start('#main');
