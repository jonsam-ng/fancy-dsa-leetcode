class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

}

var serialize = function (root) {
  const nodes = [];

  function traverse(node) {
    nodes.push(node?.val ?? null);
    if (!node) return;
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return JSON.stringify(nodes);
};

var deserialize = function (data) {
  function build(nodes) {
    function build(nodes) {
      if (!nodes || !nodes.length) return null;
      const node = nodes.shift();
      if (node === null) return null;
      return new TreeNode(node, build(nodes), build(nodes));
    }

    return build(JSON.parse(data));
  }

  return build(JSON.parse(data));
};
