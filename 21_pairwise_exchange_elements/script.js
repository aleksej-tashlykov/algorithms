const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

if (arr.length === 0) {
	return;
}

for (let i = 0; i + 1 < arr.length; i += 2) {
	let temp = arr[i];
	arr[i] = arr[i + 1];
	arr[i + 1] = temp;
}