const array = [5, 12, -3, 15, 8, 20, 10, -11];

if (array.length === 0) {
	return;
}

for (let i = 0; i < array.length; i++) {
	if (array[i] > 10) {
		array[i] = -array[i];
	}
}