<template>
  <n-config-provider :theme-overrides="theme">
  <div class="page">
    <div class="container">
      <SlackMR />
    </div>
  </div>
  </n-config-provider>
</template>

<script>
import { theme } from './assets/theme'
import SlackMR from './blocks/SlackMR.vue'

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
