function countDivision(number, divisor) {
	if (number < divisor) {
		return 0;
	}

	const quotient = number / divisor;
	const step = Math.floor(Math.log(quotient) / Math.log(divisor));

	return step + 1;
}

console.log(countDivision(256, 2));
