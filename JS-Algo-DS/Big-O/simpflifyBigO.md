
# Rules of thumb for determining time comoplexity of an algorithm:
##  1. Constants don't matter
    - O(2n) --> O(n)
    - O(500) --> O(1)
    - O(13n^2) --> O(n^2)
##  2. Smaller terms don't matter
    - O(n + 10) --> O(n)
    - O(100n + 50) --> O(n)
    - O(n^2 + 5n + 8) --> O(n^2)
##  3. Arithmetic operations are constant
##  4. Variable assignment is constan
##  5. Accessing elements in an array is constant
##  6. In a loop, time complexity is the length of the loop times the complexity of whatever happens inside the loop
  