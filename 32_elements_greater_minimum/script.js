const arr = [3, 8, 5, 8, 1, 6];

if (arr.length === 0) {
	return;
}

let min = arr[0];

for (let i = 1; i < arr.length; i++) {
	if (arr[i] < min) {
		min = arr[i];
	}
}

let count = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i] === min + 5) {
		count++;
	}
}

console.log(count);
