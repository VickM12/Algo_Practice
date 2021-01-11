// Wire a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. It should mimic the functionality of Math.pow(). Do not worry about negative bases and exponents.

// function power(base, exp){
//   if(exp === 0) return 1
//   return base * power(base, exp-1)
// }

// console.log(power(7, 2))


//////////////////////////
// Factorial
//////////////////////////

//Write a function factorial(), which accepts a number and returns the factorial of that numer. A factorial is the product of an integer with all teh integers below it- Ex.: 4 = 24 because 4*3*2*1

// function factorial(n){
//   if(n === 0){
//     return 1
//   }
//   return n * factorial(n - 1)
// }

// console.log(factorial(4))

//////////////////////
// Product of Array
/////////////////////

// Write a function called productOfArray, which takes in an array of numbers and returns the product of them all.

// function productOfArray(arr){
//   if (arr.length === 0){
//   return 1;
//   }
//   let result;
//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log(productOfArray([1, 2, 3]))

//////////////////////////
// Recursive Range
/////////////////////////

//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

// function recursiveRange(n){
//   if (n === 0){
//     return 0
//   }

//   return n + recursiveRange( n - 1)
// }
// console.log(recursiveRange(3))

//Fib Sequence
function fib(n){
  if (n<= 2){
    return 1
  }
  return fib(n - 1) + fib(n - 2) 
}

console.log(fib(5))