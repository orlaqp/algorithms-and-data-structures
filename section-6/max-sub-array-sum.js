function maxSubarraySum(arr, size) {
    if (!arr || arr.length < size) return null;

    let max = 0;
    for (let i = 0; i < size; i++) {
        max += arr[i];
    }
    
    let lastSum = max;
    for (let i = size; i < arr.length; i++) {
        // find the sum moving the elements
        lastSum = lastSum - arr[i - size] + arr[i];
        if (lastSum > max) max = lastSum;
    }

    return max;
}


/**
 * Teacher version
 */

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

const inputs = [
    { arr: [100,200,300,400], size: 2},
    { arr: [1,4,2,10,23,3,1,0,20], size: 4},
    { arr: [-3,4,0,-2,6,-1], size: 2},
    { arr: [3,-2,7,-4,1,-1,4,-2,1], size: 2},
    { arr: [2,3], size: 3},
]

for (let input of inputs) {
    // console.log(input);
    console.log(maxSubarraySum(input.arr, input.size));
}

