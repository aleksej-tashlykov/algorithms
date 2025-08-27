function randomNumbers(number) {
	if (!Number.isInteger(number) || number <= 0) {
		return;
	}

	const numbers = [];
	let shouldContinue = true;
	const startTime = Date.now();

	let i = 0;
	while (i < number && shouldContinue) {
		numbers[i] = Math.random();

		if (Date.now() - startTime >= 5000) {
			shouldContinue = false;
		}

		i++;
	}

	const endTime = Date.now();
	const duration = (endTime - startTime) / 1000;

	console.log(`Время выполнения генерации: ${duration}`);

	if (duration >= 5) {
		console.log(
			'Превышено допустимое время работы программы, введите количество поменьше'
		);
		return;
	}

	let stringOfGeneratedNumbers = '';
	for (let i = 0; i < numbers.length; i++) {
		stringOfGeneratedNumbers += numbers[i];
		if (i < numbers.length - 1) {
			stringOfGeneratedNumbers += ', ';
		}
	}
	console.log(stringOfGeneratedNumbers);
}
