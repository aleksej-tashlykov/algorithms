function factorialRecursive(n) {
	if (n === 0 || n === 1) {
		return 1;
	} else {
		return n * factorialRecursive(n - 1);
	}
}

function factorialIterative(n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}

	return result;
}
