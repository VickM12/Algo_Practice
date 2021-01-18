# Merge Sort
## Idea Behind It
- Combination of merging and sorting!
- Exploits the fact that arrays of 0 or 1 elements are always sorted.
- Works by decomoposing an array into smaller arrays of 0 or 1 elements then building up a newly sorted array

## How does it work?
arr=[8, 3, 5, 4, 7, 6, 1, 2]</br>
arr1=[8, 3, 5, 4] arr2=[7, 6, 1, 2]</br>
arr3=[8, 3] arr4=[5,4] arr5=[7,6] arr6=[1,2]</br>
arr7=[8] arr8=[3] arr9=[5] arr10=[4] arr11=[7] arr12=[6] arr13=[1] arr14=[2]</br>
 Then the arrays get merged, then merged again, and sorted, and again until the whole array is sorted and merged together

 ## Merging Arrays
 <p>In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays</p>

 <p>Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.</p>

 <p>This function should run O(n+m) time and O(n+m) space and SHOULD NOT modify the parameters passed to it</p>

 ## Pseudocode
 - Create an empy array, take a look at the smallest values in each input array
 - While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on the the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array.