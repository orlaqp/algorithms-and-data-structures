/**
 * Multiple pointers
 */

 /**
  * Return all pairs that match the input average
  * @param {array} values 
  * @param {number} average 
  */
 function averagePair(values, average) {
     if (!values || !values.length) return false;
     
     const expected = average * 2;
     const counter = {}
     let pairs = [];

     for (let val of values) {
        counter[val] = (counter[val] || 0) + 1
     }

     for (let val of values) {
        const delta = expected - val;

        if (counter[delta] && counter[val]) {
            counter[delta] -= 1;
            pairs.push([val, delta]);
        }
     }

     return pairs.length > 0;
 }

 /**
  * Returns true as soon as it finds a pair that match the criteria
  * @param {array} values 
  * @param {number} average 
  */
 function averagePair2(values, average) {
    if (!values || !values.length) return false;
    
    const expected = average * 2;
    const counter = {}
    
    for (let val of values) {
       counter[val] = (counter[val] || 0) + 1
    }

    for (let val of values) {
       const delta = expected - val;

       if (counter[delta] && counter[val]) {
           return true;
       }
    }

    return false;
}

/**
 * Returns as soon as it finds a pair (very nice solution)
 * putting pointer in the beggining and in the end and the moving them around
 * @param {array} arr 
 * @param {number} num 
 */
function averagePair3(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
 
 console.log(averagePair3([1,2,6], 2.5));
 console.log(averagePair3([1,3,3,5,6,7,10,12,19], 8));
 

//  [ 1, 2, 3]
//       -  -
 
 
//  [ 1, 2, 4]
//    -     -
