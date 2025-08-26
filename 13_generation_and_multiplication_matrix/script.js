function createMatrix(size) {
	if (size <= 0) {
		return;
	}

	const matrix = [];

	for (let i = 0; i < size; i++) {
		const row = [];
		for (let k = 0; k < size; k++) {
			row[k] = 0;
		}
		matrix[i] = row;
	}

	return matrix;
}

function fillMatrixRandomNumbers(matrix) {
	if (matrix.length === 0) {
		return;
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let k = 0; k < matrix.length; k++) {
			matrix[i][k] = Math.random();
		}
	}
}

function createAndFillMatrix(numberMatrices, sizeMatrices) {
	if (numberMatrices <= 0 || sizeMatrices <= 0) {
		return;
	}

	const matrices = [];
	for (let i = 0; i < numberMatrices; i++) {
		const matrix = createMatrix(sizeMatrices);
		fillMatrixRandomNumbers(matrix);
		matrices[i] = matrix;
	}
	return matrices;
}

function multiplyTwoMatrices(matrixA, matrixB) {
	if (matrixA.length === 0 || matrixB.length === 0) {
		return;
	}

	if (matrixA.length !== matrixB.length) {
		return;
	}

	const result = createMatrix(matrixA.length);

	for (let i = 0; i < matrixA.length; i++) {
		for (let j = 0; j < matrixA.length; j++) {
			let composition = 0;
			for (let k = 0; k < matrixA.length; k++) {
				composition += matrixA[i][k] * matrixB[k][j];
			}
			result[i][j] = composition;
		}
	}

	return result;
}

function multiplyAllMatrices(matrices, numberMatrices) {
	if (matrices.length === 0 || numberMatrices <= 0) {
		return;
	}

	if (numberMatrices === 1) {
		return matrices[0];
	}

	let result = matrices[0];

	for (let i = 1; i < numberMatrices; i++) {
		result = multiplyTwoMatrices(result, matrices[i]);
	}

	return result;
}

function generationAndMultiplicationMatrix(numberMatrices, size) {
	if (numberMatrices <= 0) {
		return;
	}

	if (size <= 0) {
		return;
	}

	const matrices = createAndFillMatrix(numberMatrices, size);

	const startTime = Date.now();
	multiplyAllMatrices(matrices, numberMatrices);
	const endTime = Date.now();

	const duration = endTime - startTime;
	console.log(duration);
}
