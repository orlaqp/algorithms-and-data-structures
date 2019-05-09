function countUniqueValues(input) {
    if (!input || !input.length) {
        return 0;
    }

    let uniqueValues = 1;
    let i = 0;
    for (let j = 1; j < input.length; j++) {
        if (input[i] !== input[j]) {
            uniqueValues++;
            i = j;
        }
    }

    return uniqueValues;
}

function countUniqueValues2(input) {
    if (!input || !input.length) {
        return 0;
    }

    let i = 0;
    for (let j = 1; j < input.length; j++) {
        if (input[i] !== input[j]) {
            i++;
            input[i] = input[j];
        }
    }

    return i + 1;
}



const tests = [
    [1,1,1,1,1,2],
    [1,2,3,4,4,4,7,7,12,12,13],
    [],
    [-2,-1,-1,0,1]
];

for (let input of tests) {
    console.log(countUniqueValues2(input));
}