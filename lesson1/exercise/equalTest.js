var assert = require('assert').strict
let arr = [1, 2, 3, 4]
let number1 = 10
let number2 = 2
let number3 = 12
assert.equal(arr.indexOf(number1), -1)
assert.equal(arr.indexOf(number2), 1)
// assert.equal(arr.indexOf(number3), 0, 'arr.indexOf(number3) === 0')