# Divide and Conquer
This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data

This pattern can tremendously DECREASE time complexity

## Example
Given a SORTED array of integers, write a function called "search" that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1. 

search([1,2,3,4,5,6], 4) --> index 3

### Naive way O(N):
```js
let search = (arr, n) =>{
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == n){
      return i
    } 
  }
  return -1
}
```
### Binary Search O(log(N)):

```js
let search = (arr, val) => {
  let min = 0;
  let max= arr.length -1;

  while (min <= max){
    let middle = Math.floor(( min + max) /2);
    let currentElement = array[middle];
    if (arr[middle] < val){
      min = middle +1;
    }
    else if (array[middle] > val){
      max = middle - 1
    }
    else{
      return middle
    }
  }
  return -1
}
```
