# Insertion Sort
Builds up the sort by gradually creating a larger left half which is always sorted.

## Pseudocode
- Start by picking the second element in the array
- Compare the second element with the one before and swap if neccesary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
- Repeat until the array is sorted.

## Big O
Best: O(N)</br>
Worst: O(N^2)</br>
Avg: O(N^2)

It's ok for a "nearly sorted" array