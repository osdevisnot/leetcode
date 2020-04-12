// https://leetcode.com/problems/product-of-array-except-self/
let productExceptSelf = function (nums) {
  let answer = [1];
  for (let i = 1, len = nums.length; i < len; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }
  let product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = answer[i] * product;
    product = product * nums[i];
  }
  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4]));
