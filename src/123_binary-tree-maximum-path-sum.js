// https://leetcode.com/problems/binary-tree-maximum-path-sum/
let maxPathSum = (root) => {
  let max = -Infinity;

  let maxSum = (root) => {
    if (!root) return 0;
    let left = maxSum(root.left);
    let right = maxSum(root.right);
    max = Math.max(max, root.val + left + right);
    return Math.max(0, root.val + left, root.val + right);
  };

  maxSum(root);

  return max;
};
