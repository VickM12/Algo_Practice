# Look Back & Refactor
## Problem Solving Strategies
- Understand the Problem
- Explore concrete examples
- Break it down
- Solve/simplify
- Look back and Refactor

## Questions to ask:
- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the preformance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

## Example
Write a function that takes a string, and counts each character
```js
charCount("Your PIN is 1234")

function charCount(str){
var result= {}
for (var i = 0; i < str.length: i++){
  var char = str[i].toLowerCase()
  if (/[a-z0-9]/.test(char)){
    if( result[char] >0){
    result[char]++;
    } else{
      result[char]=1;
      };
    }
  }
  return result;
}
```