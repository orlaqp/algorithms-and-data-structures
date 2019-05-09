/**
 * Frequency counter
 */

function sameFrequency(number1, number2) {
    if (number1.toString().length !== number2.toString().length) {
        return false;
    }

    const counter = {};

    for (let digit of number1.toString()) {
        counter[digit] = (counter[digit] || 0) + 1;
    }

    for (let digit of number2.toString()) {
        if (!counter[digit]) {
            return false;
        }

        counter[digit] -= 1;
    }

    return true;
}

console.log(sameFrequency(11250, 2510));