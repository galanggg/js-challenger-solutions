// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(a) {
  return a.every(el => el === a[0])
}
