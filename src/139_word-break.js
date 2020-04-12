// https://leetcode.com/problems/word-break/
// simple bfs for str in wordDict
let wordBreak = (str, wordDict) => {
  let dictionary = new Set(wordDict);
  let visited = new Set();
  let queue = [0];

  while (queue.length) {
    let start = queue.shift();

    if (!visited.has(start)) {
      for (let x = start + 1, maxx = str.length; x <= maxx; x++) {
        if (dictionary.has(str.slice(start, x))) {
          if (x === maxx) return true;
          queue.push(x);
        }
      }
      visited.add(start);
    }
  }
  return false;
};

console.log(wordBreak('leetcode', ['leet', 'code']));
console.log(wordBreak('applepenapple', ['apple', 'pen']));
