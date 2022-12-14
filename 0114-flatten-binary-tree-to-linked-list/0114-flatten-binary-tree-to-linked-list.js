var flatten = function (root) {
  if (!root) return null;
  [root.left, root.right].map(head => head ? flatten(head) : null);
  const [left, right] = [root.left, root.right];
  [root.left, root.right] = [null, left];
  let p = root;

  while (p.right) p = p.right;

  p.right = right;
};
