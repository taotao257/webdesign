<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>父組建中接收到的數據:{{ childData }}</h1>
    <HelloWorld 
      msg="Welcome to Your Vue.js App"
      :count="parentCount"
      @child-count-change="handler"
      
    >this is default content 1
    <template #footer="{childCount}">first footer{{ childCount }}</template>
    </HelloWorld>
    <HelloWorld>this is default content 2</HelloWorld>
    <HelloWorld>this is default content 3</HelloWorld>
    <HelloWorld></HelloWorld>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      parentCount: 1000,
      childData: 0
    }
  },
  methods:{
    handler(childCount){
      this.childData = childCount
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
