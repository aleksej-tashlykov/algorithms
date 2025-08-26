function sort(array) {
	if (!Array.isArray(array) || array.length === 0) {
		return;
	}

	for (let i = 0; i < array.length; i++) {
		for (let k = 0; k < array.length - i - 1; k++) {
			if (array[k] > array[k + 1]) {
				let temp = array[k];
				array[k] = array[k + 1];
				array[k + 1] = temp;
			}
		}
	}
}

function createSortedArray(array = [5.2, 3.8, 1.7, 9.5, 4.1]) {
	if (!Array.isArray(array) || array.length === 0) {
		return;
	}

	const sortedArray = [];

	for (let i = 0; i < array.length; i++) {
		sortedArray[i] = array[i];
	}

	sort(sortedArray);

	return sortedArray;
}