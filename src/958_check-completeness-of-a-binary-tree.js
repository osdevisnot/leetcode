// https://leetcode.com/problems/check-completeness-of-a-binary-tree/
let isCompleteTree = (root) => {
  if (root == null) return true;

  let q = [root];
  let done = false;

  while (q.length) {
    let node = q.shift();
    if (node == null) {
      done = true;
    } else {
      if (done) return false;
      q.push(node.left);
      q.push(node.right);
    }
  }
  return true;
};
