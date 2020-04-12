class Emitter {
  constructor() {
    this._events = [];
  }
  subscribe(event, handler) {
    let idx = (this._events[event] || (this._events[event] = [])).push(handler);
    return this.unsubscribe.bind(this, event, handler);
  }
  unsubscribe(event, handler) {
    this._events.splice(this._events.indexOf(handler) >>> 0, 1);
  }
  emit(event, ...payload) {
    this._events[event] &&
      this._events[event].map((handler) => {
        handler(...payload);
      });
  }
}
