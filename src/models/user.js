import fetch from "@utils/request";
export default [
  {
    namespace: "user",
    state: {},
    effects: {
      *login(action, effects) {
        console.log(action, effects);
        const result = yield fetch('/api/user/login', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json' }, body: JSON.stringify(action.payload)});
        console.log(result);
      }
    }
  }
];
