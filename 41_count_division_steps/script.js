let number = 1000;
const divisor = 3;

let step = 0;

while (number >= divisor) {
	number = number / divisor;
	step++;
}

console.log(step);
