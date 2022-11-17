var advantageCount = function (nums1, nums2) {
  const on1 = nums1.sort((a, b) => a - b),
        on2 = nums2.map((n, i) => [n, i]).sort((a, b) => a[0] - b[0]);
  return on2.reduceRight((r, [cur, i]) => (r[i] = on1.at(-1) > cur ? on1.pop() : on1.shift(), r), []);
};
