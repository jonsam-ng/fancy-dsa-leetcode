class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

}

var buildTree = function (inorder, postorder) {
  const len = inorder.length;

  function build(is = 0, ie = len - 1, ps = 0, pe = len - 1) {
    if (ps > pe) return null;
    const root = postorder[pe],
          idx = inorder.indexOf(root),
          leftLen = idx - is - 1;
    return new TreeNode(root, build(is, idx - 1, ps, ps + leftLen), build(idx + 1, ie, ps + leftLen + 1, pe - 1));
  }

  return build();
};
