<template>
  <iframe id="iframe-ilc" :src="iframeUrl"></iframe>
</template>

<script setup>
import { useViewerStore } from '@/stores/ViewerStore';
const { iframeUrl } = useViewerStore()
</script>

<style>
iframe {
  width: calc(100% - 4px);
  height: var(--input-height);
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 6px 10px 0px rgba(0, 0, 0, 0.14),
    0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
</style>