const arr = [2, -1, 4, 0, 6, -3, 8];

if (arr.length === 0) {
	return;
}

let result = false;

let i = 0;
while (i < arr.length && !result) {
	if (arr[i] > 0 && arr[i] % 2 === 0) {
		result = true;
	}
	i++;
}

console.log(result);
