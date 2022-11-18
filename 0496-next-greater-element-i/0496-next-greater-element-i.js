var nextGreaterElement = function (nums1, nums2) {
  const len = nums2.length,
        stack = [],
        table = {},
        isEmpty = () => !stack.length,
        peek = () => stack.at(-1);

  for (let i = len - 1; i >= 0; i--) {
    const e = nums2[i];

    while (!isEmpty() && peek() <= e) stack.pop();

    table[e] = isEmpty() ? -1 : peek();
    stack.push(e);
  }

  return nums1.map(n => table[n]);
};
