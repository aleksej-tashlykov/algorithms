const arr = [3, 7, 2, 9, 1, 5];

if (arr.length === 0) {
	return 0;
}

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
	if (arr[i] > max) {
		max = arr[i];
	}
}
