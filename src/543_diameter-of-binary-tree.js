// https://leetcode.com/problems/diameter-of-binary-tree/
let diameterOfBinaryTree = (root) => {
  let height = 1;
  dfs(root);
  return height - 1;
  function dfs(node) {
    if (node == null) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);
    height = Math.max(height, left + right + 1);
    return Math.max(left, right) + 1;
  }
};
