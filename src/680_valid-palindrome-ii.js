// https://leetcode.com/problems/valid-palindrome-ii/
const validPalindrome = (str, skipped = false) => {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      if (skipped) return false;
      return (
        validPalindrome(str.substring(i, j), true) ||
        validPalindrome(str.substring(i + 1, j + 1), true)
      );
    }
  }
  return true;
};
