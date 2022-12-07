var twoSum = function (nums, start, target) {
  const len = nums.length,
    rst = [];
  let p1 = start,
    p2 = len - 1;

  while (p1 < p2) {
    const n1 = nums[p1],
      n2 = nums[p2],
      sum = n1 + n2;

    if (sum > target) {
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      rst.push([n1, n2]);
      p2--, p1++;
    }
  }

  return rst;
};

var threeSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b),
    len = nums.length,
    rst = [],
    memo = new Set();
  if (len < 3) return rst;

  for (let i = 0; i < len - 2; i++) {
    const arrs = twoSum(sortedNums, i + 1, -sortedNums[i]);
    if (!arrs.length) continue;
    
    arrs
      .map((arr) => [...arr, sortedNums[i]].sort((a, b) => a - b))
      .forEach((res) => {
        const key = res.join(",");
        if (!memo.has(key)) {
          rst.push(res);
          memo.add(key);
        }
      });
  }
  return rst;
};
