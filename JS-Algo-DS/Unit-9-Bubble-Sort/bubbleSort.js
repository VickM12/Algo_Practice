const bubbleSort = (arr)=>{
  for (let i = arr.length; i >0; i--){
    for (let j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        //Swap!
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }

    }
  }
  return arr
}

// console.log(bubbleSort([2, 3, 69, 10, 43, 56, 100, 24]))

//Slightly optimized way that breaks the pass if no swaps were made
const optBubbleSort = (arr)=> {
  let noSwaps;
  for (let i = arr.length; i >0; i--){
    for (let j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1])
      if(arr[j] > arr[j+1]){
        //Swap!
        let temp = arr[j];
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
      
    }
    if(noSwaps) break
  }
  return arr
}

console.log(optBubbleSort([2, 3, 69, 10, 43, 56, 100, 24]))