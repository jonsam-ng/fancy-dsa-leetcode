/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let sNums = nums.sort((a, b) => a - b),
    len = sNums.length,
    c = Number.MAX_SAFE_INTEGER;
  if (len < 2) return false;

  for (let i = 0; i < len - 2; i++) {
    let j = i + 1,
      k = len - 1;
    while (j < k) {
      const sum = sNums[i] + sNums[j] + sNums[k],
        diff = target - sum,
        pDiff = target - c;
      if (Math.abs(diff) < Math.abs(pDiff)) c = sum;
      if (diff === 0) break;
      if (diff > 0) {
        while (sNums[j] === sNums[j + 1]) j++;
        j++;
      } else {
        while (sNums[k] === sNums[k - 1]) k--;
        k--;
      }
    }
  }

  return c;
};
