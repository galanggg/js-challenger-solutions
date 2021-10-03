// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(a) {
  return String(a).split('').map(num => Number(num))
}

console.log(myFunction(10))
console.log(myFunction(931))
console.log(myFunction(193278))
