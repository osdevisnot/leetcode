// https://leetcode.com/problems/next-permutation/
let nextPermutation = (nums) => {
  let swap = (x, y) => {
    [nums[x], nums[y]] = [nums[y], nums[x]];
  };
  let reverse = (start) => {
    let end = nums.length - 1;
    while (start <= end) {
      swap(start++, end--);
    }
  };

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(i, j);
  }
  reverse(i + 1);
};
