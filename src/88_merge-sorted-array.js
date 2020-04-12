// https://leetcode.com/problems/merge-sorted-array/
let merge = (nums1, m, nums2, n) => {
  let pointer = m + n - 1;
  m--;
  n--;
  while (m > -1 && n > -1) {
    if (nums1[m] > nums2[n]) {
      nums1[pointer--] = nums1[m--];
    } else {
      nums1[pointer--] = nums2[n--];
    }
  }
  while (m > -1) nums1[pointer--] = nums1[m--];
  while (n > -1) nums1[pointer--] = nums2[n--];
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
