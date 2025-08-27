const array = [2, 4, 6, 8, 10, 12];

if (array.length === 0) {
    return;
}

const lastElement = array[array.length - 1];
let isSecondEven = false;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        if (isSecondEven) {
            array[i] = lastElement;
            isSecondEven = false;
        } else {
            isSecondEven = true;
        }
    }
}

