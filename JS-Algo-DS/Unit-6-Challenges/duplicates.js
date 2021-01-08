/* 
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
*/

let areThereDuplicates = () => {
  let collection = {}
  for(let val in arugments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if (collection[key] > 1) return true
  }
  return false
}

