if (arr.length === 0) {
	return;
}

if (arr.length === 1) {
	return 1;
}

let currentLength = 1;
let maxLength = 1;

for (let i = 0; i < arr.length - 1; i++) {
	if (arr[i + 1] === arr[i] + 1) {
		currentLength++;
		if (currentLength > maxLength) {
			maxLength = currentLength;
		}
	} else {
		currentLength = 1;
	}
}

console.log(maxLength);
