var kthSmallest = function (root, k) {
  let i = 0,
      r = null;

  const traverse = (node = root) => {
    if (!node) return null;
    traverse(node.left);
    if (++i === k) return r = node.val;
    traverse(node.right);
  };

  return traverse(), r;
};
