function randomNumbers(number) {
	if (!Number.isInteger(number) || number <= 0) {
		return;
	}

	const numbers = [];
	let shouldContinue = true;
	const startTime = Date.now();
	let currentTime = 0;
	let duration = 0;

	let i = 0;
	while (i < number && shouldContinue) {
		currentTime = Date.now();
		duration = currentTime - startTime;

		if (duration >= 5000) {
			shouldContinue = false;
		}

		i++;
	}

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