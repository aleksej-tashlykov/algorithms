function generateRandomString(min, max) {
	const strLength = Math.floor(Math.random() * (max - min + 1)) + min;
	let str = '';
	let char = 0;

	for (let i = 0; i < strLength; i++) {
		char = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
		str += String.fromCharCode(char);
	}

	return str;
}

function checkNumbersInString(str) {
	if (str.length === 0) {
		return;
	}

	let hasDigits = false;
	let dotCount = 0;

	let i = 0;

	if (str[0] === '+' || str[0] === '-') {
		i = 1;
	}

	while (i < str.length) {
		if (str[i] >= '0' && str[i] <= '9') {
			hasDigits = true;
		} else if (str[i] === '.') {
			dotCount++;
			if (dotCount > 1) {
				return;
			}
		} else {
			return;
		}
		i++;
	}

	return hasDigits;
}

const randomString = [];

for (let i = 0; i < 10; i++) {
	randomString[i] = generateRandomString(1, 20);
}

let numbersCount = 0;

for (let i = 0; i < randomString.length; i++) {
	if (checkNumbersInString(randomString[i])) {
		numbersCount++;
	}
}

console.log(numbersCount);
