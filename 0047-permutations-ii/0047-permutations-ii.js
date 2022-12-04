var permuteUnique = function (nums) {
  const len = nums.length,
    sortedNums = nums.sort(),
    s = [],
    r = [],
    visited = new Array(len).fill(0),
    resolve = () => {
      if (s.length === len) return r.push([...s]);
      let prev = null;

      for (let i = 0; i < len; i++) {
        const n = sortedNums[i];
        if (visited[i] || prev === n) continue;
        s.push((prev = n)), (visited[i] = 1);
        resolve(i + 1);
        s.pop(), (visited[i] = 0);
      }
    };

  return resolve(), r;
};
