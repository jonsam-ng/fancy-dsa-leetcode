var openLock = function (deadends, target) {
  const initial = "0000",
    queue = [initial],
    visited = new Set([...deadends, initial]),
    turning = (cur, i) => {
      const nums = cur.split("").map(Number),
        up = (nums, j) => (nums[i] === 9 ? (nums[i] = 0) : nums[i]++, nums),
        down = (nums, i) => (nums[i] === 0 ? (nums[i] = 9) : nums[i]--, nums);

      return [up([...nums], i), down([...nums], i)].map((nums) =>
        nums.join("")
      );
    };

  if (deadends.includes(initial)) return -1;
  let depth = 0;

  while (queue.length) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      if (cur === target) return depth;

      for (let j = 0; j < 4; j++) {
        const next = turning(cur, j).filter((d) => !visited.has(d));
        queue.push(...next);
        next.forEach((n) => visited.add(n));
      }
    }

    depth++;
  }

  return -1;
};
