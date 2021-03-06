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

## Radix Peudocode
- Define a function that accepts a list of numbers
- Figure out how many digits the largest number has
- Loop from k = 0 up to this largest number of digits
- For each iteration of the loop:
  - Create buckets (arrays) for each digit (0 to 9)
  - Place each numer in the corresponding bucket based on its kth digit
- Replace our existing array with values in our buckets, starting with 0 and going up to 9
- Return the list at the end!

## Big O Radix Sort
<table>
  <tr>
    <th>Time Complexity</br>
        (Best)</th>
    <th> Time Complexity</br>
          (Average)</th>
    <th>Time Complexity</br>
        (Worst)</th>
    <th>Space Complexity</th>
  </tr>
  <tr>
    <th>O(nk)</th>
    <th>O(nk)</th>
    <th>O(nk)</th>
    <th>O(n + k)</th>
  </tr>
</table>