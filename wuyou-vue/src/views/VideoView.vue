<template>
  <div class="video">
    <h3>一級組件: 影片訊息</h3>
    <p>影片id為: {{ id }}</p>
    <router-link :to="{ name: 'video-info1', params: { id: 28} }">點讚訊息</router-link>
    <router-link :to="{ name: 'video-info2', params: { id: 28} }">互動訊息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VideoView',
  props: ['id']
}
</script>

<style>

</style>
