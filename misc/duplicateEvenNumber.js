/**Input = [1,2,3,4,5] */
/**Output = [1,2,2,3,4,4,5] */


function cloneEvenNumber(arr) {
  let temp = []
  arr.map(a => {
    if(a % 2 === 0) {
      temp.push(a)
      temp.push(a)
    } else {
      temp.push(a)
    }
  })
  return temp
}

console.log(cloneEvenNumber([1,2,3,4,5]))
