export default [
  {
    namespace: 'count',
    state: 0,
    effect: () => {

    },
    reducer: {
      add(state) {
        return state + 1;
      },
      minus(state) {
        return state - 1;
      },
    },
    subscriptions: {
      setup({ history }) {
        return history.listen(({ pathname, query }) => {
          console.log(pathname, query);
        });
      },
    },
  },
];
