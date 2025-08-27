function processModeling(numberRepetitions, areaSize, offset) {
	if (numberRepetitions <= 0) {
		return;
	}

	if (areaSize <= 0) {
		return;
	}

	let numberSegmentIntersections = 0;

	let randomNumberOne = 0;
	let randomNumberTwo = 0;
	let randomNumberThree = 0;
	let randomNumberFour = 0;
	let beginningFirstSegment = 0;
	let endFirstSegment = 0;
	let beginningSecondSegment = 0;
	let endSecondSegment = 0;

	for (let i = 0; i < numberRepetitions; i++) {
		randomNumberOne = Math.random() * areaSize + offset;
		randomNumberTwo = Math.random() * areaSize + offset;
		randomNumberThree = Math.random() * areaSize + offset;
		randomNumberFour = Math.random() * areaSize + offset;

		if (randomNumberOne <= randomNumberTwo) {
			beginningFirstSegment = randomNumberOne;
			endFirstSegment = randomNumberTwo;
		} else {
			beginningFirstSegment = randomNumberTwo;
			endFirstSegment = randomNumberOne;
		}

		if (randomNumberThree <= randomNumberFour) {
			beginningSecondSegment = randomNumberThree;
			endSecondSegment = randomNumberFour;
		} else {
			beginningSecondSegment = randomNumberFour;
			endSecondSegment = randomNumberThree;
		}

		if (
			beginningFirstSegment <= endSecondSegment &&
			beginningSecondSegment <= endFirstSegment
		) {
			numberSegmentIntersections++;
		}
	}

	console.log('Количество пересечений:', numberSegmentIntersections);
}
