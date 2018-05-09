export default [
  {
    namespace: 'count',
    state: 0,
    effect: () => {

    },
    reducer: {
      add(state, action) {
        return state + 1
      },
      minus(state, action) {
        return state - 1
      }
    },
    subscriptions: {
      setup({ dispatch, history }) {
        console.log(history);
        return history.listen(({ pathname, query }) => {
          console.log(pathname, query);
        });
      }
    }
  }
]
