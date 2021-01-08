/* 
  Write a function called averagePair that takes a sorted array of integers and a target average, determin if there is a pair of values in the array that average out to the target value.
*/

let averagePair = (arr, targ)=> {
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    let avg = (arr[left] + arr[right]) / 2;
    if(avg === targ){
      return true
    } else if(avg < targ){
       left++
    }else{right--}
  } return false
}

console.log(averagePair([1, 2, 3], 2.5))