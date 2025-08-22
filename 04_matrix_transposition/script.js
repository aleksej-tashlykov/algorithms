function matrixTransposition(matrix) {
	if (!matrix || matrix.length === 0) {
		return [];
	}

	const rows = matrix.length;
	const cols = matrix[0].length;

	const transposedMatrix = [];

	for (let i = 0; i < cols; i++) {
		transposedMatrix[i] = [];
		for (let k = 0; k < rows; k++) {
			transposedMatrix[i][k] = matrix[k][i];
		}
	}

	console.log(transposedMatrix);
}
