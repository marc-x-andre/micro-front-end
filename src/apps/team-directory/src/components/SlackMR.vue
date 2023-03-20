<template>
  <n-card>
    <n-thing content-indented>
      <template #avatar>
        <n-avatar color="#c9dec9">
          <n-icon color="#545d54">
            <GitPullRequest />
          </n-icon>
        </n-avatar>
      </template>
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
      <!--  -->

      <n-space vertical>
        <n-space vertical>
          <n-input-group>
            <n-input v-model:value="boardId" type="text" placeholder="Board" />
            <n-input-number v-model:value="ticketId" placeholder="Ticket #" :style="{ width: '43%' }"
              :show-button="false" />
            <n-select v-model:value="destination" placeholder="Destination" :options="destinationOptions" />
          </n-input-group>
          <n-input v-model:value="link" placeholder="Hosted Link" />
        </n-space>

        <n-alert :show-icon="false" style="padding: 1em;">
          <span id="slackPRMsg">
            {{ emoji }} PR for
            <span style="text-transform: uppercase;">
              {{ boardId || 'abc' }}
            </span>-<span style="text-transform: uppercase;">
              {{ ticketId || 'xxx' }}
            </span> → {{ destination || "branch" }}: 
            <span style="text-decoration: underline; color: #798777;">
              {{ link || '' }}
            </span>
          </span>
        </n-alert>

      </n-space>
      <template #action>
        <n-space>
          <n-button size="small" @click="() => copyToClipboard()">
            <template #icon>
              <n-icon>
                <Clipboard v-if="!copied"/>
                <Sparkles v-else/>
              </n-icon>
            </template>
            Copy to clipboard
          </n-button>
        </n-space>
      </template>
    </n-thing>
  </n-card>
</template>


<script setup>
import { ref } from "vue"
import { GitPullRequest, Clipboard, Shuffle, Close, Sparkles } from '@vicons/ionicons5'


const destinationOptions = [
  { label: "dev", value: "dev" },
  { label: "stage", value: "stage" },
  { label: "master", value: "master" },
]

const emojiOptions = ["🚧", "✨", "💪", "💥", "🎯", "🥊", "📈", "🌱"]

const emoji = ref(null)
const boardId = ref("")
const ticketId = ref(null)
const destination = ref(null)
const link = ref("")
const copied = ref(false)

const changeEmoji = (newValue) => {
  if (newValue === null) {
    emoji.value = ""
  } else if (!newValue) {
    emoji.value = emojiOptions[Math.floor(emojiOptions.length * Math.random())];
  } else {
    emoji.value = newValue
  }
}

const copyToClipboard = () => {
  const copyText = document.getElementById("slackPRMsg").textContent;
  navigator.clipboard.writeText(copyText);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 1000);
}

changeEmoji();
</script>
