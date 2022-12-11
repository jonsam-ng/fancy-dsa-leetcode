function binarySearch(arr, target) {
  const len = arr.length;
  if (!arr.length) return -1;
  let left = 0,
    right = len - 1;
  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // we find it
      return mid;
    }
  }
  // we want the left pointer which is less bigger than target
  return left;
}

var lengthOfLIS = function (nums) {
  const len = nums.length;
  if (!len) return 0;
  // initiate the first num
  const seq = [nums[0]];
  for (let i = 1; i < len; i++) {
    const n = nums[i];
    // is not strictly increasing, use >=
    if (n > seq.at(-1)) seq.push(n);
    // we want the seq as small as possible
    else {
      const idx = binarySearch(seq, n);
      // idx cannot bigger than tail of seq
      seq[idx] = n;
    }
  }
  return seq.length;
};
