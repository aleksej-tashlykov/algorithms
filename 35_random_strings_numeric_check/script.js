function generateRandomString(min, max) {
	const strLength = Math.floor(Math.random() * (max - min + 1)) + min;
	let str = '';

	for (let i = 0; i < strLength; i++) {
		const char = Math.floor(Math.random() * (126 - 32 + 1)) + 32;
		str += String.fromCharCode(char);
	}

	return str;
}

function checkNumbersInString(str) {
	if (str.length === 0) {
		return false;
	}

	let hasDigits = false;
	let dotCount = 0;

	let i = 0;

	if (str[0] === '+' || str[0] === '-') {
		i = 1;
	}

	while (i < str.length) {
		const char = str[i];
		if (char >= '0' && char <= '9') {
			hasDigits = true;
		} else if (char === '.') {
			dotCount++;
			if (dotCount > 1) {
				return false;
			}
		} else {
			return false;
		}
		i++;
	}

	return hasDigits;
}

const randomStrings = [];

for (let i = 0; i < 10; i++) {
	randomStrings[i] = generateRandomString(1, 20);
}

let numberCount = 0;

for (let i = 0; i < randomStrings.length; i++) {
	if (checkNumbersInString(randomStrings[i])) {
		numberCount++;
	}
}


const probability = numberCount / 10;
console.log(probability);