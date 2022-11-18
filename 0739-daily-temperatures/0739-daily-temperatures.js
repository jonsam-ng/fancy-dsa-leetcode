var dailyTemperatures = function (temperatures) {
  const len = temperatures.length,
        stack = [],
        table = [],
        isEmpty = () => !stack.length,
        peek = () => stack.at(-1);

  for (let i = len - 1; i >= 0; i--) {
    const e = temperatures[i];

    while (!isEmpty() && peek()[0] <= e) stack.pop();

    table[i] = isEmpty() ? 0 : peek()[1] - i;
    stack.push([e, i]);
  }

  return table;
};
