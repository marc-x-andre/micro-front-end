<template>
  <n-card>
    <n-thing content-indented>
      <template #header>
        Asking for Pull Request
      </template>
      <template #header-extra>
        <n-space>
          <n-button v-for="(emoji, i) in emojiOptions" :key="i" circle size="small" @click="() => changeEmoji(emoji)">
            {{ emoji }}
          </n-button>
          <n-button circle size="small" @click="() => changeEmoji()">
            <template #icon>
              <Shuffle />
            </template>
          </n-button>
          <n-button circle size="small" @click="() => changeEmoji(null)">
            <template #icon>
              <Close />
            </template>
          </n-button>
        </n-space>
      </template>

      <!-- Text -->
      <n-space vertical>

        <n-space vertical v-if="githubStore.token && githubStore.username">
          <n-input-group>
            <n-input v-model:value="githubLink" :status="githubStore.error ? 'error' : ''" :loading="githubStore.loading"
              placeholder="Github url" />
          </n-input-group>
        </n-space>
        <n-space vertical v-else>
          <n-input-group>
            <n-input v-model:value="boardId" type="text" placeholder="Board" />
            <n-input-number v-model:value="ticketId" placeholder="Ticket #" :style="{ width: '43%' }"
              :show-button="false" />
            <n-select v-model:value="destination" placeholder="Destination" :options="destinationOptions" />
          </n-input-group>
          <n-input v-model:value="link" placeholder="Hosted Link" />
        </n-space>

        <MessageBox v-if="githubStore.prInfo" :emoji="emoji" :link="link" />
        <MessageBox v-else :emoji="emoji" :boardId="boardId" :ticketId="ticketId" :link="link"
          :destination="destination" />
      </n-space>

      <!-- Text -->
      <template #action>
        <n-space>
          <n-button v-if="false" size="small" @click="() => copyToClipboard()">
            <template #icon>
              <n-icon>
                <Clipboard v-if="!copied" />
                <Sparkles v-else />
              </n-icon>
            </template>
            Copy to clipboard
          </n-button>
          <n-button size="small" @click="() => githubStore.openModal()">
            <template #icon>
              <n-icon>
                <Code />
              </n-icon>
            </template>
            Config
          </n-button>
          <n-divider />
          <n-divider />
          <n-tag v-if="githubStore.username" type="success" round>
            {{ githubStore.username }}
            <template #icon>
              <n-icon :component="LogoGithub" />
            </template>
          </n-tag>
          <n-tag v-else-if="githubStore.error" type="error" round>
            token invalid
            <template #icon>
              <n-icon :component="LogoGithub" />
            </template>
          </n-tag>
        </n-space>
      </template>
    </n-thing>
  </n-card>
</template>


<script setup>
import { ref, computed } from "vue"
import { Clipboard, Shuffle, Close, Sparkles, Code, LogoGithub } from '@vicons/ionicons5'
import { useGithubStore } from "@/stores/GithubStore";
import MessageBox from "@/components/MessageBox";

const githubStore = useGithubStore();


const destinationOptions = [
  { label: "dev", value: "dev" },
  { label: "stage", value: "stage" },
  { label: "master", value: "master" },
]

const emojiOptions = ["🐛", "🏗️", "💪", "💥", "🌱", "📦", "🎨"]

const emoji = ref(null)
const boardId = ref("")
const ticketId = ref(null)
const destination = ref(null)
const link = ref("")
const copied = ref(false)

const githubLink = computed({
  get: (v) => v,
  set: (link) => {
    githubStore.setPRInfo(link)
  }
})

const changeEmoji = (newValue) => {
  if (newValue === null) {
    emoji.value = ""
  } else if (!newValue) {
    emoji.value = emojiOptions[Math.floor(emojiOptions.length * Math.random())];
  } else {
    emoji.value = newValue
  }
}

const copyToClipboard = async () => {
  const copyText = document.getElementById("slackPRMsg").textContent;
  await navigator.clipboard.writeText(copyText);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}

changeEmoji();
</script>
