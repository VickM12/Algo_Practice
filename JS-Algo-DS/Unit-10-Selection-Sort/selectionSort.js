const select = (arr) =>{
  for (let i = 0; i < arr.length; i++){
    let min = i;
    for (j = i +1; j < arr.length; j++){
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    console.log("*****************");
    console.log(arr)
    console.log("SWAPPING TO: ")
    let temp = arr[i]
    arr[i] = arr[min];
    arr[min]= temp;
    console.log(arr)
    console.log("*****************")
  }
  return arr;
}

console.log(select([34, 22, 10, 19, 17]))