<template>
  <JsonEditorVue class="editor" v-model="jsonValue" v-bind="options" />
</template>

<script setup>
import JsonEditorVue from 'json-editor-vue'
import { ref, watch, defineProps, defineEmits } from 'vue';

const props = defineProps({
  text: String
})
const emit = defineEmits(['jsonUpdate'])

const jsonValue = ref(props.text ? JSON.parse(props.text) : '')
const options = ref({
  mode: 'text',
  mainMenuBar: false,
});


watch(() => props.text, (text) => { jsonValue.value = text })

watch(jsonValue, (newVal, previous) => {
  console.log(newVal);
  console.log(previous);
  if (newVal !== previous) {
    emit('jsonUpdate', newVal)
  }
})
</script>

<style lang="sass">
.editor 
  height: var(--input-height)
  width: 100%

.editor .jse-text-mode 
  border-radius: 3px !important
</style>