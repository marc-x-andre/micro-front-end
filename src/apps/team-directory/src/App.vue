<template>
  <n-config-provider :theme-overrides="theme">
  <div class="page">
    <div class="container">
      <h1>Slack Message Maker</h1>
      <SlackMR />
    </div>
  </div>
  </n-config-provider>
</template>

<script>
import { theme } from './assets/theme'
import SlackMR from './components/SlackMR.vue'

export default {
  name: 'App',
  components: {
    SlackMR
  },
  data() {
    return {
      theme
    }
  }
}
</script>

<style>
</style>
