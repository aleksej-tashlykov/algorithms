function calculateAverage(arr) {
	if (arr.length === 0) {
		return;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum / arr.length;
}

const strings = [];
const min = 1;
const max = 10;

for (let i = 0; i < 10; i++) {
	const length = Math.floor(Math.random() * (max - min + 1)) + min;
	let str = '';
	for (let j = 0; j < length; j++) {
		const digit = Math.floor(Math.random() * 10);
		str += digit;
	}
	strings[i] = str;
}

const numbers = [];
for (let i = 0; i < strings.length; i++) {
	const num = +strings[i];
	numbers[i] = num;
}

const average = calculateAverage(numbers);
