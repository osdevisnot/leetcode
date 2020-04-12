// https://leetcode.com/problems/search-in-rotated-sorted-array/
var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    // fast path, early returns...
    if (nums[mid] === target) return mid;
    if (nums[start] === target) return start;
    if (nums[end] === target) return end;

    // left part is sorted...
    if (nums[mid] > nums[start]) {
      if (target > nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    // right part is sorted...
    else if (nums[mid] < nums[end]) {
      if (target > nums[mid] && target < nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      return -1;
    }
  }
  return nums[start] === target ? start : -1;
};
