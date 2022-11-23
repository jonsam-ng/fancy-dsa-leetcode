var permute = function (nums) {
  const len = nums.length,
        visited = new Array(len).fill(0),
        r = [],
        path = [],
        hit = () => path.length >= len,
        isValid = i => !visited[i],
        update = () => r.push([...path]),
        go = i => (path.push(nums[i]), visited[i] = 1),
        back = i => (path.pop(), visited[i] = 0);

  function resolve() {
    if (hit()) return update();

    for (let i = 0; i < len; i++) {
      if (!isValid(i)) continue;
      go(i);
      resolve();
      back(i);
    }
  }

  return resolve(), r;
};
