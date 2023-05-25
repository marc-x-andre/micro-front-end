<template>
  <n-button @click="showModal = true">
    CORS Bypass
  </n-button>
  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="CORS Bypass" :bordered="false" size="huge" role="dialog" aria-modal="true">
      <n-space vertical>
        <n-text>
          You can use the chrome extension "
          <a href="https://webextension.org/listing/access-control.html">CORS Unblock</a>".
          <br>
          It will allow any link to be render inside the iframe.
        </n-text>
        <n-image />
        <n-image width="520" :src="helper" />
      </n-space>
    </n-card>
  </n-modal>
</template>

<script setup>
import { ref } from "vue";
import helper from "../assets/helper.png";

const showModal = ref(false);
</script>