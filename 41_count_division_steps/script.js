function countDivision(number, divisor) {
	if (number < divisor) {
		return 0;
	}

	const quotient = number / divisor;
	const step = countDivision(quotient, divisor);

	return step + 1;
}

console.log(countDivision(1000, 3));
