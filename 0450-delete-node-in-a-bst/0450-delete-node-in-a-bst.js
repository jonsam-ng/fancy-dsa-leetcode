function getMin(node) {
  while (node.left) node = node.left;

  return node;
}

var deleteNode = function (root, key) {
  if (!root) return null;
  const v = root.val;

  if (v === key) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    const minNode = getMin(root.right);
    root.right = deleteNode(root.right, minNode.val);
    root.val = minNode.val;
  } else if (v > key) root.left = deleteNode(root.left, key);else root.right = deleteNode(root.right, key);

  return root;
};
