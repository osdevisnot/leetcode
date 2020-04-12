// https://leetcode.com/problems/valid-palindrome/
let isPalindrome = (s) => {
  let start = 0,
    end = s.length - 1;

  let REGEX = /[a-z0-9]/i;

  while (start < end) {
    while (start < end && !s[start].match(REGEX)) start++;
    while (start < end && !s[end].match(REGEX)) end--;

    if (s[start].toLowerCase() !== s[end].toLowerCase()) return false;

    start++;
    end--;
  }

  return start >= end;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
