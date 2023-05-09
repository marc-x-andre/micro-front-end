<template>
  <n-config-provider :theme-overrides="theme">
    <div class="mxa-container">
      <div class="mxa-inner-container full-width">
        <n-divider>Base64 Converter</n-divider>
        <ConverterForm />
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { theme } from './assets/theme'
import ConverterForm from './components/ConverterForm.vue'
</script>