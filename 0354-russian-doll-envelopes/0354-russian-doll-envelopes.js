var findLastLarger = function (arr, n) {
  const len = arr.length;
  let left = 0,
    right = len - 1;

  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    if (arr[mid] < n) left = mid + 1;
    else if (arr[mid] > n) right = mid - 1;
    else return mid;
  }
  
  return left;
};

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((e1, e2) => (e1[0] === e2[0] ? e2[1] - e1[1] : e1[0] - e2[0]));
  const nums = envelopes.map(([w, h]) => h),
    len = nums.length,
    r = [nums[0]];

  for (let i = 1; i < len; i++) {
    const n = nums[i];
    if (n > r.at(-1)) r.push(n);
    else r[findLastLarger(r, n)] = n;
  }

  return r.length;
};
