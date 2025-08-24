function fibRecursive(n) {
	if (n <= 0) {
		return 0;
	} else if (n === 1) {
		return 1;
	} else {
		return fibRecursive(n - 1) + fibRecursive(n - 2);
	}
}


function fibIterative(n) {
	if (n <= 0) {
		return 0;
	}
	if (n === 1) {
		return 1;
	}

	let a = 0;
	let b = 1;

	for (let i = 1; i < n; i++) {
		let temp = b;
		b = a + b;
		a = temp;
	}

	return b;
}