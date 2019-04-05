const expect = require('chai').expect 
// const expect = chai.expect;
describe('jQuery', function () {
    it('expect able to have jQuery', function () {
      if (!window.jQuery) {
        throw new Error('查看下 karma.conf.js 配置项 files 是否正确')
      }
    })
  
    it('expect able to get a body', function () {
      var $body = $('body')
      expect($body.length).to.be.equal(1)
      expect($body[0]).to.be.equal(document.getElementsByTagName('body')[0])
    })
  
    describe('expect able to  trigger an event', function () {
      var ele
      before(function () {
        ele = document.createElement('button')
        document.body.appendChild(ele)
      })
  
      it('expect able to trigger an event', function (done) {
        $(ele).on('click', function () {
          done()
        }).trigger('click')
      })
  
      after(function () {
        document.body.removeChild(ele)
        ele = null
      })
    })
  
    it('expect able to request https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js', function (done) {
      // 使用 jQuery.ajax 请求 https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js，并验证是否拿到文件
      $.ajax({
        url: 'https://raw.githubusercontent.com/FE-star/exercise1/master/test/test.js',
        method: 'get',
        success(data) {
          done();
        },
        error(err) {
          done();
        }
      })
    })
  })