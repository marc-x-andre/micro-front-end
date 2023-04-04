<template>
  <n-modal v-model:show="githubStore.showModal">
    <n-card style="width: 600px" title="Github Access Token" :bordered="false" size="huge" role="dialog"
      aria-modal="true">
      <template #header-extra>
        Token will only be in local storage
      </template>
      <n-space vertical>
        <n-input-group>
          <n-input v-model:value="token" placeholder="Github Token" />
        </n-input-group>
        <n-input-group>
          <n-input v-model:value="jiraUrl" placeholder="https://organization.atlassian.net/browse" />
        </n-input-group>
      </n-space>
      <template #footer>
        <n-button size="small" @click="() => save()">
          <template #icon>
            <n-icon>
              <Save />
            </n-icon>
          </template>
          Confirm
        </n-button>
      </template>
    </n-card>
  </n-modal>
</template>

<script setup>
import { useGithubStore } from "@/stores/GithubStore";
import { useJiraStore } from "@/stores/JiraStore";
import { Save } from '@vicons/ionicons5'
import { ref } from "vue";
const githubStore = useGithubStore();
const jiraStore = useJiraStore()
const token = ref(githubStore.token)
const jiraUrl = ref(jiraStore.url)

const save = () => {
  githubStore.setToken(token.value)
  githubStore.showModal = false
  jiraStore.setUrl(jiraUrl.value)
}

</script>
