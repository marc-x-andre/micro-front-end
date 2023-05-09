<template>
  <n-form class="converter-form" ref="formRef" inline :label-width="80" :model="formValue" :rules="rules">
    <n-grid :cols="12" :x-gap="24" item-responsive>
      <!-- Row 1 -->
      <n-gi span="0 800:3" />
      <n-form-item-gi span="4 800:2" label="URL Encoded" path="urlEncoded">
        <n-switch v-model:value="formValue.urlEncoded" />
      </n-form-item-gi>
      <n-form-item-gi span="4 800:2" label="JSON Format" path="json">
        <n-switch v-model:value="formValue.json" />
      </n-form-item-gi>
      <n-form-item-gi span="4 800:2" label="Remove duplicate spaces" path="trim">
        <n-switch v-model:value="formValue.trim" />
      </n-form-item-gi>
      <n-gi span="0 800:3" />
      <!-- Row 2 -->
      <n-form-item-gi v-if="formValue.json" span="12 800:6" label="JSON" path="text">
        <JsonEditor @jsonUpdate="updateJson" :text="formValue.text" />
      </n-form-item-gi>
      <n-form-item-gi v-else span="12 800:6" label="Text" path="text">
        <n-input v-model:value="formValue.text" type="textarea" placeholder="This text will be translate to base64" />
      </n-form-item-gi>
      <n-form-item-gi span="12 800:6" label="Base64" path="base64">
        <n-input v-model:value="formValue.base64" type="textarea"
          placeholder="VGhpcyB0ZXh0IHdpbGwgYmUgdHJhbnNsYXRlIHRvIGJhc2U2NA==" />
      </n-form-item-gi>
    </n-grid>
  </n-form>
</template>

<script setup>
import { ref } from "vue";
import JsonEditor from "./JsonEditor.vue"

const textToBase64 = () => {
  let text = formValue.value.text;
  if (formValue.value.trim) {
    text = text.replace(/\s+/g, ' ');
  }
  text = formValue.value.urlEncoded ? encodeURI(text) : text;
  formValue.value.base64 = btoa(text)
  formValue.value.lastTouch = 'text'
};

const base64ToText = () => {
  try {
    const translated = atob(formValue.value.base64);
    formValue.value.text = formValue.value.urlEncoded ? decodeURI(translated) : translated
    formValue.value.lastTouch = 'base64'
    return true
  } catch {
    return false
  }
};

const updateJson = (json) => {
  console.log(JSON.stringify(JSON.parse(json)));
  formValue.value.text = JSON.stringify(JSON.parse(json));
  textToBase64()
}

const formRef = ref(null);
const formValue = ref({
  text: "",
  base64: "",
  urlEncoded: true,
  json: true,
  trim: true,
  lastTouch: undefined
});
const rules = {
  text: {
    trigger: ["input"],
    validator: (rule, value) => {
      textToBase64()
      return value !== "";
    }
  },
  base64: {
    trigger: ["input"],
    validator: () => {
      return base64ToText()
    }
  },
  urlEncoded: {
    trigger: ["input"],
    validator: () => {
      formValue.value.lastTouch === 'text' ? textToBase64() : base64ToText()
    }
  }
}
</script>

<style lang="sass">
.converter-form
  .n-input .n-input__input, .n-input .n-input__textarea
    height: var(--input-height)
</style>