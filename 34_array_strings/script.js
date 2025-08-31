const arr = [];
let str = '';

for (let i = 0; i < 10; i++) {
	str += 'a';
}

for (let i = 0; i < str.length; i++) {
	arr[i] = str;
}

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}
