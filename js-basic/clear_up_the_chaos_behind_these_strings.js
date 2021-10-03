// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the words 'Javascript', 'Countryside', and 'Downtown'!
// You might want to apply basic JS string methods such as replace(), split(), slice() etc

function myFunction(a,b) {
  let hasil = a.concat(b.split('').reverse().join('')).split('%').join('')

  return hasil.charAt(0).toUpperCase() + hasil.slice(1)
}

console.log(myFunction('java', 'tpi%rcs'))
console.log(myFunction('c%ountry', 'edis'))
console.log(myFunction('down', 'nw%ot'))
