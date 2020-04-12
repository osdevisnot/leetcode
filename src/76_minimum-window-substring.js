// https://leetcode.com/problems/minimum-window-substring/
let frequency = (str) => {
  let map = {};
  for (let char of str) map[char] = (map[char] || 0) + 1;
  return map;
};

let minWindow = (source, target) => {
  let answer = '', // collect answer as we discover minimum window
    map = frequency(target), // frequency map of target string
    count = Object.keys(map).length; // count of characters we are looking for

  // initialize the left and right pointers...
  let left = 0;
  let right = -1;

  while (right < source.length) {
    if (count !== 0) {
      // bad condition => left -> right : does not have valid substring (forward right pointer)
      right++;
      let char = source[right];
      if (map[char] !== undefined) {
        map[char]--;
        if (map[char] === 0) count--;
      }
    } else {
      // good condition => left -> right : is a valid substring (forward left pointer)
      if (!answer || right - left < answer.length - 1) {
        answer = source.slice(left, right + 1);
      }
      let char = source[left];
      if (map[char] !== undefined) {
        map[char]++;
        if (map[char] > 0) count++;
      }
      left++;
    }
  }
  return answer;
};

console.log(minWindow('ADOBECODEBANC', 'ABC'));
