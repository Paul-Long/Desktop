export default [
  {
    namespace: 'tabs',
    state: {
      opened: [{ tabId: '/home', text: '首页' }],
      current: '/home'
    },
    reducer: {
      change(state, action) {
        const { tabId } = action;
        state.current = tabId;
        return state;
      },
      open(state, action) {
        const { tab, isNew } = action;
        state.opened = [...state.opened, tab];
        state.current = tab.tabId;
        return state;
      },
      close(state, action) {
        const { tab } = action;
        const opened = [];
        let isDelete = false;
        let current;
        for (const t of state.opened) {
          if (t.tabId !== tab.tabId) {
            opened.push(t);
            if (!isDelete && tab.tabId === state.current) {
              current = t.tabId;
            }
          } else {
            isDelete = true;
          }
        }
        state.opened = opened;
        if (current) {
          state.current = current;
        }
        return state;
      }
    }
  }
]
