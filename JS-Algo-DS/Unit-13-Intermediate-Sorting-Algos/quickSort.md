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

## Pseudocode:
### Pivot Helper
- Implement a function responsible for arranging elements in an array on either side of a pivot point.
- Given an array, this helper function should designate an element as teh pivot
- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot and all values greater than the pivot are moved to the right of the pivot

### Picking a Pivot
- The runtime of quick sort depends in part on how one selects the pivot
-Ideally, the pivot should be chosen so that it's roughly the median value in the data set you're sorting

### Pivot Pseudocode
- Accepts three aguments, an array, a start index, and an end index (these can default to 0 and array.length - 1)
- Grab the pivot from start of the array
- store teh current pivot index in a variable to keep track of where the pivot should end up
- Loop through the array from the start until the end
  - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
- Swap the starting element with the pivot index
- Return the pivot index

### Quicksort Pseudocode
- Call the pivot helper on the array
- Recursively call quicksort on the left and right side sub-arrays
- Base case occurs when you consider a subarray with less than 2 elements