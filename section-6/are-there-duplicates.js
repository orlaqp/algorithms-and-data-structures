/**
 * Frequency counter
 */

function areThereDuplicates() {
    if (!arguments) return false;

    const counter = {};
    for (let arg of arguments) {
        counter[arg] = (counter[arg] || 0) + 1;
        if (counter[arg] > 1) return true;
    }

    return false;
}

function areThereDuplicates2() {
    if (!arguments || !arguments.length) return false;

    const counter = {};
    for (let i = 0; i < arguments.length; i++) {
        const arg = arguments[i];
        counter[arg] = (counter[arg] || 0) + 1;
        if (counter[arg] > 1) return true;
    }

    return false;
}

function areThereDuplicates3() {
    return new Set(arguments).size !== arguments.length;
}

const fn = areThereDuplicates3;

console.log(fn(1, 2, 4, 3, 1));
console.log(fn());
console.log(fn('a', 'b', 'c', 'a'));