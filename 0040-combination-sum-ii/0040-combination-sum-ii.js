var combinationSum2 = function (candidates, target) {
  const nums = candidates.sort(),
        len = candidates.length,
        r = [],
        s = [],
        toSum = arr => arr.reduce((sum, v) => sum += v, 0),
        resolve = (i = 0) => {
    const sum = toSum(s);
    if (sum === target) r.push([...s]);
    if (sum >= target) return;

    for (let j = i; j < len; j++) {
      if (j > i && nums[j] === nums[j - 1]) continue;
      s.push(nums[j]);
      resolve(j + 1);
      s.pop();
    }
  };

  return resolve(), r;
};
