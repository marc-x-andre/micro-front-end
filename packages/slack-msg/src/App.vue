<template>
  <n-config-provider :theme-overrides="theme">
    <div class="page">
      <div class="mxa-container">
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
import { useGithubStore } from "@/stores/GithubStore";

export default {
  name: 'App',
  components: {
    SlackMR,
    GithubTokenModal
  },
  data() {
    return {
      theme,
      githubStore: useGithubStore()
    }
  },
  mounted() {
    this.githubStore.initStore()
  }
}
</script>

<style></style>
