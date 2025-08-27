const sleep = function (ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

async function simulateRandomProcess(
	threshold,
	thresholdInfluenceFactor,
	maximumSimulationTime
) {
	if (typeof threshold !== 'number') {
		return;
	}

	if (thresholdInfluenceFactor <= 0) {
		return;
	}

	if (maximumSimulationTime <= 0) {
		return;
	}

	const interval = thresholdInfluenceFactor * threshold;
	const startTime = Date.now();
	let timeBeginExperiment = 0;
	let randomValue = 0;
	let shouldSimulate = true;

	while (timeBeginExperiment < maximumSimulationTime && shouldSimulate) {
		randomValue = Math.random() * 2 * interval - interval;

		if (randomValue > threshold) {
			shouldSimulate = false;
		}

		if (shouldSimulate) {
			const duration = Math.random() * 900 + 100;
			await sleep(duration);
			timeBeginExperiment = Date.now() - startTime;
		}
	}
	console.log(`${timeBeginExperiment}: ${randomValue}`);
}
