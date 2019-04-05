export default class Store {
  set(key, value) {
    this[key] = value;
  }

  get(key) {
    return this[key];
  }

  clear(key) {
    this[key] = undefined;
  }
}