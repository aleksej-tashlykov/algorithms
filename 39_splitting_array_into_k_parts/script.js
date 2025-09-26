let arrayLength = 12;
let numberOfSegments = 5;

const numbers = [];
for (let i = 0; i < arrayLength; i++) {
	numbers[i] = i + 1;
}

const parts = [];

let partSize = Math.floor(arrayLength / numberOfSegments);
if (arrayLength % numberOfSegments > 0) {
	partSize = partSize + 1;
}

let start = 0;
let end = 0;
let part = [];

for (let i = 0; i < numberOfSegments; i++) {
	start = i * partSize;

	if (start + partSize <= arrayLength) {
		end = start + partSize;
	} else {
		end = arrayLength;
	}

	part = [];

	if (start < arrayLength) {
		for (let j = start; j < end; j++) {
			part[part.length] = numbers[j];
		}
	}

	parts[parts.length] = part;
}
