<template>
    <div>
      <h2>vue</h2>
      <div>{{foo}}</div>
      <div class="num">{{ count }}</div>
      <button  class="syncbutton" @click="increment">自增</button>
      <button class="asyncbutton" @click="incrementByAsync">异步自增</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0,
      foo: 'hi'
    }
  },
  methods: {
    increment () {
      this.count++
    },
     incrementByAsync () {
        window.setTimeout(() => {
          this.count++;
        }, 1000) 
      }
  }
}
</script>