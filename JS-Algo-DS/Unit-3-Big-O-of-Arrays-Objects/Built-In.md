# Built in Data Structures
## Objectives
- Understand how objects and arrays work through Big O.
- Explain why adding elements to beginning of an array is costly.
- compare/contrast the runtime of arr and obj and built-in methods

## What we get for free
### Objects
    let instructor = {
    firstName: 'Kelly',
    isInstructor: true,
    favoriteNumbers: [3, 13, 42]
    }
  - Big O
    - Insertion- O(1)
    - Removal- O(1)
    - Searching- O(N)
    - Accesss- O(1)
  - When you don't need ordering, objects are excellent!
  - Big O of Object Methods
    - Object.keys- O(N)
    - Object.values- O(N)
    - Object.entries- O(N)
    - hasOwnProperty- O(1)
### Arrays
  - Examples
    ```js
    let names= ["Michale", "Melissa", "Andrea"]
    let values = [true, {}, [], 2, "awesome"]
    ```
  - Use when you need order
  - When you need fast access/insertion and removal
  - Big O
    - Access- O(1)
    - Searching- O(N)
    - Insertion- it depends
    - Removal- it depends
  - Insertion
    - Adding to the end is O(1), because it just adds one value
    - Adding to the beginning is O(N) because every index has to be shifted and re-indexed
  - Removal
    - Remove from beginning, all items must be re-indexed
    - Remove from the end, just delete one item.
    - Push/Pop are fastest vs Shift/Unshift
  - Big O Array Methods
    - push - O(1)
    - pop- O(1)
    - shift- O(N)
    - unshift- O(N)
    - concat- O(N)
    - slice- O(N)
    - splice- O(N)
    - sort- O(N*logN)
    - forEach/map/filter/reduce...- O(N)
