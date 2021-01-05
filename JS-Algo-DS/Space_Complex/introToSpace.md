# Intro to Space Complexity

## What are inputs?

Auxiliary space complexity- Space required by to the algorithm, not including the space takeup up by inputs

## Basic Rules of Thumb
### 1. Most primatives (booleans, numbers, undef., null) are constant space.
### 2. Strings require O(n) space (where n is the string length)
### 3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

## Example of space
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return total
}

- Total is one number, and i is another number
- O(1) space because it only has two constants

function double(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i])
  }
  return newArr
}
- newARR returns n numbers
- O(n)

