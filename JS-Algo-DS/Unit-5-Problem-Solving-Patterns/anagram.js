// Given two strings, write a function to determine if the second string is an anagram of the first. No spaces, no numbers, no symbols; only lowercase single words

function anagram(str1, str2){
  if(str1.length !== str2.length){
    return false
  }
  let test1 = {}
  let test2 = {}
  
  for(let val of str1){
    test1[val] = (test1[val] || 0) + 1
  }
  for (let val of str2){
    test2[val] = (test2[val] || 0) + 1
  }
  for (let key in test1){
    if(!(key in test2)){
      return false
    }
    if (test2[key] !== test1[key]){
      return false
    }
  }
  return true
}
console.log(anagram('cinema', 'iceman')) //Result: True
console.log(anagram('zza', 'aaz')) //Result: False