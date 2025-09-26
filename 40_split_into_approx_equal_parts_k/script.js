let arrayLength = 12;
let numberOfSegments = 5;

const numbers = [];
for (let i = 0; i < arrayLength; i++) {
	numbers[i] = i + 1;
}

const parts = [];

const baseSize = Math.floor(arrayLength / numberOfSegments);
const extraParts = arrayLength % numberOfSegments;

let startIndex = 0;
let currentPartSize = 0;
let part = [];

for (let i = 0; i < numberOfSegments; i++) {
	currentPartSize = baseSize;
	if (i < extraParts) {
		currentPartSize = currentPartSize + 1;
	}

	part = [];

	for (let j = 0; j < currentPartSize; j++) {
		if (startIndex + j < arrayLength) {
			part[j] = numbers[startIndex + j];
		}
	}

	parts[i] = part;
	startIndex = startIndex + currentPartSize;
}
