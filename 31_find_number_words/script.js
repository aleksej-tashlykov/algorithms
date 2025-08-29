const str = '  hello  s   world  from   JavaScript  ';
let count = 0;
let inWord = false;

for (let i = 0; i < str.length; i++) {
	const char = str[i];
	const letters = (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');

	if (letters) {
		if (!inWord) {
			count++;
			inWord = true;
		}
	} else {
		inWord = false;
	}
}
console.log(count);
