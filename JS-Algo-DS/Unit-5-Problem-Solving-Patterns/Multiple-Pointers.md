# Multiple Pointers
Create pointers or values that correspond to an index or position and move towards the beginning, end, or middle based on a certain condition.

VERY efficient for solving problems with minimal space compolexity as well.

## Example- Meet in the middle
Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to 0, or undefined if a pair does not exist.

sumZero([-3, -2, -1, 0, 1, 2, 3]) --> [-3, 3]
sumZero([-2, -1, 0, 1, 3]) -- undefined



### Naive way- O(N^2)
This function uses a nested loop with pointer j that gets compared to pointer i before i progresses 

let sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++){
    for(let j = i+1; j <arr.length; j++){
      if(arr[i] + arr[j] === 0){
        return [arr[i], arr[j]]
      }
    }
  }
}



### Refactor time complex O(N), space O(1)
This function uses two pointers, one at each end of the array that meet in the middle

let sumZero2 = (arr)=> {
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let sum = arr[left] + arr[right];
    if(sum === 0){
      return [arr[left], arr[right]]
    } else if(sum > 0){
      right--
    } else {
      left++
    }
  } 
}

console.log(sumZero2([-3, -2, 0, 1, 2]))

## Example 2- Lookforward Left to Right
Write a function called countUniqueValues, which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 1, 1, 2]) --> 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) --> 7
countUniqueValues([]) --> 0

