# Frequency Counter
- Uses objects or sets to collect values/frequencies of values
- Often avoid the need for nested loops or O(N^2) operations with arrays/strings

## Example:
Write a function called "same", which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

same([1, 2, 3], [4, 1, 9]) --> TRUE
same([1, 2, 3], [1, 9]) --> FALSE
same([1, 2, 1], [4, 4, 1] -->FALSE (must be same frequency)

### Naive Solution:

function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false'
  }
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1){
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

### Refactored Solution

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

This function uses two seperate loops, rather than two nested loops. This runs at O(N) instead of O(N^2). Then we run a third loop through the first object and compares it's value to the values of the second object. 