const values = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};
const orders = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

var romanToInt = function (s) {
  let num = 0;

  for (let symbol of orders) {
    while (s.startsWith(symbol)) {
      num += values[symbol];
      s = s.replace(symbol, "");
    }
  }

  return num;
};
