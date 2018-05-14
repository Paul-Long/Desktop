export default [
  {
    namespace: 'user',
    state: {},
    effects: {
      *login(action, effect) {
        console.log(action, effect);
      }
    }
  }
]
