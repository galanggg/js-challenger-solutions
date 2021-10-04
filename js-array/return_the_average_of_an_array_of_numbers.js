// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction(input) {
  return input.reduce((a,b) => (a+b)) / input.length
}
