var permuteUnique = function (nums) {
  const sortedNums = nums.sort(),
        len = nums.length,
        r = [],
        s = [],
        visited = new Array(len).fill(0),
        resolve = () => {
    if (s.length === len) return r.push([...s]);

    for (let i = 0; i < len; i++) {
      if (visited[i] || i > 0 && sortedNums[i] === sortedNums[i - 1] && !visited[i - 1]) continue;
      s.push(sortedNums[i]), visited[i] = 1;
      resolve(i + 1);
      s.pop(), visited[i] = 0;
    }
  };

  return resolve(), r;
};
