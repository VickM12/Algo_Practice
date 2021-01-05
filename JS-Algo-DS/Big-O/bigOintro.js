//Write a function that calculates the sum of all numbers from 1 to n

//O(n)
let sum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++){
    total += i;
  }
  return total
}


//O(1) or 
let sum2 = (n) =>{
  return n * (n + 1) / 2
}



/*
Which is better?
What is better?
 - Faster?
 - Less memory-intensive?
 - More readable? 

Sum2 is faster
Counting operations- sum2 has only 3 operations. Sum can have 2n or 5n + 2 operations. Number of operations grow with the size of n.
*/


//Nested For Loop:
// O(n^2)
function printAllPairs(n){
  for(var i = 0; i < n; i++){
    for (var j = 0; j < n; j++){
      console.log(i, j);
    }
  }
}
printAllPairs(30)

/*
What is the Big O notation of the above function?
-We have an O(n) operation nested inside an O(n) operation
- 
*/