function myFunction(a,b) {
  let temp = ''
  if(a.includes(b)) {
     temp += b.concat(a)
  } else {
    return a.concat(b).toString()
  }
  return temp.toString()
}

console.log(myFunction('lips', 's'))
console.log(myFunction("cheese", "cake"))
console.log(myFunction("Java", "script"))
console.log(myFunction(" think, therefore I am","I"))
