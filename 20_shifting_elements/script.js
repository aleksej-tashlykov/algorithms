const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const offset = 2;

if (arr.length === 0) {
	return;
}

const length = arr.length;

if (offset > 0) {
	for (let i = length - 1 - offset; i >= 0; i--) {
		arr[i + offset] = arr[i];
	}

	for (let i = 0; i < offset; i++) {
		arr[i] = 0;
	}
} else if (offset < 0) {
	const shift = -offset;
	for (let i = 0; i < length - shift; i++) {
		arr[i] = arr[i + shift];
	}

	for (let i = length - shift; i < length; i++) {
		arr[i] = 0;
	}
}
