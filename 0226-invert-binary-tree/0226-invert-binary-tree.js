var invertTree = function (root) {
  if (!root) return root;
  [root.right, root.left] = [invertTree(root.left), invertTree(root.right)];
  return root;
};
