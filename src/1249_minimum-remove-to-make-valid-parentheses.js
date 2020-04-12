// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
let minRemoveToMakeValid = (str) => {
  let chars = str.split('');
  let stack = [];
  for (let idx = 0, len = chars.length; idx < len; idx++) {
    if (chars[idx] === '(') {
      stack.push(idx);
    } else if (chars[idx] === ')') {
      if (stack.length) stack.pop();
      else chars[idx] = '';
    }
  }

  for (let idx of stack) chars[idx] = '';

  return chars.join('');
};
