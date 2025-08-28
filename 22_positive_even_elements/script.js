const arr = [4, -2, 6, 0, 3, 8, -6, 10, 1];

if (arr.length === 0) {
	return;
}

for (let i = 0; i < arr.length; i++) {
	if (arr[i] > 0 && arr[i] % 2 === 0) {
		console.log(arr[i]);
	}
}