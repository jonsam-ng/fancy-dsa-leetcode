/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = [],
    cols = [],
    boxes = [],
    getBoxIdx = (i, j) => {
      const indexes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ];
      return indexes[~~(i / 3)][~~(j / 3)];
    },
    hasDuplicateInArray = (arr = []) => {
      const hash = new Map();
      arr.forEach((key) => hash.set(key, (hash.get(key) ?? 0) + 1));
      return [...hash].map(([, v]) => v).some((n) => n > 1);
    };

  for (i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j],
        boxIdx = getBoxIdx(i, j);

      if (!rows[i]) rows[i] = [];
      if (!cols[j]) cols[j] = [];
      if (!boxes[boxIdx]) boxes[boxIdx] = [];
      if (cell === ".") continue;

      rows[i].push(cell);
      cols[j].push(cell);
      boxes[boxIdx].push(cell);
    }
  }

  return [...rows, ...cols, ...boxes].every((arr) => !hasDuplicateInArray(arr));
};
