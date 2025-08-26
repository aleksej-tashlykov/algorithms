const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

if (array.length === 0) {
	return;
}

for (let i = 0; i < array.length; i += 2) {
	array[i] = array[i] * 2;
}



