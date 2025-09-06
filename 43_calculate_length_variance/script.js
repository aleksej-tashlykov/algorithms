const arr = [[1, 2, 3], [4, 5], [6, 7, 8, 9], [10]];

if (arr.length === 0) {
	return;
}

const lengthsNestedArrays = [];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
	lengthsNestedArrays[i] = arr[i].length;
	sum += lengthsNestedArrays[i];
}

const average = sum / arr.length;

let sumSquaredDeviations = 0;
let deviation = 0;

for (let i = 0; i < lengthsNestedArrays.length; i++) {
	deviation = lengthsNestedArrays[i] - average;
	sumSquaredDeviations += deviation * deviation;
}

const variance = sumSquaredDeviations / arr.length;

console.log(variance);
