const arr = [];
let char = 'a';

for (let i = 0; i < 10; i++) {
	let str = '';
	for (let k = 0; k < 10; k++) {
		str += char;
	}
	arr[i] = str;
}

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
