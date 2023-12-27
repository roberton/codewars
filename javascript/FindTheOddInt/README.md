# Find The Odd Int

## Metadata
ID: 54da5a58ea159efa38000836
URL: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

## Notes
Two interesting solutions.
First, how does this work?

`const findOdd = (xs) => xs.reduce((a, b) => a ^ b);`

Second, this is nice
`function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}`

