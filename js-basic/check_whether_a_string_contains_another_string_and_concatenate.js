// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation


function myFunction(a,b) {
  let temp = ''
  if(a.includes(b)) {
     temp += b.concat(a)
  } else {
    return a.concat(b).toString()
  }
  return temp.toString().trim()
}

console.log(myFunction('lips', 's'))
console.log(myFunction("cheese", "cake"))
console.log(myFunction("Java", "script"))
console.log(myFunction(" think, therefore I am","I"))
