class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

}

var buildTree = function (preorder, inorder) {
  const len = preorder.length;
  if (!len) return null;

  const build = (preStart = 0, preEnd = len - 1, inStart = 0, inEnd = len - 1) => {
    if (preStart > preEnd) return null;
    const rootValue = preorder[preStart];
    let idx = inStart;

    while (idx < inEnd) {
      if (inorder[idx] === rootValue) break;
      idx++;
    }

    const lSize = idx - inStart;
    const left = build(preStart + 1, preStart + lSize, inStart, idx - 1);
    const right = build(preStart + lSize + 1, preEnd, idx + 1, inEnd);
    return new TreeNode(rootValue, left, right);
  };

  return build();
};
