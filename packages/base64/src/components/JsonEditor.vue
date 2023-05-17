<template>
  <JsonEditorVue class="editor" v-model="internalValue" v-bind="options" />
</template>

<script setup>
import JsonEditorVue from 'json-editor-vue'
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const internalValue = computed({
  get() {
    try {
      return JSON.parse(props.modelValue);
    } catch (e) {
      return props.modelValue;
    }
  },
  set(value) {
    return emit('update:modelValue', value);
  },
});

const options = ref({
  mode: 'text',
  mainMenuBar: false,
});
</script>

<style lang="sass">
.editor 
  height: var(--input-height)
  width: 100%

.editor .jse-text-mode 
  border-radius: 3px !important
</style>