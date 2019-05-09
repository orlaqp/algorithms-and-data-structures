function validAnagram(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }

    const freq1 = {};
    const freq2 = {};

    for (let c of text1) {
        freq1[c] = (freq1[c] || 0) + 1;
    }
    
    for (let c of text2) {
        freq2[c] = (freq2[c] || 0) + 1;
    }

    for (let c of text1) {
        if (!freq2[c] || freq1[c] !== freq2[c]) {
            return false;
        }
    }

    return true;

}


// Faster version
function validAnagram2(text1, text2) {
    if (text1.length !== text2.length) {
        return false;
    }

    const lookup = {};
    
    for (let c of text1) {
        lookup[c] = (lookup[c] || 0) + 1;
    }
    
    for (let c of text2) {
        if (!lookup[c]) { // letter not found or counter 0
            return false;
        } else {
            lookup[c] -= 1;
        }
    }

    return true;
}

console.log(validAnagram2('anagram', 'nagaram'));