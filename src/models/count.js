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
    }
  }
]
