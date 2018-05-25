import router from '@routes';
import Helper from 'react-redux-helper';
import models from '@models';
import '../themes/index';

const onReducer = (state) => {
  if (typeof state === 'object') {
    return { ...state };
  } else if (state instanceof Array) {
    return [...state];
  }
  return state;
};

const app = new Helper({
  onReducer,
});
app.router(router);
app.models(models);
app.start('#main');
