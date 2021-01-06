# Break it Down
## Problem Solving Strategies
- Understand the Problem
- Explore concrete examples
- Break it down
- Solve/simplify
- Look back and Refactor

## Break it Down
- Explicitly write out the steps you need to take
  - This forces you to think about your code before you write it

## Example:
Write a function which takes in a string and returns counts of each character in the string.

Steps:
  - Do something that returns an object with keys that are lowercase alphanumeric characters and returns the counts for those characters

- make object to return at end
- loop over string
  - if char is a number/letter AND is a key, add one to count
  - if char is a number/letter AND not in obj, att it to the obj and set value to 1
  - if char is not a number/letter, don't do anything.
- return object at end

charCount("Your PIN is 1234")
- Start with "Y"
- add y and count 1, or add 1 if char is in object already