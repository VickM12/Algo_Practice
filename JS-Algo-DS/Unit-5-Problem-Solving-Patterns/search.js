// Naive way:
let search = (arr, n) =>{
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == n){
      return i
    } 
  }
  return -1
}

// Binary Search:

let search2 = (arr, val) => {
  let min = 0;
  let max= arr.length -1;

  while (min <= max){
    let middle = Math.floor(( min + max) /2);
    let currentElement = arr[middle];
    if (arr[middle] < val){
      min = middle +1;
    }
    else if (arr[middle] > val){
      max = middle - 1
    }
    else{
      return middle
    }
  }
  return -1
}

console.log(search2([1,2,3,4,5,6,7] , 2))