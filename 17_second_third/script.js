const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (array.length === 0) {
	return;
}

const start = Math.floor(array.length / 3);
const end = Math.floor((2 * array.length) / 3);

for (let i = start; i < end; i++) {
	array[i] = 1;
}

