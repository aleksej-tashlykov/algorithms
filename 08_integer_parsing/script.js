/*Вариант 1: 3 прохода по строке.
- создаются 2 промежуточные строки (stringWithoutSpace, stringOfNumbers)
- нагрузка на память при большом количестве вызовов
*/

function integerParsing(input) {
	let stringWithoutSpace = '';

	for (let i = 0; i < input.length; i++) {
		if (input[i] !== ' ') {
			stringWithoutSpace += input[i];
		}
	}

	let sign;

	if (stringWithoutSpace[0] === '+' || stringWithoutSpace[0] === '-') {
		sign = stringWithoutSpace[0];
	}

	if (sign && stringWithoutSpace.length === 1) {
		return;
	}

	let index = sign ? 1 : 0;
	let stringOfNumbers = '';

	while (index < stringWithoutSpace.length) {
		stringOfNumbers += stringWithoutSpace[index];
		index++;
	}

	let num = 0;
	for (let i = 0; i < stringOfNumbers.length; i++) {
		if (stringOfNumbers[i] >= '0' && stringOfNumbers[i] <= '9') {
			num = num * 10 + (stringOfNumbers[i] - '0');
		} else {
			return;
		}
	}

	if (sign === '-') {
		num = -num;
	}

	console.log(num);
}

/*Вариант 2: Один проход
- нет промежуточных строк -> меньше памяти
- charCodeAt(0) — быстрее, чем сравнение строк
*/
function integerParsing(input) {
	const length = input.length;

	let i = 0;

	while (i < length && input[i] === ' ') {
		i++;
	}

	if (i === length) {
		return;
	}

	let sign = 1;

	if (input[i] === '+') {
		i++;
	} else if (input[i] === '-') {
		sign = -1;
		i++;
	}

	if (i === length) {
		return;
	}

	let num = 0;

	while (i < length) {
		const char = input[i];
		const code = char.charCodeAt(0);

		if (code >= 48 && code <= 57) {
			const digit = code - 48;
			num = num * 10 + digit;
		} else if (char === ' ') {
			return;
		} else {
			return;
		}

		i++;
	}

	if (sign === -1) {
		num = -num;
	}

	console.log(num);
}
