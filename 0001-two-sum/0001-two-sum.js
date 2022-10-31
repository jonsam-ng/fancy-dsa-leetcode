/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  const hit = (n) => {
    const i = hash[target - n];
    return [i !== undefined, i];
  };

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i],
      [isHit, i0] = hit(n);
    if (isHit) return [i0, i];
    hash[n] = i;
  }
};
