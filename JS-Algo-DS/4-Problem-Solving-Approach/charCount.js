//Write a function that takes a string, and returns a count of each character in the string.

function charCount(str){
// Set an object to return 
  var result= {}
// Loop through the string
  for (var i = 0; i < str.length; i++){
  // Convert to lowercase for simplicity
    var char = str[i].toLowerCase()
  // Remove any non-alphanumeric characters  
    if (/[a-z0-9]/.test(char)){
  // If a character has already been counted, add one more    
      if( result[char] >0){
      result[char]++;
  // If no character has been added, add it as a key and set to 1 count    
      } else{
        result[char]=1;
        };
      }
    }
  // Return the object  
    return result;
  }

  console.log(charCount("Your PIN is 124"))
  /* 
  Output: {
  '1': 1,
  '2': 1,
  '4': 1,
  y: 1,
  o: 1,
  u: 1,
  r: 1,
  p: 1,
  i: 2,
  n: 1,
  s: 1
}
*/
