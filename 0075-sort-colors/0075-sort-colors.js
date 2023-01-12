/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * @Two Point of Fast and Slow
 */
var sortColors = function (nums) {
  const len = nums.length,
    swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);
  let i = 0,
    j = len - 1,
    k = 0;

  while (k <= j) {
    const n = nums[k];
    if (n === 0) {
      nums[i] = 0;
      i++, k++;
    } else if (n === 2) {
      swap(j, k);
      nums[j] = 2;
      j--;
    } else k++;
  }

  for (let k = i; k <= j; k++) nums[k] = 1;
  return nums;
};
