# Linear Search

## How do we search?
Imaging we have an array of U.S. states. How would we find a specific state? The simplest way is to just start at the beginning and work through the array. This isn't bad for a SORTED array...but what about an UN-Sorted way?

### JavaScript Linear Search Tools
- arr.indexOf(searchTerm)
- arr.includes(searchTerm)

### Example
Write a function that accepts an array of values and a value. Loop through the array and check if the value is in the array. IF it is, return the index, if not, return -1.

```const linearSearch = (arr, val)=>{
  for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
    if (arr[i] === val){
      return i
    }
  }
  return -1
}
```

## Big O
Best Case: O(1)- By miracle the data you're looking for is the first item. 
worst Case: O(N)
Average: O(N)