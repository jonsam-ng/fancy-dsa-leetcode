var bstToGst = function (root) {
  let sum = 0;

  function traverse(node = root) {
    if (!node) return;
    traverse(node.right);
    node.val = sum += node.val;
    traverse(node.left);
  }

  return traverse(), root;
};
