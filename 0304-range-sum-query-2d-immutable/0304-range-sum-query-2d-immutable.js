/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
	const rLen = matrix?.length ?? 0,
		cLen = matrix[0]?.length ?? 0;
	// we will spread rows to cols
	const sumMatrix = new Array(rLen + 1)
		.fill(0)
		.map((r) => new Array(cLen + 1).fill(0));
	for (let i = 0; i < rLen; i++) {
		for (let j = 0; j < cLen; j++) {
			sumMatrix[i + 1][j + 1] =
				sumMatrix[i][j + 1] + sumMatrix[i + 1][j] + matrix[i][j] - sumMatrix[i][j];
		}
	}
	this.matrix = matrix;
	this.sumMatrix = sumMatrix;
	this.rLen = rLen;
	this.cLen = cLen;
	this.isValidIndex = (r1, c1, r2, c2) => {
		if (
			r2 < 0 ||
			r2 < 0 ||
			r2 >= this.rLen ||
			r2 >= this.rLen ||
			c1 < 0 ||
			c2 < 0 ||
			c1 >= this.cLen ||
			c2 >= this.cLen ||
			r1 > r2 ||
			c2 > c2
		)
			return false;
		return true;
	};
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
	if (!this.isValidIndex(row1, col1, row2, col2)) return 0;
	return (
		this.sumMatrix[row2 + 1][col2 + 1] +
		this.sumMatrix[row1][col1] -
		this.sumMatrix[row2 + 1][col1] -
		this.sumMatrix[row1][col2 + 1]
	);
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */