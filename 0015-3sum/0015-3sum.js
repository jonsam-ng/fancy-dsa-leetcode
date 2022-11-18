function twoSum(nums, s, sum) {
  const len = nums.length,
        r = [];
  if (len - 2 - s < 0) return r;
  let i = s,
      j = len - 1;

  while (i < j) {
    const diff = nums[i] + nums[j];

    if (diff === sum) {
      r.push([nums[i], nums[j]]);

      while (nums[i] === nums[i + 1]) i++;

      while (nums[j] === nums[j - 1]) j--;

      i++, j--;
    } else if (diff < sum) i++;else j--;
  }

  return r;
}

var threeSum = function (nums) {
  const sNums = nums.sort((a, b) => a - b),
        len = sNums.length,
        r = [];
  if (len < 3) return r;

  for (let i = 0; i < len - 2; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue;
    const sub = twoSum(sNums, i + 1, -sNums[i]);
    if (sub.length) r.push(...sub.map(k => [sNums[i], ...k]));
  }

  return r;
};
