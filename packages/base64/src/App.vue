<template>
  <n-config-provider :theme-overrides="theme">
    <div class="mxa-container">
      <div class="mxa-inner-container full-width" style="padding-bottom: 3rem;">
        <n-h1 style="padding: 1rem;">Base64 Converter</n-h1>

        <div v-for="(c, i) in converter" :key="i">
          <ConverterForm />
          <n-divider></n-divider>
        </div>
        <n-space justify="space-around" size="large">
          <n-button size="large" :disabled="converter.length === 1" @click="() => removeConverter()">
            <template #icon>
              <n-icon>
                <Remove />
              </n-icon>
            </template>
          </n-button>
          <n-button size="large" @click="() => addConverter()">
            <template #icon>
              <n-icon>
                <Add />
              </n-icon>
            </template>
          </n-button>
        </n-space>
      </div>
    </div>
  </n-config-provider>
</template>

<script setup>
import { Add, Remove } from '@vicons/ionicons5'
import { theme } from './assets/theme'
import ConverterForm from './components/ConverterForm.vue'
import { ref } from 'vue';

const converter = ref([{}]);
const addConverter = () => converter.value.push({});
const removeConverter = () => converter.value.pop({});
</script>