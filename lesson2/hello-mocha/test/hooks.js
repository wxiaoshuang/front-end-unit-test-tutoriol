const assert = require('assert')
describe('钩子说明', function() {
    it('第一个测试用例', function() {

    })
    it('第二个测试用例', function() {
        
    })
    before(function() {
      // 在本区块的所有测试用例之前执行
      console.log('在本区块的所有测试用例之前执行')
    });
  
    after(function() {
      // 在本区块的所有测试用例之后执行
      console.log('在本区块的所有测试用例之后执行')
    });
  
    beforeEach(function() {
      // 在本区块的每个测试用例之前执行
      console.log('在本区块的每个测试用例之前执行')
    });
  
    afterEach(function() {
      // 在本区块的每个测试用例之后执行
      console.log('在本区块的每个测试用例之后执行')
    });
  
  });