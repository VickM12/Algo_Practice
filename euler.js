let euler=(n)=>{
  let i = 0;
  let sum = 0;
  for (i = 0; i < n; i ++){
      if (i % 3 === 0 || i % 5 === 0){
          sum = sum + i
      }
  }return sum
  }

  console.log(euler(15))