/**
 * <p>This function should return the minimal length of a <b>contiguous</b>
 * subarray of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.<br>Examples:</p>
 */

function minSubArrayLen(arr, total) {
    if (!arr || !total) return 0;

    let minLength = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        let j = 0;
                
        while (sum < total) {
            sum += arr[i + j];
            j++;
        }

        if (sum >= total && j < minLength) {
            minLength = j;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

const inputs = [
    { arr: [2,3,1,2,4,3], total: 7 },
    { arr: [2,1,6,5,4], total: 9 },
    { arr: [3,1,7,11,2,9,8,21,62,33,19], total: 52 },
    { arr: [1,4,16,22,5,7,8,9,10], total: 39 },
    { arr: [1,4,16,22,5,7,8,9,10], total: 55 },
    { arr: [4,3,3,8,1,2,3], total: 11 },
    { arr: [1,4,16,22,5,7,8,9,10], total: 95 },
]

for (let input of inputs) {
    console.log(minSubArrayLen(input.arr, input.total));
}
