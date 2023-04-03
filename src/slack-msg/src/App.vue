<template>
  <n-config-provider :theme-overrides="theme">
    <div class="page">
      <div class="container">
        <SlackMR />
      </div>
    </div>
    <GithubTokenModal />
  </n-config-provider>
</template>

<script>
import { theme } from './assets/theme'
import SlackMR from './blocks/SlackMR.vue'
import GithubTokenModal from "@/components/GithubTokenModal"

export default {
  name: 'App',
  components: {
    SlackMR,
    GithubTokenModal
  },
  data() {
    return {
      theme
    }
  }
}
</script>

<style></style>
