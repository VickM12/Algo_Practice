# Naive String Search
Used for searching for substring within a string

## Example
Search for "aha" in "harold said haha in hamburg".
We must compare each character side by side. 

## Pseudocode
- Loop over the longer string
- loop over the shorter string
- If the characters don't mathc, break the inner loop.
- If the characters do match, keep going.
- If you compolete the inner loop and find a match, increment the count of matches
- Return the count

### Code Snippet
```js
let naiveSearch = (long, short) => {
  for (let i = 0; i < long.length; i++){
    for (let j= 0; j < short.length; j++){
      if(short[j] !== long[i + j]){
        break;
      }
      if(j === short.length - 1){
        count ++;
      }
    }
  }
  return count
}
console.log(naiveSearch("lorie loled", "lol")//Result: 1
```