/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let sum = 0, rst = false;
  const resolve = (node) => {
    if (!node) return;
    const value = node.val;
    sum += value;
    if (!node.left && !node.right && sum === targetSum) return rst = true;
    resolve(node.left);
    resolve(node.right);
    sum -= value;
  };
  
  resolve(root);
  return rst;
};
