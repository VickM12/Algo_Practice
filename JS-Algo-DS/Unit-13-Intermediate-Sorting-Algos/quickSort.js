// Helper function
const pivotHelper = (arr, start=0, end=arr.length+1) => {
 const swap = (arr, idx1, idx2) => {
   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
 }

var pivot = arr[start];
 var swapIdx = start;

 for (let i = start +1; i < arr.length; i ++){
   if (pivot > arr[i]){
     swapIdx++;
     swap(arr, swapIdx, i)
   }
 }
 swap(arr, start, swapIdx)
 return swapIdx;
}

// Implementing Quick Sort
const quickSort = (arr, left = 0, right= arr.length-1 ) => {
  if(left < right){
    let pivotIdx = pivotHelper(arr, left, right)
    // left
    quickSort(arr, left, pivotIdx-1)
    // right
    quickSort(arr, pivotIdx+1, right)
  }
  return arr;
};


console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))
// Result: [1, 2, 3, 4, 5, 6, 7, 8]