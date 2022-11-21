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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const subStrings = {},
    ds = [];
  function traverse(node = root) {
    if (!node) return "#";
    const ss =
        node.val + "." + traverse(node.left) + "." + traverse(node.right),
      freq = subStrings[ss] ?? 0;
    if (freq === 1) ds.push(node);
    subStrings[ss] = freq + 1;
    return ss;
  }
  return traverse(), ds;
};
