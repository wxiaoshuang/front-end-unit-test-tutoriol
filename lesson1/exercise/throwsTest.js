var assert = require('assert').strict
function fn() {
    xxx
}
// fn()
assert.throws(function(){
    fn()
}, ReferenceError)
