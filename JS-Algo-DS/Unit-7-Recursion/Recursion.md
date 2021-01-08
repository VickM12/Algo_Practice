# Recursion
## Objectives
- Define Recursion
- Understand two essential components of a recursive function
- Visualize the call stack to better debug and understand recursive functions
- Unse helper method recursion and pure recursion to solve more difficult problems

## What is Recursion?
A process that calls itself

## What happens under the hood?
In almost all program languages, there is a built in data structure that manages what happens when functions are invoked. 

In JavaScript it's called the call stack
- It's a stack data structure
- Anytime a function is invoked, it is placed (pushed) on top of the call stack.
- When JS sees the RETURN keyword, or when the function ends, the function is removed.
