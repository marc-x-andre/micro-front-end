<template>
  <n-alert :show-icon="false" style="padding: 1em;">
    <span id="slackPRMsg">
      {{ emoji }} PR for
      <component :is="ticket" />
      →
      <component :is="parentBranch" />
      :
      <component :is="code" />
    </span>
  </n-alert>
</template>


<script setup>
import { defineProps, ref, h } from "vue";
import { useGithubStore } from "@/stores/GithubStore";
import { useJiraStore } from "@/stores/JiraStore";

const props = defineProps({
  boardId: String,
  ticketId: Number,
  emoji: String,
  destination: String,
  link: String,
  prInfo: Object
})

const githubStore = useGithubStore()
const jiraStore = useJiraStore()
const prInfo = ref(githubStore.prInfo)
const jiraUrl = ref(jiraStore.url)

const ticket = () => {
  const text = (prInfo.value?.ticket || `${props.boardId || 'abc'}-${props.ticketId || 'xxx'}`).toUpperCase()
  const url = `${jiraUrl.value}/${text}`
  return h(
    'a',
    { href: url },
    text
  )
}

const parentBranch = () => {
  return h(
    'span',
    `${prInfo.value?.branch || props.destination || "branch"}`
  )
}

const code = () => {
  const url = `${prInfo.value?.url || props.link}`
  let hostname;
  try {
    hostname = `View on${new URL(url).hostname.split('.')[0]}`;
  } catch {
    hostname = url
  }
  return h(
    'a',
    { href: url },
    hostname
  )
}
</script>

<style lang="css">
#slackPRMsg a {
  color: var(--mxa-text-color-pressed, #798777);
  text-decoration: none;
}
</style>