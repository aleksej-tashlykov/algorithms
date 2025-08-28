const arr = [0, 1, 3, 6, 7, 8];

if (arr.length === 0) {
	return;
}

let currentLength = 1;
let maxLength = 1;

for (let i = 0; i < arr.length - 1; i++) {
	if (arr[i + 1] === arr[i] + 1) {
		currentLength++;
	} else {
		currentLength = 1;
	}
}

if (currentLength > maxLength) {
	maxLength = currentLength;
}

console.log(maxLength);
