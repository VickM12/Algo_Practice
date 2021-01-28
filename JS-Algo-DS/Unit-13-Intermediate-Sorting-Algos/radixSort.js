/////////////////////
// Helper functions
/////////////////////

const getDigit = (num, pos)=> {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

// console.log(getDigit(12345, 2)) //Result: 3

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(34)) //Result: 2

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i <nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// console.log(mostDigits([34, 256, 7889, 1])) //Result: 4

//////////////////
// Radix Sort!!
//////////////////

const radixSort = (nums) =>{
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++){
    
    // Creating the buckets => 10 empty arrays with Array.from() method
    let digitBuckets = Array.from({length: 10}, () => [])
    
    // Sorting into corresponding bucket
    for (let i = 0; i < nums.length; i++){
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }

    //Return the new array of nums
    nums = [].concat(...digitBuckets);
  }
  return nums
}

console.log(radixSort([3, 54, 2, 1334, 23, 100, 99])) 