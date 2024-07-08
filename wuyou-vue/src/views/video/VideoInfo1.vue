<template>
    <div class="video-info1">
        <h3>二級組件:點讚情況分析</h3>
    </div>
</template>

<script>
export default {
  name: 'VideoInfo1',
  created () {
    console.log(this.$store.state.loginStatus)
  }
}
</script>

<style>

</style>
