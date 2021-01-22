# Quick Sort
- Like Merge Sort, exploits the fact that arrays of 0 or 1 element are always sorted
- workes by selecting one element called the "pivot" and finds the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

## How does it work?
```js
[5, 2, 1, 8, 4, 7, 6, 3]
```
We move all numbers less than 5 to the left of it, and all numbers to the right. 
```js
[3, 2, 1, 4, 5, 7, 6, 8]
```
In our sorted array, 5 has an index of 4. Then we recursively do the process again, from the left to the right.
```js
[1, 2, 3, 4, 5, 7, 6, 8]
[1, 2, 3, 4, 5, 6, 7, 8]
```