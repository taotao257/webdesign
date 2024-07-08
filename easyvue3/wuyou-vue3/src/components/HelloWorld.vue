<template>
  <div class="hello">
    <!--<h1>{{ getLen }}</h1>-->
    <button @click="clickHandler">修改</button>
  </div>
</template>

<script setup>
import { watchEffect, reactive, ref } from 'vue';

// 1. reactive shallowReactive
//const myData = shallowReactive({
//  name: 'wuyou',
//  age: 18,
//  friends: ['aaa', 'bbb']
//})

// 2. ref
//const count = ref(0)

// 3. readonly shallowReadonly
//const myData = readonly()

// 4. computed
//const content = ref('這是一段測試內容')
//const getLen = computed(() => {
//  console.log('計算屬性執行了')
//  return content.value.length
//})

// 5. watch
const count = ref(0)
const myData = reactive({
  name: 'wuyou',
  age: 18,
  friends: ['aaa', 'bbb']
})
/*watch(() => myData.age, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})*/

// 6. watchEffect
watchEffect(() => {
  console.log('count值為: ' + count.value + ',age的值為: ' + myData.age)
})

function clickHandler () {
  //myData.age++
  //count.value++
  //content.value +='!'
  myData.age++
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
