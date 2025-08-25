function matrixTransposition(matrix) {
	// Базовые проверки
	if (!matrix || matrix.length === 0) {
		return;
	}

	if (!matrix[0] || matrix[0].length === 0) {
		return;
	}

	const rows = matrix.length;
	const cols = matrix[0].length;

	for (let j = 0; j < cols; j++) {
		let result = '';
		for (let i = 0; i < rows; i++) {
			result += matrix[i][j];
			if (i < rows - 1) {
				result += ' ';
			}
		}
		console.log(result);
	}
}