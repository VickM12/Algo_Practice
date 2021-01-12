# Sliding Window
This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string etc.

## Example
Write a function called maxSubarraySum which accepts an array of integers and a number called 'n'. The function should calculate the maximum sum of n consecutive elements in an array.
```js
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //Result: 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)//Result: 17


let maxSubarraySum = (arr, n) =>{
  if (n > arr.length){
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - n + 1; i++){
    temp = 0
    for (let j = 0; j < n; j++){
      temp += arr[i + j];
    }
    if (temp > max){
      max = temp
    }
  }
  return max
}
```