# mocha
mocha是一个全栈的单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行
mocha的特点主要有：

1. 既可以测试简单的JavaScript函数，又可以测试异步代码，因为异步是JavaScript的特性之一；

2. 可以自动运行所有测试，也可以只运行特定的测试；

3. 可以支持before、after、beforeEach和afterEach来编写初始化代码。

我们会详细讲解如何使用mocha编写自动化测试，以及如何测试异步代码。
## 编写测试
在lesson1我们已经学习了如何使用node自带的assert模块进行测试，但是没法自动运行测试，而且，如果前面的assert报错，后面的测试代码也执行不了了
如果有很多测试需要运行，就必须把这些测试全部组织起来，然后统一执行，并且得到执行结果。这就是我们为什么要用mocha来编写并运行测试
1. `mkdir hello-mocha && cd hello-mocha`
2. `npm init`
3. `npm install mocha --save-dev`
4. `mkdir src test`

我们在test目录下编写测试文件，mocha默认会执行test目录下的所有测试，**不要去改变默认目录**
我们来看看test下的hello.test.js文件，这是我们的业务代码

```javascript
const assert = require('assert').strict;

const sum = require('../src/hello');

describe('#hello.js', () => {
    describe('#sum()', () => {
        it('sum() should return 0', () => {
            assert.equal(sum(), 0);
        });
        it('sum(1) should return 1', () => {
            assert.equal(sum(1), 1);
        });
        it('sum(1, 2) should return 3', () => {
            assert.equal(sum(1, 2), 3);
        });
        it('sum(1, 2, 3) should return 6', () => {
            assert.equal(sum(1, 2, 3), 6);
        });
    });
});
```
测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。

describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称，第二个参数是一个实际执行的函数。

it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称，第二个参数是一个实际执行的函数。
这是同步代码的测试，我们俩看看异步代码怎么写测试
在hello-mocha/test目录下新建async.test.js，代码如下
```javascript
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
```
`cd hello-mocah`, 执行`mocha test/async.test.js`命令,报错了 `Error: Timeout of 2000ms exceeded`, 这是因为Mocha默认每个测试用例最多执行2000毫秒， 所以我们执行异步代码的时候需要用-t或--timeout参数指定超时门槛，现在我们执行`mocha -t 5000 test/async.test.js`
最后我们来了解一下Mocha的钩子
```javascript
describe('钩子说明', function() {

  before(function() {
    // 在本区块的所有测试用例之前执行
  });

  after(function() {
    // 在本区块的所有测试用例之后执行
  });

  beforeEach(function() {
    // 在本区块的每个测试用例之前执行
  });

  afterEach(function() {
    // 在本区块的每个测试用例之后执行
  });

});
```