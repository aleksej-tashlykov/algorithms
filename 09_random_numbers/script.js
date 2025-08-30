function randomNumbers(number) {
	if (!Number.isInteger(number) || number <= 0) {
		return;
	}

	const numbers = [];
	let shouldContinue = true;
	const startTime = Date.now();
	let currentTime = 0;

	let i = 0;
	while (i < number && shouldContinue) {
		numbers[i] = Math.random();
		currentTime = Date.now();
		
		if (currentTime - startTime >= 5000) {
			shouldContinue = false;
		}

		i++;
	}

	const duration = (currentTime - startTime) / 1000;
	console.log(`Время выполнения генерации: ${duration}`);

	if (!shouldContinue) {
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