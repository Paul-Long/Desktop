export default [
  {
    namespace: 'desktop',
    state: {
      show: false
    },
    reducer: {
      show(state) {
        state.show = true;
        return state;
      },
      hide(state) {
        state.show = false;
        return state;
      }
    }
  }
]
