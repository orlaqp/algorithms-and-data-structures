/**
 * Multiple pointers
 * 
 * Write a function called isSubsequence which takes in two strings and checks whether
 * the characters in the first string form a subsequence of the characters in the second
 * string. In other words, the function should check whether the characters in the first
 * string appear somewhere in the second string, without their order changing.
 */

/**
 * Check is source string is a sub sequence of target string
 * 
 * @param {string} source 
 * @param {string} target 
 */

function isSubsequence(source, target) {
    if (!source || !target || target.length < source.length) return false;

    let i = 0;
    for (let c of target) {
        // if I find the source character I can move the source pointer forward
        if (c === source[i]) i++;
        if (i === source.length) return true;
    }

    return false;
}

console.log(isSubsequence('hello', 'hello world'));
