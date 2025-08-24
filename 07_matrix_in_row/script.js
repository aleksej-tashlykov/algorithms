function matrixInRow(matrix) {
	if (matrix.length === 0) {
		return;
	}

	let result = '';

	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix[i].length; k++) {
			if (result !== '') {
				result += ' ';
			}
			result += matrix[i][k];
		}
	}

	console.log(result);
}

