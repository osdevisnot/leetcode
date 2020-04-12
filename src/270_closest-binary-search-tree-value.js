// https://leetcode.com/problems/closest-binary-search-tree-value/
let closestValue = (root, target) => {
  let val,
    closest = root.val;

  while (root) {
    val = root.val;
    closest =
      Math.abs(val - target) < Math.abs(closest - target) ? val : closest;
    root = target < root.val ? root.left : root.right;
  }
  return closest;
};
