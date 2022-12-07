var minDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 1;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (!node.left && !node.right) return depth;
      queue.push(...[node.left, node.right].filter(Boolean));
    }

    depth++;
  }

  return depth;
};
