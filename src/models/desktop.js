export default [
  {
    namespace: 'desktop',
    state: {
      show: false
    },
    reducer: {
      show(state, action) {
        state = {...state};
        state.show = true;
        return state;
      },
      hide(state, action) {
        state = {...state};
        state.show = false;
        return state;
      }
    }
  }
]
