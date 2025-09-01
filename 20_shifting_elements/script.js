const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const offset = 2;

if (arr.length === 0) {
	return;
}

const length = arr.length;

let startIndex, endIndex;

if (offset > 0) {
	startIndex = 0;
	endIndex = offset;

	for (let i = length - 1 - offset; i >= 0; i--) {
		arr[i + offset] = arr[i];
	}
} else if (offset < 0) {
	const shift = -offset;
	startIndex = length - shift;
	endIndex = length;

	for (let i = 0; i < length - shift; i++) {
		arr[i] = arr[i + shift];
	}
}

for (let i = startIndex; i < endIndex; i++) {
	arr[i] = 0;
}
