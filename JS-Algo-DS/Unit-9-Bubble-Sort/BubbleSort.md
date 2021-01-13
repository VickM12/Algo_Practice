# Bubble Sort
<p>A sorting Algorithm where the largest values bubble up to the top</p>
<p>Not very efficient, but we can optimize</p>

## How's it work?
<p>As the function works through the array, it will compare two consecutive indices. It will then swap them if index a is larger than index b until the largest number is at the end of the array</p>
<p>It then does this again, and again, repeating the whole process untill all values in the array are sorted smallest to biggest
</p>

### How do we swap?
<p> Many sorting algos involve some type of swapping functionality, see below: </p>

```js
//ES5
function swap(arr, idx1, idx2){
  var temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp
}

//ES2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1],arr[idx2] = [arr[idx2],arr[idx1]]
}
```

## Pseudocode
- Start looping with var i at the end of the array towards teh beginning
- start an inner loop with var j from the beginning, i - 1
- If arr[j] is > arr[j+1], swap those two values!
- Return the sorted array

## Implementation
