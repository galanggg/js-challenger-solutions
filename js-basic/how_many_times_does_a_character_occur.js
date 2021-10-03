// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(a,b) {
  let convert = b.toLowerCase()
  let temp = 0
  convert.split('').map((word, i) => {
    if(word === a) {
      temp+=1
    }
  })
  return temp
}
