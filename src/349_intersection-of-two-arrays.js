// https://leetcode.com/problems/intersection-of-two-arrays/
let intersection = function (nums1, nums2) {
  let map = {},
    result = [];
  for (let num of nums1) {
    map[num] = 1;
  }
  for (let num of nums2) {
    if (map[num]) map[num] = 2;
  }
  for (let num in map) {
    if (map[num] == 2) {
      result.push(num);
    }
  }
  return result;
};
