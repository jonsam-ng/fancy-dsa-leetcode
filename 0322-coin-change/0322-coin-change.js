var coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(null),
    resolve = (a = amount) => {
      if (a === 0) return 0;
      if (a < 0) return -1;
      if (memo[a] !== null) return memo[a];
      let min = Number.MAX_SAFE_INTEGER;

      for (let i = 0; i < coins.length; i++) {
        const rst = resolve(a - coins[i]);
        if (rst === -1) continue;
        min = Math.min(min, rst + 1);
      }

      return (memo[a] = min === Number.MAX_SAFE_INTEGER ? -1 : min);
    };

  return resolve();
};
