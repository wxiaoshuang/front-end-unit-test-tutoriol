var assert = require('assert')
let obj1 = {
    a: {
        b: 1
    }
}
let obj2 = {
    a: {
        b: 1
    }
}
// assert.equal(obj1, obj2)
assert.deepEqual(obj1, obj2)