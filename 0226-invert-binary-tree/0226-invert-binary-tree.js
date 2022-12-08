var invertTree = function (root) {
  const resolve = (node) => {
    if(!node) return null;
    [node.left, node.right] = [node.right, node.left]
    resolve(node.left);
    resolve(node.right);
  }
  resolve(root)
  return root;
};
