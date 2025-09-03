let n = 12;
let k = 5;

const numbers = [];
for (let i = 0; i < n; i++) {
	numbers[i] = i + 1;
}

const parts = [];

let partSize = Math.floor(n / k);
if (n % k > 0) {
	partSize = partSize + 1;
}

let start = 0;
let end = 0;
let part = [];

for (let i = 0; i < k; i++) {
	start = i * partSize;

	if (start + partSize <= n) {
		end = start + partSize;
	} else {
		end = n;
	}

	part = [];

	if (start < n) {
		for (let j = start; j < end; j++) {
			part[part.length] = numbers[j];
		}
	}

	parts[parts.length] = part;
}
