# Radix Sort
## Sorting without comparisons
<p>What? How?</p>
<p>Raidx Sort is a special sorting algorithm that works on lists of numbers</p>
<p>It never makes comparisons between elements!</p>
<p>It exploits the fact that information about the size of a number is encoded in the number of digits.</p>
<p>More digits means a bigger number!</p>

## How it works
<p>Takes a list of numbers and creates buckets to place those numbers based on the digit in the right most position.</p>

### Example:
- 9, 29, 359 would all be grouped together

<p>Then it reforms the list based on the number order in teh buckets, then groups based on the digit in the tens position, and repeat, making its way through to the furthest left number. 


