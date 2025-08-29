const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let str = '';

for (let i = 0; i < 100; i++) {
	const index = Math.floor(Math.random() * alphabet.length);
	str += alphabet[index];
}
console.log(str);
