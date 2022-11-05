/**
 * @desc pre sum of array
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sumArray = nums.reduce(
    (sum, num, i) => ((sum[i + 1] = num + sum[i]), sum),
    [0]
  );
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  const len = this.nums.length;
  if (left < 0 || right >= len) return 0;
  return this.sumArray[right + 1] - this.sumArray[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
