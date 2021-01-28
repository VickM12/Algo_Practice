/////////////////////
// Helper functions
/////////////////////

const getDigit = (num, pos)=> {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

// console.log(getDigit(12345, 2))

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(34))

const mostDigits = (nums) => {
  let maxDigits = 0;
  for (let i = 0; i <nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([34, 256, 7889, 1]))