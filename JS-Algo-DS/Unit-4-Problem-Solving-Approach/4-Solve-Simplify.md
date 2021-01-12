# Solve or Simplify
## Problem Solving Strategies
- Understand the Problem
- Explore concrete examples
- Break it down
- Solve/simplify
- Look back and Refactor

## Solve/Simplify
- Solve the problem if you can
- If you can't, solve a simpler problem
- Ignore the part that is stumping you and focus on the other parts
- Write a simplified solution
- Then incorporate the difficulty back in

## Example
Write a function that takes a string, and counts each character
```js
charCount("Your PIN is 1234")

function charCOunt(str){
- make object to return at end
var result= {}
- loop over string
for (var i = 0; i < str.length: i++){
  var char = str[i].toLowerCase()
  - if char is a number/letter AND is a key, add one to count
  if(result[char] >0){
    result[char]++;
  }
  - if char is a number/letter AND not in obj, att it to the obj and set value to 1
  else{
    result[char]=1
    };
  }
  return result;
}
```
  
  
  - if char is not a number/letter, don't do anything.
- return object at end