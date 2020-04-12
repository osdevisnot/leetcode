// https://leetcode.com/problems/verifying-an-alien-dictionary/
let isAlienSorted = (words, order) => {
  let map = {};
  for (let idx = 0, len = order.length; idx < len; idx++) {
    map[order[idx]] = idx;
  }
  // loop over words and compare each word with next...
  for (let i = 0, len = words.length - 1; i < len; i++) {
    let word = words[i];
    let next = words[i + 1];
    let pointer = 0;
    // advance the pointer while characters are same...
    while (word[pointer] === next[pointer]) pointer++;
    if (
      typeof next[pointer] === 'undefined' || // check for empty character
      map[word[pointer]] > map[next[pointer]] // compare indexes
    ) {
      return false;
    }
  }
  return true;
};
