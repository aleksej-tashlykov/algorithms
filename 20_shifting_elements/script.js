function shiftArray(arr, offset) {
	if (arr.length === 0) {
		return;
	}

	let tempArray = [];

	for (let i = 0; i < arr.length; i++) {
		tempArray[i] = arr[i];
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (i + offset >= 0 && i + offset < arr.length) {
			arr[i + offset] = tempArray[i];
		}
	}

	return arr;
}