let str = '';
let index = 0;
let char = '';

for (let i = 0; i < 100; i++) {
	index = Math.floor(Math.random() * 26) + 97;
	char = String.fromCharCode(index);
	str += char;
}
console.log(str);
