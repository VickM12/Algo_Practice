const linearSearch = (arr, val)=>{
  for(let i = 0; i < arr.length; i++){
    if (arr[i] !== val){
      return -1
    }else {return i
    }
  }
}

console.log(linearSearch([1, 2, 3, 4], 4)