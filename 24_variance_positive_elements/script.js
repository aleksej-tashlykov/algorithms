const arr = [2, -1, 4, 0, 6, -3, 8];

if (arr.length === 0) {
	return;
}

let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		sum += arr[i];
		count++;
	}
}

const average = sum / count;
let sumSquaredDeviations = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0) {
		const diff = arr[i] - average;
		sumSquaredDeviations += diff * diff;
	}
}

const variance = sumSquaredDeviations / count;