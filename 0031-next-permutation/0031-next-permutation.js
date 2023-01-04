/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const len = nums.length,
    swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]),
    reverse = (start, end) => {
      for (let i = start, j = end; i < j; i++, j--) swap(i, j);
    };
  // find the first asc pairs from the tail, we want the next greater permutation
  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= i; j--) {
      if (nums[i] < nums[j]) {
        // now we find the next greater postion
        swap(i, j);
        // we need the rest part to be smallest, and it'a already desc order.
        return reverse(i + 1, len - 1);
      }
    }
  }
  return reverse(0, len - 1);
};
