// https://leetcode.com/problems/first-bad-version/
let solution = (isBadVersion) => {
  return (n) => {
    let start = 0,
      end = n;
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
