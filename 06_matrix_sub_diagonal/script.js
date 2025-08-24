function matrixSubDiagonal(matrix) {
	if (matrix.length === 0) {
		return;
	}

	const rows = matrix.length;
	const cols = matrix[0].length;

	if (rows !== cols) {
		return;
	}

	for (let i = 0; i < rows; i++) {
		for (let k = 0; k < i; k++) {
			console.log(matrix[i][k]);
		}
	}
}
