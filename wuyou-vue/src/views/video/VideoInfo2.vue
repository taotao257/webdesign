<template>
    <div class="video-info2">
        <h3>二級組件:互動情況分析</h3>
    </div>
</template>

<script>
export default {
  name: 'VideoInfo2',
  created () {
    this.handler()
  },
  methods: {
    handler () {
      this.$store.commit('changeCount', 1)
      this.$store.commit('changeCount', 2)
      this.$store.dispatch('delayChangeCount', 10)
      this.$store.commit('changeCount', 3)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
      console.log(this.$store.getters.len)
    }
  }
}
</script>
<style>

</style>
