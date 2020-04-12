// https://leetcode.com/problems/subarray-sum-equals-k/
let subarraySum = (nums, k) => {
  let map = { 0: 1 };
  let count = 0;
  let sum = 0;
  for (let idx = 0, len = nums.length; idx < len; idx++) {
    sum += nums[idx];
    if (map[sum - k]) {
      count += map[sum - k];
    }
    map[sum] = (map[sum] || 0) + 1;
  }
  return count;
};

console.log(subarraySum([1, 1, 1], 2));
