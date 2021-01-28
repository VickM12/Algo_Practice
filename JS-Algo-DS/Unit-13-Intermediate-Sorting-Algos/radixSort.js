// Helper function

const getDigit = (num, pos)=> {
  return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

console.log(getDigit(12345, 2)) // 5