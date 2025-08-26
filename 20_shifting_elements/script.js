const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const offset = 2;

if (arr.length === 0) {
	return;
}

for (let i = arr.length - 1; i >= 0; i--) {
	if (i + offset < arr.length) {
		arr[i + offset] = arr[i];
	}
}

for (let i = 0; i < offset; i++) {
	arr[i] = 0;
}
