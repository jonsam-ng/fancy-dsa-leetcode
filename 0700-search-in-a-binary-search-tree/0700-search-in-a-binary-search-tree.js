var searchBST = function (root, val) {
  function traverse(node = root) {
    if (!node) return null;
    const v = node.val;
    if (v === val) return node;
    return traverse(v > val ? node.left : node.right);
  }

  return traverse();
};
