// https://leetcode.com/problems/lru-cache/
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  get(key) {
    return this.map.has(key) ? this.put(key, this.map.get(key)) : -1;
  }
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);

    this.map.set(key, value);

    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value);
    }
    return value;
  }
}

let cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
console.log(cache);
cache.put(3, 3);
console.log(cache);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));
console.log(cache);
