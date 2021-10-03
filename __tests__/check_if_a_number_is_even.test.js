const myFunction = require('../js-basic/check_if_a_number_is_even')

test('10 mod 2 to equal true', () => {
  expect(myFunction(10,2)).toBe(true)
})

test('5 mod 2 to equal false', () => {
  expect(myFunction(5,2)).toBe(false)
})


