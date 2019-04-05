const assert = require('assert').strict;
describe('测试应该5000毫秒后结束', function () {
    it('异步代码测试', function(done) {
        var x = 0;
        var f = function () {
            x = 1;
            assert.ok(x);
            done(); // 异步测试一定要调用done通知Mocha测试结束
        };
        setTimeout(f, 4000);
    })
})