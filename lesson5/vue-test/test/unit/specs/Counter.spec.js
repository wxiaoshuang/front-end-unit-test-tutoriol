import Vue from 'vue'
import Counter from '@/components/Counter'
import {mount} from 'vue-test-utils'
describe('Counter.vue', () => {
  it('点击按钮后, count的值应该为1', () => {
    // 获取组件实例
    const Constructor = Vue.extend(Counter)
    // 挂载组件
    const vm = new Constructor().$mount()
    // 获取button
    const button = vm.$el.querySelector('button')
    // 新建点击事件
    const clickEvent = new window.Event('click')
    // 触发点击事件
    button.dispatchEvent(clickEvent)
    // 监听点击事件
    vm._watcher.run()
    // 断言:count的值应该是数字1
    expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1)
  })
  it('count异步更新, count的值应该为1', (done) => {
    /// 获取组件实例
    const Constructor = Vue.extend(Counter)
    // 挂载组件
    const vm = new Constructor().$mount()
    // 获取button
    const button = vm.$el.querySelectorAll('button')[1]
    // 新建点击事件
    const clickEvent = new window.Event('click')

    // 触发点击事件
    button.dispatchEvent(clickEvent)
    // 监听点击事件
    vm._watcher.run()
    // 1s后进行断言
    window.setTimeout(() => {
      // 断言:count的值应该是数字1
      expect(Number(vm.$el.querySelector('.num').textContent)).to.equal(1)
      done()
    }, 1000)
  })
})
describe('使用vue-test-util来测试Counter', () => {
  it('使用Vue-test-Utils: 正确渲染h2的文字为vue', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find('h2').text()).to.equal('vue')
  })
  it('find()/text()/html()方法', () => {
    const wrapper = mount(Counter)
    const h2 = wrapper.find('h2')
    expect(h2.text()).to.equal('vue')
    expect(h2.html()).to.equal('<h2>vue</h2>')
  })
  it('trigger方法', () => {
    const wrapper = mount(Counter)
    const buttonOfSync = wrapper.find('.syncbutton')
    buttonOfSync.trigger('click')
    buttonOfSync.trigger('click')
    const count = Number(wrapper.find('.num').text())
    expect(count).to.equal(2)
  })
  it('setData()方法', () => {
    const wrapper = mount(Counter)
    wrapper.setData({foo: 'bar'})
    expect(wrapper.vm.foo).to.equal('bar')
  })
})
