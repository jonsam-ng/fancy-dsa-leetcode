var reverse = function (x) {
  const max = Math.pow(2, 31),
        isMinus = x < 0;
  if (Math.abs(x) < 10) return x;
  const n = Number(Math.abs(x).toString().split("").reverse().join(""));
  if (n < -max || n > max - 1) return 0;
  return isMinus ? -n : n;
};
