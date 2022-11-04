var maxDepth = function (root) {
  const traverse = (node = root) => {
    if (!node) return 0;
    const [left, right] = [node.left, node.right].map(node => traverse(node));
    return Math.max(left, right) + 1;
  };

  return traverse();
};
