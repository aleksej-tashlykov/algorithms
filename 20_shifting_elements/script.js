function shiftArray(arr, offset) {
	if (arr.length === 0) {
		return;
	}

	let startIndex;
	let endIndex;
	let step;

	if (offset > 0) {
		startIndex = arr.length - 1;
		endIndex = 0;
		step = -1;
	} else {
		startIndex = 0;
		endIndex = arr.length - 1;
		step = 1;
	}

	for (let i = startIndex; i !== endIndex + step; i += step) {
		let sourceIndex = i - offset;
		if (sourceIndex >= 0 && sourceIndex < arr.length) {
			arr[i] = arr[sourceIndex];
		} else {
			arr[i] = 0;
		}
	}

	return arr;
}
