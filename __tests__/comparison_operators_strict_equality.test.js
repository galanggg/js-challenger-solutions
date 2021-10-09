const myFunction = require('../js-basic/comparison_operators_strict_equality')

test('1 is equal 1 to equal true', () => {
  expect(myFunction(1, 1)).toBe(true)
})

test("1 is equal '1' to equal true", () => {
  expect(myFunction(1, '1')).toBe(false)
})
