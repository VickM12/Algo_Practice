//Write a function that calculates the sum of all numbers from 1 to n

let sum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++){
    total += i;
  }
  return total
}
let t1 = performance.now();
sum(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)

// console.log(sum(6))

let sum2 = (n) =>{
  return n * (n + 1) / 2
}

// console.log(sum2(6))

//Which is better?
//What is better?
// - Faster?
// - Less memory-intensive?
// - More readable? 

//Sum2 is faster
//Counting operations- sum2 has only 3 operations. Sum can have 2n or 5n + 2 operations. Number of operations grow with the size of n.

