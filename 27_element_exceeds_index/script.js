let k = 5;

if (k <= 0) {
	return 0;
}

let i = 0;
while ((i * i) / k <= i) {
	i++;
}

console.log(i);