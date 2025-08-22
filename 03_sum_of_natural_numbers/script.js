function sumOfNaturalNumbers(n = 5) {
	if (!Number.isInteger(n) || n <= 0) {
		throw new Error('N должно быть целым, положительным числом)');
	}

	if (n === 1) {
		return 1;
	}

	return (n * (n + 1)) / 2;
}


