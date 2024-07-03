<template>
  <div class="hello">
    <slot>基礎的默認內容</slot>
    <h1>{{ msg }}</h1>
    <p>count in props{{ count }}</p>
    <button @click="handler">按鈕</button>
    <slot name="footer" :childCount="childCount">footer的默認內容</slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //組件通信 
  //1. 父傳子 通過 props 進行處理
  //2. 子傳子 過自定義事件處理
  props: {
    msg: String,
    count:{
      type:[String, Number],
      //default:100
      required: true
    }
  },
  data(){
    return{
      childCount:0
    }
  },
  methods:{
    handler(){
      this.childCount++
      this.$emit('child-count-change', this.childCount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
