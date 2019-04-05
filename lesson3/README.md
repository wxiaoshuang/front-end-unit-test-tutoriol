我们来看看chai断言库，chai提供了两种断言风格，一种是expect断言，一种是should断言，
我本人更喜欢expect断言风格，所以这里介绍下expect断言写法，有兴趣的同学也可以去了解should断言风格，用法大同小异
```javascript
// 相等或不相等
expect(4 + 5).to.be.equal(9);
expect(4 + 5).to.be.not.equal(10);
expect(foo).to.be.deep.equal({ bar: 'baz' });

// 布尔值为true
expect('everthing').to.be.ok;
expect(false).to.not.be.ok;

// typeof
expect('test').to.be.a('string');
expect({ foo: 'bar' }).to.be.an('object');
expect(foo).to.be.an.instanceof(Foo);

// include
expect([1,2,3]).to.include(2);
expect('foobar').to.contain('foo');
expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

// empty
expect([]).to.be.empty;
expect('').to.be.empty;
expect({}).to.be.empty;

// match
expect('foobar').to.match(/^foo/);
```
接下来我们看看mocha和chai一起使用吧

* npm init
* npm install mocha chai --save-dev
[回到首页](../README.md/#前端测试教程)