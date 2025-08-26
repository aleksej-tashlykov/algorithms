const arr = [10, 20, 30, 40, 50];

if (arr.length <= 1) {
	return;
}

let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;