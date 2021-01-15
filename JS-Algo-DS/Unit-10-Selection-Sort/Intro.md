# Selection Sort
Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

## Psedocode
- Store first element as smallest so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
- If the minimum is not the value (index) you initially began with, swap the 2 values.
- Repeat with the next element until the array is sorted.

## Big O: O(N^2)
Selection is not very efficient. It's pro is that it can limit the number of swaps, vs bubble sort which swaps over and over again. 