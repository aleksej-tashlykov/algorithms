function countingCharacter(str, char) {
	if (str.length === 0) {
		return;
	}

	if (char.length === 0 || char.length > 1) {
		return;
	}

	let count = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() === char.toLowerCase()) {
			count++;
		}
	}

	return count;
}