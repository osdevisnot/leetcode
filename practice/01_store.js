let _state = {},
  _events = [],
  _actions = [];

let update = (update, action) => {
  _state = merge(_state, update);
  _events.map((handler) => handler(_state, action));
};
let store = {
  on(handler) {
    _events.push(handler);
    return store.off.bind(handler);
  },
  off(handler) {
    _events.splice(_events.indexOf(handler) >>> 0, 1);
  },
  get state() {
    return _state;
  },
  dispatch(action, ...payload) {
    if (typeof action !== "function") {
      action = _actions[action];
    }
    if (action) {
      let result = action(_state, ...payload);
      if (result) {
        return result.then
          ? result.then((response) => update(response, action))
          : update(result, action);
      }
    }
  },
};

export { store };
