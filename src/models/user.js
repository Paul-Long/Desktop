import fetch from '@utils/request';

export default [
  {
    namespace: 'user',
    state: {},
    effects: {
      * login({ payload }, { put }) {
        const result = yield fetch('/api/user/login', {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const { status, content, message } = result;
        yield put({
          type: 'user.loginDone',
          data: {
            success: status === 200,
            content,
            message,
          },
        });
      },
    },
    reducer: {
      loginDone(state, { data }) {
        state = { ...state };
        state.login = { ...data };
        return state;
      },
    },
  },
];
