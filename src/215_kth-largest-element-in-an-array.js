// https://leetcode.com/problems/kth-largest-element-in-an-array/

// let findKthLargest = (nums, k) => {
//   return nums.sort((a, b) => b - a)[k - 1];
// };

let swap = (nums, x, y) => ([nums[x], nums[y]] = [nums[y], nums[x]]);

let quickSelect = (nums, start, end, k) => {
  for (var x = start, y = start; y < end; y++) {
    if (nums[y] <= nums[end]) {
      swap(nums, x++, y);
    }
  }
  swap(nums, x, y);
  let mid = end - x + 1;
  if (mid === k) return nums[x];
  if (mid > k) return quickSelect(nums, x + 1, end, k);
  else return quickSelect(nums, start, x - 1, k - mid);
};

let findKthLargest = (nums, k) => {
  return quickSelect(nums, 0, nums.length - 1, k);
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
