/**
 * Write a function called findLongestSubstring, which accepts a string and
 * returns the length of the longest substring with all distinct characters.
*/



function findLongestSubstring(text) {
    let response = 0;
    
    for (let i = 0; i < text.length; i++) {
        let j = i;
        let counter = {};

        while (!counter[text[j]] && j < text.length) {
            counter[text[j]] = text[j];
            j++;
        } 
        
        if (response < j - i) response = j - i;
    }

    return response;
}

function findLongestSubstring2(text) {
    let response = '';
    
    for (let i = 0; i < text.length; i++) {
        let j = i;
        let counter = {};
        subString = '';
        let c = null;

        while (!counter[text[j]] && j < text.length) {
            counter[text[j]] = text[j];
            subString += text[j];
            j++;
        } 
        
        if (response.length < subString.length) response = subString;
    }

    return response;
}

/**
 * Teacher solution
 */
function findLongestSubstring3(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
}



function findLongestSubstringX(text) {
    if (!text) return 0;

    let start = 0;
    let seen = {};
    let longest = 0;

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (seen[char] >= 0) {
            start = Math.max(start, seen[char] + 1);
        }

        seen[char] = i;
        longest = Math.max(longest, i + 1 - start)
    }

    return longest;
}

const inputs = [
    '',
    'rithmschool',
    'thisisawesome',
    'thecatinthehat',
    'bbbbbb',
    'longestsubstring',
    'thisishowwedoit'
]

for (let input of inputs) {
    // console.log(`word: ${input}`);
    console.log(findLongestSubstringX(input));
}
  