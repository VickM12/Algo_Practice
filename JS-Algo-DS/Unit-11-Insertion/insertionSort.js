const insert = (arr) =>{
  for (i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    for (var j = i -1; j >= 0 && arr[j] > currentVal; j--){
      arr[j + 1] =  arr[j];
      console.log(arr)
    }
    arr[j+1]= currentVal
  }
  return arr
}

console.log(insert([76, 2, 6, 1, 45, 22]))