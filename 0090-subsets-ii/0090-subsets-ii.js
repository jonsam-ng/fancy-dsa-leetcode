var subsetsWithDup = function (nums) {
  const sortedNums = nums.sort(),
    len = nums.length,
    r = [],
    s = [],
    resolve = (i = 0) => {
      r.push([...s]);

      for (let j = i; j < len; j++) {
        if (j > i && sortedNums[j] === sortedNums[j - 1]) continue;
        s.push(sortedNums[j]);
        resolve(j + 1);
        s.pop();
      }
    };

  return resolve(), r;
};
