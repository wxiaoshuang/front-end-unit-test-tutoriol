var assert = require('assert')
function fn() {
    xxx
}
// fn()
assert.throws(function(){
    fn()
}, ReferenceError)
