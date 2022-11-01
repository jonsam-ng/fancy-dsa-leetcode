var findMedianSortedArrays = function (nums1, nums2) {
  let prev,
      cur,
      i = 0;
  const mid = (nums1.length + nums2.length + 1) / 2;

  while (nums1.length || nums2.length) {
    prev = cur;
    i++;
    const [n1, n2] = [nums1[0], nums2[0]];
    const [nums, n] = n2 === undefined || n1 <= n2 ? [nums1, n1] : [nums2, n2];
    nums.shift();
    cur = n;
    if (i >= mid) break;
  }

  return i === mid ? cur : (prev + cur) / 2;
};
