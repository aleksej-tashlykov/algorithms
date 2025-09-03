let n = 12;
let k = 5;

const numbers = [];
for (let i = 0; i < n; i++) {
	numbers[i] = i + 1;
}

const parts = [];

const baseSize = Math.floor(n / k);
const extraParts = n % k;

let startIndex = 0;
let currentPartSize = 0;
let part = [];

for (let i = 0; i < k; i++) {
	currentPartSize = baseSize;
	if (i < extraParts) {
		currentPartSize = currentPartSize + 1;
	}

	part = [];

	for (let j = 0; j < currentPartSize; j++) {
		if (startIndex + j < n) {
			part[j] = numbers[startIndex + j];
		}
	}

	parts[i] = part;
	startIndex = startIndex + currentPartSize;
}
