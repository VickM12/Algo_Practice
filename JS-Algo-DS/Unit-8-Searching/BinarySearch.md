# Binary Search
<p>Much Faster</p>
<p>Only works on SORTED arrays</p>
<p>Cuts the time to search by half</p>

## How It Works
With Binary Search, the search engine goes about halfway and the evaluates if the value is greater than or less than the midpoint. It then will create a new midpoint based on this information and move there and repeat, halving the number of pieces of data that must be evaluated, until it finds the item. 

## Example
Write a function that accepts a sorted array and a value. 
- Create a "left pointer" and a "right pointer" that start at opposite ends of the array. 
- While the Left pointer comes before the right pointer:
  - create a pointer in the middle
  - If the value is too small, move left pointer up
  - If the value is too largh, move the right pointer down.
- If the value is not found, return -1

### Code:
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

