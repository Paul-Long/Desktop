import '../themes/index';
import router from '@routes';
import Helper from 'react-redux-helper';
import models from '@models';

const onReducer = (state, action) => {
  if (typeof state === 'object') {
    return { ...state };
  } else if (state instanceof Array) {
    return [...state];
  }
  return state;
};

const app = new Helper({
  onReducer
});
app.router(router);
app.models(models);
app.start('#main');
