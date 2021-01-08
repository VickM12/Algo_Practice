// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Solution MUST have the following complexities:
// Time: O(N)
// sample input: 
// sameFrequency(182, 281) True
// sameFrequency(34, 14) false

let sameFrequency =(n1, n2)=>{
  let strN1 = n1.toString();
  let strN2 = n2.toSting()
  if (strN1.length !== strN2.length) return false;

  let count1 = {}
  let count2 = {}

  for(let i = 0; i < strN1.length; i++){
    count1[strN1[i]] = (count1[strN1[i]] || 0) + 1
  }

  for (let j = 0; j < strN2.length; j++){
    count2[strN2[j]] = (count2[strN2[j]] || 0) + 1
  }
  for (let key in count1){
    if(count1[key] !== count2[key]) return false
  }
  return true
}