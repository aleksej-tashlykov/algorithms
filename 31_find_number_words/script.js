const str = '  hello s   world  from   JavaScript  ';
let count = 0;
let inWord = false;

for (let i = 0; i < str.length; i++) {
	if (str[i] !== ' ') {
		if (!inWord) {
			count++;
			inWord = true;
		}
	} else {
		inWord = false;
	}
}
console.log(count);
