let arr = [45, 23, 78, 12, 56, 89, 34, 67, 91, 29];

let sum = 0;
for (let i = 0; i < arr.length; i++) {
	sum += arr[i];
}

const average = sum / arr.length;

let minDifference = Math.abs(arr[0] - average);

let closestValue = arr[0];
let difference = 0;

for (let i = 1; i < arr.length; i++) {
	difference = Math.abs(arr[i] - average);

	if (difference < minDifference) {
		minDifference = difference;
		closestValue = arr[i];
	}
}

console.log(closestValue);
