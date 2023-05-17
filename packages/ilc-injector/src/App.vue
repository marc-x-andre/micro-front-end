<template>
  <n-config-provider :theme-overrides="theme">
    <div class="mxa-container">
      <div class="mxa-inner-container full-width">
        <n-divider>ILC injector</n-divider>
        <n-grid x-gap="12" y-gap="12" cols="12">
          <n-gi span="6">
            <n-input-group>
              <n-input v-model:value="store.url" placeholder="Embed URL" />
              <n-input v-model:value="store.param" placeholder="Param name" />
              <n-button type="primary" @click="() => store.refreshIframe()">Apply</n-button>
            </n-input-group>
          </n-gi>
          <n-gi span="6">
            <n-text>
              Check for <n-text code>frameguard: false</n-text> in your helmet
            </n-text>
          </n-gi>
          <n-gi span="4">
            <JsonEditor v-model:modelValue="store.json" />
          </n-gi>
          <n-gi span="8">
            <EmbedSite />
          </n-gi>
          <n-gi span="12">
            <n-input :value="store.iframeUrl" type="text" placeholder="Final URL" />
          </n-gi>
        </n-grid>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { theme } from './assets/theme'
import JsonEditor from './components/JsonEditor.vue'
import EmbedSite from './components/EmbedSite.vue'
import { useViewerStore } from './stores/ViewerStore'

const store = useViewerStore();




</script>