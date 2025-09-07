function shiftArray(arr, offset) {
	if (arr.length === 0) {
		return;
	}

	let result = [];

	for (let i = 0; i < arr.length; i++) {
		result[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (i + offset >= 0 && i + offset < arr.length) {
			result[i + offset] = arr[i];
		}
	}

	return result;
}
